import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Profile } from './Components/ProfileSection/Profile.jsx';
import { Address } from './Components/ProfileSection/Address.jsx';
import { Degree } from './Components/ProfileSection/Degree.jsx';
import { Documents } from './Components/ProfileSection/Documents.jsx';
import { Semester } from './Components/ProfileSection/Semester.jsx';
import { Assignment } from './Components/Assignment.jsx';
import { Attendance } from './Components/Attendance.jsx';
import { Project } from './Components/Project.jsx';
import { Fees } from './Components/Fees.jsx';
import { Timetable } from './Components/Timetable.jsx';
import { RegisterProfile } from './Components/Register/RegisterProfile.jsx';
import { RegisterAddress } from './Components/Register/RegisterAddress.jsx';
import { RegisterDegree } from './Components/Register/RegisterDegree.jsx';
import { Registerdocument } from './Components/Register/Registerdocument.jsx';
import { RegisterSemester } from './Components/Register/RegisterSemester.jsx';

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/address' element={<Address/>}/>
          <Route path='/degree' element={<Degree/>}/>
          <Route path='/document' element={<Documents/>}/>
          <Route path='/semester' element={<Semester/>}/>
          <Route path='/assignment' element={<Assignment/>}/>
          <Route path='/attendance' element={<Attendance/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/fee' element={<Fees/>}/>
          <Route path='/timetable' element={<Timetable/>}/>

          <Route path='/registerprofile' element={<RegisterProfile/>}/>
          <Route path='/registeraddress' element={<RegisterAddress/>}/>
          <Route path='/registerdegree' element={<RegisterDegree/>}/>
          <Route path='/registerdocument' element={<Registerdocument/>}/>
          <Route path='/registerSemester' element={<RegisterSemester/>}/>
        
        </Routes>
        </BrowserRouter>
      </div>  
  );
}

export default App;
