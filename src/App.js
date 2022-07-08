import logo from './logo.svg';
import './App.css';
import NewsFeed from './components/news-feed';
import ContainerTwo from './components/container-two';
import SecondCounterContainer from './components/second-counter-container';

function App() {
  return (
    <div className="App">
      
      <NewsFeed /> 
      <br />
      <ContainerTwo />
      <br />
      <SecondCounterContainer />
    </div>
  );
}

export default App;
