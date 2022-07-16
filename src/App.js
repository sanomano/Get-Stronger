import './App.css';
import mainLogo from './assets//images/logo.png'

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <img src={mainLogo} alt="logo"></img>
        <div className='header-right-side'>
          <div className='header-language'>Language</div>
          <div className='dropdown-menu'>+</div>
        </div>
      </div>
    </div>
  );
}

export default App;
