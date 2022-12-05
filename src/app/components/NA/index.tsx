import React from 'react';

type Props = {
  value?: any;
  children?: any;
  text?: any;
};

const NA = ({ value = '', children, text = 'N/A' }: Props) => {
  return <>{value ? children ? children : value : text}</>;
};

export default NA;
