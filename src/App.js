import './App.css';
import mainLogo from './assets/logo.png'

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <img src={mainLogo} alt="logo"></img>
        <div>
          <div>Language</div>
          <div>+</div>
        </div>
      </div>
    </div>
  );
}

export default App;
