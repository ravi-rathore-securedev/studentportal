import { Link } from "react-router-dom"
import { Nav } from "./Utils/Nav"
import '/src/Components/Styles/Home.css'
export const Home = () => {
  return (
    <div className="home">
      <Nav />

      <div className="home-container">
        <div className="home-heading">  HOME DASHBOARD </div>
        <div className="grid-container">
          <Link to="/profile" className='linkstyle'>
            <div className="home-box">
              <img className="home-img" src="/src/assets/user_12359394.png" alt="no image" />

              <h2 className="home-label">Profile</h2>
            </div>
          </Link>
          <Link to="/attendance" className='linkstyle'>
            <div className="home-box">
              <img className="home-img" src="/src/assets/book-black-cover-closed_32354.png" alt="no image" />

              <h2 className="home-label">Attendance</h2>
            </div>
          </Link>
          <Link to="/assignment" className='linkstyle'>
            <div className="home-box">
              <img className="home-img" src="/src/assets/books-stack-three_29302.png" alt="no image" />

              <h2 className="home-label">Assignment</h2>
            </div>
          </Link>
          <Link to="/project" className='linkstyle'>
            <div className="home-box">
              <img className="home-img" src="/src/assets/edit_3597088.png" alt="no image" />

              <h2 className="home-label">Project</h2>
            </div>
          </Link>
          <Link to="/fee" className='linkstyle'>
            <div className="home-box">
              <img className="home-img" src="/src/assets/list_1950630.png" alt="no image" />

              <h2 className="home-label">Fees</h2>
            </div>
          </Link>
          <Link to="/timetable" className='linkstyle'>
            <div className="home-box">
              <img className="home-img" src="/src/assets/calendar_8922319.png" alt="no image" />

              <h2 className="home-label">Time Table</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
