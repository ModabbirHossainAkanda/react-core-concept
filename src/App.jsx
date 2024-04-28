import './App.css'
import Team from './Team';

function App() {
  
  function handleClick(){
    alert('button clicked');
  }
  function handleClick2(){
    alert('button 2 clicked')
  }

  return (
    <>
      
      <h3>React Core Concepts Part 2</h3>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      {/* chaile ek e line o kora jai, function call korar o drkar nai and seta korte hoile  */}
      <button onClick={() =>{alert('third clicked')}}>Third</button>
      
      
    </>
  )
}

export default App
