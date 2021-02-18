import './App.css';
import BoardBox from './components/BoardBox'
function App() {
  const boards = [
    {
      "id":1,
      "content" :"test1"
    }
  ];
  return (
    <div className="App">
      <h1>Boards</h1>
      <BoardBox boards={boards}/>
    </div>
  );
}

export default App;
