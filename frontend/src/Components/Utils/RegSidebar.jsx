
import { Link } from 'react-router-dom'

export const RegSidebar = () => {
    return (
        <div className='profile-left'>
          <Link to="/registerprofile" className='linkstyle'>
        <button className='profile-button'> Personal Info</button>
        </Link>
        <Link to="/registeraddress" className='linkstyle'>
        <button className='profile-button'> Address </button>
        </Link>
        <Link to="/registerdegree" className='linkstyle'>
        <button className='profile-button'> Degree Info</button>
        </Link>
        <Link to="/registerdocument" className='linkstyle'>
        <button className='profile-button'> Documents</button>
        </Link>
        <Link to="/registersemester" className='linkstyle'>
        <button className='profile-button'> Semester Info</button>
        </Link>
        </div>
      )
    }
