import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Mainlayout from './components/MainLayout';
import Show from './pages/Show'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>

    
    <BrowserRouter>
      <Routes>
       <Route element={<Mainlayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/starred' element={<Starred/>}/>
        </Route>
        <Route path="/show/:showId" element={<Show />}/>
        <Route path='*' element={<div>Not Found</div>}/>
      </Routes>
    </BrowserRouter>

    </QueryClientProvider>
  );
}

export default App;
