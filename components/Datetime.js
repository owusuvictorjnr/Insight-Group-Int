import React from 'react';

const DateTime = () => {
  let showDate = new Date();

  let dt = showDate.toDateString();
  return <div>{dt}</div>;
};

export default DateTime;