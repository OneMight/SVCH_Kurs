import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Registration from './Pages/Registration';
import Logining from './Pages/Logining';
import HomePage from './Pages/HomePage';
export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/group' element={<HomePage/>}/>
          <Route path='/teams' element={<HomePage/>}/>
          <Route path='/pilots' element={<HomePage/>}/>
          <Route path='/news' element={<HomePage/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/logining' element={<Logining/>}/>
        </Routes>
      </BrowserRouter>
  );
}

