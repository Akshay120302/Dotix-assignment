import First from './components/First.jsx'
import Second from './components/Second.jsx';
import Third from './components/Third.jsx'
import Fifth from './components/Fifth.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
  
    <Router>
      <Routes>
        <Route path='/' element={<First/>} />
        <Route path='/LeaderBoard' element={<Second/>} />
        <Route path='/dashboard' element={<Third/>} />
        <Route path='/index' element={<Fifth/>} />
      </Routes>
    </Router>
    
    
  );
}

export default App;

