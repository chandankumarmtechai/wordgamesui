import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards'
import Jumble from './components/Jumble'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Cards name="Jumble"/>
        <Cards name="Sudoku"/>
        <Jumble/>
    </div>
  );
}

export default App;
