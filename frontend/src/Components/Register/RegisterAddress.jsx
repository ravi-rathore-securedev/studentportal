import { Nav } from '../Utils/Nav'
import { RegSidebar } from '../Utils/RegSidebar'


export const RegisterAddress = () => {
    return (
        <div className='profile'>
            <Nav/>
    <div className='profile-main'>
       <RegSidebar/>
        <div className='profile-right'>
        <h1 className='profile-heading'>Registration</h1>
        <div className='profile-info'>
          <h1 className='profile-info-heading'>Address Info</h1>
          <div className='profile-info-container'>
            <div className='profile-label'>House No.</div>
            <input className='profile-data' type='tel'/>
            <div className='profile-label'>Locality</div>
            <input className='profile-data' type='text'/>
            <div className='profile-label'>Landmark</div>
            <input className='profile-data' type='text'/>
            <div className='profile-label'>City</div>
            <input className='profile-data' type='text'/>
            <div className='profile-label'>District</div>
            <input className='profile-data' type='text'/>
            <div className='profile-label'>State</div>
            <input className='profile-data' type='text'/>
             <div className='profile-label'>Pin Code</div>
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