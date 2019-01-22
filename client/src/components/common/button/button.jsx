import React from 'react';
import './style.scss';

const Button = ({extraClass, text, fetchType, onItemSelect}) => {
  return (
    <div className={extraClass} onClick={() => onItemSelect(fetchType)}>{text}</div>
  );
};

export default Button;
