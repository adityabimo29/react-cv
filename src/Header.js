import React from 'react';

const Header = () => {
  return(
     <header className='bg-lightest-blue black-80 tc pv4 avenir'>
       <img style={{height:"150px"}} alt='racoon cute' src='https://i.pinimg.com/originals/84/0f/fa/840ffab85ec531641d8959eee7ecf33a.png' />
      <h1>Portofolio Aditya</h1>
      <nav className='bt bb tc mw7 center mt4'>
        <a className='f6 f5-l link-bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l' href='https://google.com'>About Me</a>
      </nav>
     </header>
  );
}
  
  export default Header;
