// Utils paginate module;

import _ from 'lodash';

export function paginate(items, PageNumber, itemsPerPage) {
    // Getting our current startIndex
    const startIndex = (PageNumber - 1) * itemsPerPage;

    // Firstly we turn our items into a lodash object using _().
    // Then we use lodash functions slice and take, to get everything from the startIndex to the itemsPerPage
    // Using the lodash value method to return our results as an array
    return _(items)
        .slice(startIndex)
        .take(itemsPerPage)
        .value();
}
