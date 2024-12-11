import { BrowserRouter, Routes, Route,useLocation, Navigate} from 'react-router-dom';
import Registration from './Pages/Registration';
import Logining from './Pages/Logining';
import HomePage from './Pages/HomePage';
import GroupPage from './Pages/Group'
import TeamsPage from './Pages/Teams';
import PilotsPage from './Pages/Pilots'
import PilotDetail from './Pages/PilotDetail'
import NewsPage from './Pages/NewsPage'
import AccountPage from './Pages/AccountPage'
import UsersPage from './Pages/UsersPage'
import SavedPilotsPage from './Pages/SavedPilotsPage'
import Comporation from './Pages/ComporationPage';
export default function App() {
  function RequireAuth({ children }) {
    let location = useLocation();
    const token = localStorage.getItem('token')
    if (!token) {
      
      return <Navigate to="/registration" state={{ from: location }} replace />;
    }
  
    return children;
  }
  return (
    <>
      
      <BrowserRouter>
    
        <Routes>
        
            <Route path='/' element={<HomePage/>}/>
            <Route path='/group' element={
              <RequireAuth>
                  <GroupPage/>
              </RequireAuth>
            }/>
            <Route path='/teams' element={
               <RequireAuth>
                 <TeamsPage/>
               </RequireAuth>
            }/>
            <Route path='/pilots' element={
               <RequireAuth> 
                 <PilotsPage/>
               </RequireAuth>
            }/>
            <Route path='/news' element={
               <RequireAuth>
                 <NewsPage/>
               </RequireAuth>
            }/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/logining' element={<Logining/>}/>
            <Route path='/pilotDetails/:id' element={<PilotDetail/>}/>
            <Route path='/account' element={<AccountPage/>}/>
            <Route path='/adminTable' element={<UsersPage/>}/>
            <Route path='/savedPilots' element={<SavedPilotsPage/>}/>
            <Route path='/comporation' element={<Comporation/>}/>
          
        </Routes>
   
      </BrowserRouter>
      
    </>
  );
}

