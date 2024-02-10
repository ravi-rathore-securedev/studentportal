import { Nav } from "../Utils/Nav"
import '../Styles/RegisterSem.css'
import { RegSidebar } from "../Utils/RegSidebar"
export const RegisterSemester = () => {
  return (
    <div className='profile'>
        <Nav/>
<div className='profile-main'>
    <RegSidebar/>
     <div className='profile-right'>
    <h1 className='profile-heading'>Registration</h1>

    <div className='profile-info'>
      <h1 className='profile-info-heading'>Semester Info</h1>

      <div className='sem-info-container'>
      <div className='sem-assign-top'>
      <div className='assign-label'>Branch</div>
          <input className='sem-assign-data'/>
          <div className='assign-label'>Semester</div>
          <input className='sem-assign-data'/>
          </div>
          <button className='sem-assign-label'>Search</button>
        <h2 className='sem-info-heading'> Subject Details</h2>

        <div className='profile-sem-container'>

        <div className='profile-label'>DataBase Management System</div>
        <div className='profile-data'>KCS501</div>
        <div className='profile-label'> Machine Learning</div>
        <div className='profile-data'>KCS502</div>
        <div className='profile-label'>Compiler Design</div>
        <div className='profile-data'>KCS503</div>
        <div className='profile-label'>Design and Analysis Of Algorithm</div>
        <div className='profile-data'> KCS504</div>
        <div className='profile-label'>Computer Graphics</div>
        <div className='profile-data'>KCS505 </div>
        <div className='profile-label'> Constitution Of India, Law And Engineering</div>
        <div className='profile-data'>KCS506</div> 

      </div>

      <h2 className='sem-info-heading'> Practical Details</h2>

        <div className='profile-sem-container'>

        <div className='profile-label'>DataBase Management System Lab</div>
        <div className='profile-data'>KCS501P</div>
        <div className='profile-label'>Compiler Design Lab</div>
        <div className='profile-data'>KCS503P</div>
        <div className='profile-label'>Design and Analysis Of Algorithm Lab</div>
        <div className='profile-data'> KCS504P</div>
        <div className='profile-label'>Computer Graphics Lab</div>
        <div className='profile-data'>KCS505 </div>

      </div>
      </div>
      <button className='sem-assign-label'>Submit</button>
    </div>
    </div>


</div>
    </div>
  )
}
