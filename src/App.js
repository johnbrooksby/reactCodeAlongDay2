import logo from './logo.svg';
import './App.css';
import Bravo from './components/bravo'
import Charlie from './components/Charlie'

function App() {

  let person = "Brady"
  let num

  return (
    <div className="App">
      <h1>App</h1>
      <Bravo personName={person}/>
      <Bravo personName="John"/>
      <Bravo personName="Katie"/>
      <Charlie />
      <Charlie num={12}/>
      <Charlie num={78}/>
    </div>
  );
}

export default App;
