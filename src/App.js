
import Greeting from './components/Greeting';
import './App.css';

const students = ['Andrew', 'Ariana', 'Cihan', 'Danny', 'Jennifer', 'John', 'Kevin', 'Kevin D', 'Lorenzo', 'Pat', 'Max', 'Yaslin']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Props Demo</h1>
        {students.map(student => <Greeting key={student} name={student} />)} 
      </header>
    </div>
  );
}


export default App;
