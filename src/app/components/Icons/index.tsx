import React, { useEffect, useState } from 'react';
const Icon = props => {
  const [img, setImg] = useState('');

  useEffect(() => {
    if (props.name) {
      import(`app/assets/${props.name}`).then(imgData => {
        console.log(imgData.default);
        setImg(imgData.default);
      });
    }
  }, [props.name]);

  return <>{img && <img src={img} alt={props.name} />}</>;
};

export default Icon;
