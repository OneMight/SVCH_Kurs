import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Registration from './Pages/Registration';
import Logining from './Pages/Logining';
import HomePage from './Pages/HomePage';
import GroupPage from './Pages/Group'
import TeamsPage from './Pages/Teams';
import PilotsPage from './Pages/Pilots'
import PilotDetail from './Pages/PilotDetail'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
export default function App() {
  return (
    <>
      
      <BrowserRouter>
    
        <Routes>
        
            <Route path='/' element={<HomePage/>}/>
            <Route path='/group' element={<GroupPage/>}/>
            <Route path='/teams' element={<TeamsPage/>}/>
            <Route path='/pilots' element={<PilotsPage/>}/>
            <Route path='/news' element={<HomePage/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/logining' element={<Logining/>}/>
            <Route path='/pilotDetails/:id' element={<PilotDetail/>}/>
          
        </Routes>
   
      </BrowserRouter>
      
    </>
  );
}

