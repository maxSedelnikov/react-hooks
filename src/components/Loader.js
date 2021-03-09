import React from 'react';

const Loader = () => {
  return (
    <div className='col d-flex justify-content-center'>
      <div className='lds-ripple'>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
