import { Nav } from './Utils/Nav'
import './Styles/Timetable.css'
export const Timetable = () => {
    return (
        <div className="time">
        <Nav/>
        <h1 className='time-heading'>Time Table</h1>
        <div className='time-container'>
          <div className='time-main'>
            <div className='time-top'>
              <div className='time-label'>Branch</div>
              <div className='time-data'>Computer Science and Engineering</div>
              <div className='time-label'>Year</div>
              <div className='time-data'>3rd</div>
              <div className='time-label'>Semester</div>
              <div className='time-data'>5th</div>
    
            </div>
              <div className='time-table'>
              <table>
                <tr className='time-trow'>
                  <th className='assign-throw'>Timetable</th>
                  <th className='assign-throw'>10:00-11:00</th>
                  <th className='assign-throw'>11:00-12:00</th>
                  <th className='assign-throw'>12:00-01:00</th>
                  <th className='assign-throw'>01:00-2:00</th>
                  <th className='assign-throw'> 02:00-03:00</th>
                  <th className='assign-throw'>03:00-04:00</th>
                  <th className='assign-throw'>04:00-05:00</th>
                </tr>
                <tr className='assign-trow'>
                  <td className='time-tdata'>Monday</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                
                </tr>
                <tr className='assign-trow'>
                  <td className='assign-tdata'> Tuesday</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                 </tr>
                <tr className='assign-trow'>
                  <td className='assign-tdata'>Wednesday</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                 </tr>
                <tr className='assign-trow'>
                <td className='time-tdata'>Thursday</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                 </tr>
                <tr className='assign-trow'>
                <td className='time-tdata'>Friday</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                 </tr>
                <tr className='assign-trow'>
                <td className='time-tdata'>Saturday</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                  <td className='time-tdata'>DBMS<br/> KCS501 <br/> SND sir</td>
                 </tr>
              </table>
    
              </div>
          
    
    
          </div>
    
        </div>
    
        </div>
      )
}
