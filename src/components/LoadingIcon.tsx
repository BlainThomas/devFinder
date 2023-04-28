import React from 'react';

const LoadingIcon: React.FC<{darkMode: boolean}> = ({darkMode}) => {

  return (
    <div className='loading'>
      <h1>Loading</h1>
      <img
          src={'./img/Logo.png'}
          alt={'Logo'}
          height={200}
          width={200}
          className="loading-spin" 
          />
    </div>
  )
}

export default LoadingIcon;