import {Routes, Route} from 'react-router-dom'

//Page Components
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import Price from './pages/Price'
import NavBar from './components/NavBar'

import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element = {<Main />} />
        {/* This is the route of our app, our initial route we wanna show the main component */}
        <Route path = '/currencies' element = {<Currencies />} />
        <Route path = '/price/:parameter' element = {<Price />} />
        {/* the : creates the parameter inside the price component, local var we can use and matching it to the symbol from the array*/}
      </Routes>
      {/* Routes component is going to wrap around the routes  */}
    </div>
  );
}

export default App;
