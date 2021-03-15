import './App.css';
import BoardBox from './components/BoardBox';
import Header from './components/Header';
import About from './route/About';
import { Route } from 'react-router-dom';
import BoardCreate from './components/BoardCreate';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/about" component={About} />
      <Route path="/" exact={true} component={BoardBox} />
      <Route path="/boards/add" exact={true} component={BoardCreate} />
    </div>
  );
}

export default App;
