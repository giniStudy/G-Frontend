import './App.css';
import BoardBox from './components/BoardBox'
import Header from './components/Header'
function App() {
  const boards = [
    {
      "id":1,
      "content" :"test1"
    },
    {
      "id":2,
      "content" :"test12"
    }

  ];
  return (
    <div className="App">
      <Header/>
      <BoardBox/>
    </div>
  );
}

export default App;
