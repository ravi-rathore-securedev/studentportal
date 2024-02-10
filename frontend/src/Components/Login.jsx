import { Nav } from "./Utils/Nav"
import './Styles/Login.css'
import { Link } from "react-router-dom"
export const Login = () => {
  return (
  <>
    {/* <Nav/> */}
    <img className="nav-header" src={'/src/assets/aithimg.png'} alt="logo" />
    <div className="log-container">
    <div className="nothing"></div>
      <div className="log-heading">STUDENT LOGIN</div>
      <div className="log-box">
        <img className="user-img" src="/src/assets/fi-cwluxl-user-circle-solid.png" alt="user" />
        <div className="input1">
          <label className="log-label">Roll No.</label>
          <input className="log-input" type="text" placeholder="Enter Roll No." />
        </div>
        <div className="input1">
        <label className="log-label">D.O.B.</label>
          <input className="log-input" type="date" />
        </div>
        <Link to="/home">
        <button className="log-btn">SUBMIT</button>
        </Link>
        <Link to="/registerprofile">
        <button className="log-btn1">NEW USER: REGISTER</button>
        </Link>
      </div>

    </div>
    </>
  )
}
