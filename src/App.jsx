import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/starred' element={<Starred/>}/>
        <Route path='*' element={<div>Not Found</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
