import { Nav } from "../Utils/Nav"
import { RegSidebar } from "../Utils/RegSidebar"

export const RegisterProfile = () => {
    return (
        <div className='profile'>
            <Nav/>
    <div className='profile-main'>
        <RegSidebar/>
        <div className='profile-right'>
        <h1 className='profile-heading'>Registration</h1>
        <div className='profile-info'>
          <h1 className='profile-info-heading'>Personal Info</h1>
          <div className='profile-info-container'>
            <div className='profile-label'>Full Name</div>
            <input className='profile-data' type="text"/>
            <div className='profile-label'>Date Of Birth</div>
            <input className='profile-data' type="date"/>
            <div className='profile-label'>Gender</div>
            <input className='profile-data' type="text"/>
            <div className='profile-label'>Caste</div>
            <input className='profile-data'  type="text"/>
             <div className='profile-label'>Father's Name</div>
             <input className='profile-data'  type="text"/>
             <div className='profile-label'>Mother's Name</div>
             <input className='profile-data'  type="text"/>
             <div className='profile-label'>Email</div>
             <input className='profile-data' type="email"/>
              <div className='profile-label'>Mobile No.</div>
              <input className='profile-data'  type="tel"/>
               <div className='profile-label'>Father's Mobile No.</div>
               <input className='profile-data' type="tel"/>
            <div className='profile-label'>Adhaar Number</div>
            <input className='profile-data' type="tel"/>
            <div className='profile-label'>Father's Adhaar Number</div>
            <input className='profile-data' type="tel"/>
            <div className='profile-label'>Mother's Adhaar Number</div>
            <input className='profile-data' type="tel"/>
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
