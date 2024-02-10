import { Nav } from '../Utils/Nav'
import { RegSidebar } from '../Utils/RegSidebar'


export const Registerdocument = () => {
    return (
        <div className='profile'>
            <Nav/>
    <div className='profile-main'>
       <RegSidebar/>
        <div className='profile-right'>
        <h1 className='profile-heading'>Registration</h1>
        <div className='profile-info'>
          <h1 className='profile-info-heading'>Documents</h1>
          <div className='profile-info-container'>
            <div className='profile-label'>Photo</div>
            <input className='profile-data-reg' type='file'/>
            <div className='profile-label'>Signature</div>
            <input className='profile-data-reg' type='file'/>
            <div className='profile-label'>10th Marksheet</div>
            <input className='profile-data-reg' type='file'/>
            <div className='profile-label'>12th Marksheet</div>
            <input className='profile-data-reg' type='file'/>
             <div className='profile-label'>Adhaar Image</div>
             <input className='profile-data-reg' type='file'/>
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
