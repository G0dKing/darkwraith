
import { } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Facebook from './Facebook.jsx'
import Capture from './Capture.jsx'

const App = () => {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Facebook />} />
        <Route path="/darkwraith" element={<Capture />} />       
      </Routes>
   </Router>
   </div>
  )
}

export default App;
