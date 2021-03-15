import './App.css';
import BoardBox from './components/BoardBox';
import Header from './components/Header';
import About from './route/About';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/about" component={About} />
      <Route path="/" exact={true} component={BoardBox} />
    </div>
  );
}

export default App;
