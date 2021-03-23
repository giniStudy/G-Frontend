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
      <Route path="/boards/:categorySeq" component={BoardBox} />
      <Route path="/board/add" exact={true} component={BoardCreate} />
    </div>
  );
}

export default App;
