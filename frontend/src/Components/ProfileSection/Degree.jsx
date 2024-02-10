import { Nav } from '../Utils/Nav'
import { Sidebar } from '../Utils/Sidebar'

export const Degree = () => {
    return (
        <div className='profile'>
            <Nav/>
    <div className='profile-main'>
       <Sidebar/>
       
        <div className='profile-right'>
        <h1 className='profile-heading'>Profile</h1>
        <div className='profile-info'>
          <h1 className='profile-info-heading'>Degree Info</h1>
          <div className='profile-info-container'>
            <div className='profile-label'>Roll No.</div>
            <div className='profile-data'>2101660100046</div>
            <div className='profile-label'>Enrollment No.</div>
            <div className='profile-data'>210166010008148</div>
            <div className='profile-label'>Course</div>
            <div className='profile-data'>Bachelor Of Technology</div>
            <div className='profile-label'>Branch</div>
            <div className='profile-data'>Computer Science And Engineering</div>
            <div className='profile-label'>Year</div>
            <div className='profile-data'>3rd </div>
            <div className='profile-label'>Admission Year</div>
            <div className='profile-data'>2021</div> 
            <div className='profile-label'>Passout Year</div>
            <div className='profile-data'>2025</div> <div className='profile-label'>Current Semester</div>
            <div className='profile-data'>5th</div> 
    
          </div>
        </div>
        </div>
    
    
    </div>
    
            <div className='profile-container'>
              
            </div>
        </div>
      )
}
