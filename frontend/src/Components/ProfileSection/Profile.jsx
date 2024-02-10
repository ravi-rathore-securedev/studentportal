import '../Styles/Profile.css'
import { Nav } from '../Utils/Nav'
import { Sidebar } from '../Utils/Sidebar'

export const Profile = () => {
  return (
    <div className='profile'>
        <Nav/>
<div className='profile-main'>
   <Sidebar/>
    <div className='profile-right'>
    <h1 className='profile-heading'>Profile</h1>
    <div className='profile-info'>
      <h1 className='profile-info-heading'>Personal Info</h1>
      <div className='profile-info-container'>
        <div className='profile-label'>Full Name</div>
        <div className='profile-data'>Ravi Rathore</div>
        <div className='profile-label'>Date Of Birth</div>
        <div className='profile-data'>09/02/2003</div>
        <div className='profile-label'>Gender</div>
        <div className='profile-data'>Male</div>
        <div className='profile-label'>Caste</div>
        <div className='profile-data'>OBC</div> <div className='profile-label'>Father's Name</div>
        <div className='profile-data'>Pappu</div> <div className='profile-label'>Mother's Name</div>
        <div className='profile-data'>Archana</div> <div className='profile-label'>Email</div>
        <div className='profile-data'>sirravirathore@gmail.com</div> <div className='profile-label'>Mobile No.</div>
        <div className='profile-data'>9058579618</div> <div className='profile-label'>Father's Mobile No.</div>
        <div className='profile-data'>9760661253</div>
        <div className='profile-label'>Adhaar Number</div>
        <div className='profile-data'>620910583817</div>
        <div className='profile-label'>Father's Adhaar Number</div>
        <div className='profile-data'>652145214563</div>
        <div className='profile-label'>Mother's Adhaar Number</div>
        <div className='profile-data'>785445212563</div>

      </div>
    </div>
    </div>


</div>

        <div className='profile-container'>
          
        </div>
    </div>
  )
}
