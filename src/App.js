import './App.css';
import Header from './Components/Header/header';
import Index from './Components/Body/Index';
import Community from './Components/Body/community/community';
import Events from './Components/Body/events/events';

function App() {
  return (
    <div className="App">
        <Header/>
        <Index/>
        <Community/>
        <Events/>
    </div>
  );
}

export default App;
