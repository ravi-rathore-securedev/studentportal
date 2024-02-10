import { Nav } from './Utils/Nav'
import './Styles/Assignment.css'
export const Assignment = () => {
  return (
    <div className="assignment">
    <Nav/>
    <h1 className='assign-heading'>Assignment</h1>
    <div className='assign-container'>
      <div className='assign-main'>
        <div className='assign-top'>
          <div className='assign-label'>Roll No.</div>
          <div className='assign-data'>2101660100046</div>
          <div className='assign-label'>Branch</div>
          <div className='assign-data'>Computer Science and Engineering</div>
          <div className='assign-label'>Year</div>
          <div className='assign-data'>3rd</div>
          <div className='assign-label'>Semester</div>
          <div className='assign-data'>5th</div>

        </div>
          <div className='assign-table'>
          <table>
            <tr className='assign-trow'>
              <th className='assign-throw'>Subject</th>
              <th className='assign-throw'>Subject Code</th>
              <th className='assign-throw'>Teacher</th>
              <th className='assign-throw'>Subject Unit</th>
              <th className='assign-throw'>Assign Date</th>
              <th className='assign-throw'>Assignment Document</th>
              <th className='assign-throw'>Submit Date</th>
              <th className='assign-throw'>Submit Document</th>
              <th className='assign-throw'>Assignment Status</th>
            </tr>
            <tr className='assign-trow'>
              <td className='assign-tdata'>Database Management System</td>
              <td className='assign-tdata'>CS-301</td>
              <td className='assign-tdata'>Mr. XYZ</td>
              <td className='assign-tdata'>Unit-1</td>
              <td className='assign-tdata'>10-08-2021</td>
              <td className='assign-tdata'>20-08-2021</td>
              <td className='assign-tdata'>Submitted</td>
              <td className='assign-tdata'>Submitted</td>
              <td className='assign-tdata'>Submitted</td>
            </tr>
            <tr className='assign-trow'>
              <td className='assign-tdata'>Database Management System</td>
              <td className='assign-tdata'>CS-301</td>
              <td className='assign-tdata'>Mr. XYZ</td>
              <td className='assign-tdata'>Unit-1</td>
              <td className='assign-tdata'>10-08-2021</td>
              <td className='assign-tdata'>20-08-2021</td>
              <td className='assign-tdata'>Submitted</td>
              <td className='assign-tdata'>Submitted</td>
              <td className='assign-tdata'>Submitted</td>
            </tr>
            <tr className='assign-trow'>
              <td className='assign-tdata'>Database Management System</td>
              <td className='assign-tdata'>CS-301</td>
              <td className='assign-tdata'>Mr. XYZ</td>
              <td className='assign-tdata'>Unit-1</td>
              <td className='assign-tdata'>10-08-2021</td>
              <td className='assign-tdata'>20-08-2021</td>
              <td className='assign-tdata'>Submitted</td>
              <td className='assign-tdata'>Submitted</td>
              <td className='assign-tdata'>Submitted</td>
            </tr>
            <tr className='assign-trow'>
              <td className='assign-tdata'>Database Management System</td>
              <td className='assign-tdata'>CS-301</td>
              <td className='assign-tdata'>Mr. XYZ</td>
              <td className='assign-tdata'>Unit-1</td>
              <td className='assign-tdata'>10-08-2021</td>
              <td className='assign-tdata'>20-08-2021</td>
              <td className='assign-tdata'>Submitted</td>
              <td className='assign-tdata' >Submitted</td>
              <td className='assign-tdata'>Submitted</td>
            </tr>
          </table>

          </div>
      


      </div>

    </div>

    </div>
  )
}
