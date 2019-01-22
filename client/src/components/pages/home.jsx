import React, { Component } from 'react';
import MainHero from '../containers/heroMain/heroMain';
import LoadModal from '../containers/loadModal/loadModal';
import FlightList from '../containers/flightList/flightList';
import axios from 'axios';

class Home extends Component {
    state = {
        flightType: '',
        isBusy: false,
        flowActive: false,
        flights: [],
        searchQuery: '',
    };

    handleSearch = query => {
        this.setState({
            searchQuery: query,
        });
    };

    getFlights = async flightType => {
        if (flightType === this.state.flightType) {
            console.log('Flight type the same');
            return;
        } else {
            this.setState({ flowActive: true, isBusy: true });
            this.setState({flightType});
        }
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}?type=${flightType}`);
            const flights = response.data;
            console.log(flights);
            this.setState({ flights, isBusy: false});
        } catch (error) {
            console.log(error);
        }
    };

    filteredFlights = () => {
        const {
            flights: allFlights,
            searchQuery,
        } = this.state;

        let filtered = allFlights;
        if (searchQuery)
            filtered = allFlights.filter(flight => {
                return (
                    flight.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    flight.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    flight.flightNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    flight.time.toLowerCase().includes(searchQuery.toLowerCase())
                )
            }
            );

        return { data: filtered };
    };

    handleKeyPress = () => {
        console.log('a key was pressed');
    }


    render() {
        const { data: flights } = this.filteredFlights();
        return <React.Fragment>
                <LoadModal isBusy={this.state.isBusy} />
                <MainHero onItemSelect={this.getFlights} flowActive={this.state.flowActive} />
                <FlightList flights={flights} handleSearch={this.handleSearch} searchQuery={this.state.searchQuery} flightType={this.state.flightType} onItemSelect={this.getFlights} flowActive={this.state.flowActive} />
			</React.Fragment>;
    }
}

export default Home;
