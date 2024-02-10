import { Nav } from '../Utils/Nav'
import { Sidebar } from '../Utils/Sidebar'

export const Address = () => {
  return (
    <div className='profile'>
        <Nav/>
<div className='profile-main'>
    <Sidebar/>
    <div className='profile-right'>
    <h1 className='profile-heading'>Profile</h1>
    <div className='profile-info'>
      <h1 className='profile-info-heading'>Address Info</h1>
      <div className='profile-info-container'>
        <div className='profile-label'>House No.</div>
        <div className='profile-data'>35/126</div>
        <div className='profile-label'>Locality</div>
        <div className='profile-data'>Madhu Nagar</div>
        <div className='profile-label'>Landmark</div>
        <div className='profile-data'>Near Panchsheel School</div>
        <div className='profile-label'>City</div>
        <div className='profile-data'>Agra</div> <div className='profile-label'>District</div>
        <div className='profile-data'>Agra</div> <div className='profile-label'>State</div>
        <div className='profile-data'>Uttar Pradesh</div> <div className='profile-label'>Pin Code</div>
        <div className='profile-data'>282001</div> 

      </div>
    </div>
    </div>


</div>

        <div className='profile-container'>
          
        </div>
    </div>
  )
}
