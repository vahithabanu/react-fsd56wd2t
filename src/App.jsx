
import Hello from "./components/Hello";

import './App.css';





//creating our first component
function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
   <Hello name="React"/>
   <Hello name="CSS"/>
   <Hello name="HTML"/>
   <Hello name="JS"/>
   
    <p>A basic react application</p>
    </div>
  )
}

export default App;
