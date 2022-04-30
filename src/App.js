import './App.css';
import Accordion from './Components/Accordion';

function App() {

const items=[
  {
    title:'What is React',
    content:'React is a frontend javascript framework'
  },
  {
    title:'Why use React?',
    content:'React is a favourite library among engineers'
  },
  {
    title:'how do u use React',
    content:'you use react by creating components'
  }
];


  return (
    <div className="App">
     <Accordion items={items}/>
    </div>
  );
}

export default App;
