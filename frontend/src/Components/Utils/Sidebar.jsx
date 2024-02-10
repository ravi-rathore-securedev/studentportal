import { Link } from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className='profile-left'>
      <Link to="/profile" className='linkstyle'>
    <button className='profile-button'> Personal Info</button>
    </Link>
    <Link to="/address" className='linkstyle'>
    <button className='profile-button'> Address </button>
    </Link>
    <Link to="/degree" className='linkstyle'>
    <button className='profile-button'> Degree Info</button>
    </Link>
    <Link to="/document" className='linkstyle'>
    <button className='profile-button'> Documents</button>
    </Link>
    <Link to="/semester" className='linkstyle'>
    <button className='profile-button'> Semester Info</button>
    </Link>
    </div>
  )
}
