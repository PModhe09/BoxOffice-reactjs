import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Mainlayout from './components/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route element={<Mainlayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/starred' element={<Starred/>}/>
        </Route>
        <Route path='*' element={<div>Not Found</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
