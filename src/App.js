import './App.css';
import Header from './Components/Header/header';
import Index from './Components/Body/Index';
import Community from './Components/Body/community/community';
import Events from './Components/Body/events/events';
import Footer from './Components/Footer/footer';

//this is just for the experiment purpose
import JoinCommunity from './Components/Body/community/join-community';

function App() {
  return (
    <div className="App">
        <Header/>
        <Index/>
        <Community/>
        <Events/>
        <JoinCommunity/>
        <Footer/>
    </div>
  );
}

export default App;
