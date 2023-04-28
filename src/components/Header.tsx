import React from 'react';
import { ReactComponent as LightIcon } from '../assets/icon-sun.svg'
import { ReactComponent as DarkIcon } from '../assets/icon-moon.svg'

type Props = {
  darkMode: boolean;
  handleThemeChange: () => void;
};

const Header: React.FC<Props> = ({darkMode, handleThemeChange}) => {

  return (
    <div className='header'>
      <h3 className='title'>devfinder</h3>
      <div className='theme-button' onClick={handleThemeChange}>
        { darkMode ?
          <div className='light-icon'>
            <div>Light</div>
            <LightIcon style={{ marginLeft: '15px'}} />
          </div >
          :
          <div className='dark-icon'>
            <div>Dark</div>
            <DarkIcon style={{ marginLeft: '15px'}} />
          </div>
        }
      </div>
    </div>
  )
}

export default Header;