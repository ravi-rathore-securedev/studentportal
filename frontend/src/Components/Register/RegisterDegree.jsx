import { Nav } from '../Utils/Nav'
import { RegSidebar } from '../Utils/RegSidebar'


export const RegisterDegree = () => {
    return (
        <div className='profile'>
            <Nav/>
    <div className='profile-main'>
       <RegSidebar/>
        <div className='profile-right'>
        <h1 className='profile-heading'>Registration</h1>
        <div className='profile-info'>
          <h1 className='profile-info-heading'>Degree Info</h1>
          <div className='profile-info-container'>
            <div className='profile-label'>Roll No.</div>
            <input className='profile-data' type='tel'/>
            <div className='profile-label'>Enrollment No.</div>
            <input className='profile-data'  type='tel'/>
            <div className='profile-label'>Course</div>
            <input className='profile-data'  type='text'/>
            <div className='profile-label'>Branch</div>
            <input className='profile-data' type='text'/>
            <div className='profile-label'>Year</div>
            <input className='profile-data' type='tel'/>
            <div className='profile-label'>Admission Year</div>
            <input className='profile-data'type='tel' />
            <div className='profile-label'>Passout Year</div>
            <input className='profile-data' type='tel'/>
             <div className='profile-label'>Current Semester</div>
            <input className='profile-data' type='tel'/> 
    
          </div>
          <button className='sem-assign-label'>Submit</button>
        </div>
        </div>
    
    
    </div>
    
            <div className='profile-container'>
              
            </div>
        </div>
      )
}
