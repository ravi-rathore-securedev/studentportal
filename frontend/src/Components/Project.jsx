import { Nav } from './Utils/Nav'

export const Project = () => {
    return (
        <div className="assignment">
        <Nav/>
        <h1 className='assign-heading'>Project</h1>
        <div className='assign-container'>
          <div className='assign-main'>
            <div className='assign-top'>
              <div className='assign-label'> Project Name</div>
              <div className='assign-data'>Student Portal</div>
              <div className='assign-label'>Project Report</div>
              <div className='assign-data'>Student  management</div>
              <div className='assign-label'>Year</div>
              <div className='assign-data'>3rd</div>
              <div className='assign-label'>Team memebers No.</div>
              <div className='assign-data'>4</div>
    
            </div>
            <h1 className='project-heading'>Team Member Details</h1>
              <div className='assign-table'>
              <table>
                <tr className='assign-trow'>
                  <th className='assign-throw'>Name</th>
                  <th className='assign-throw'> Roll No.</th>
                  <th className='assign-throw'>Branch</th>
                 
                </tr>
                <tr className='assign-trow'>
                  <td className='project-tdata'>Ravi Rathore</td>
                  <td className='project-tdata'>2101660100046</td>
                  <td className='project-tdata'>Computer Science And Engineering</td>
                </tr>
                <tr className='assign-trow'>
                <td className='project-tdata'>Ravi Rathore</td>
                  <td className='project-tdata'>2101660100046</td>
                  <td className='project-tdata'>Computer Science And Engineering</td>
                </tr>
                <tr className='assign-trow'>
                <td className='project-tdata'>Ravi Rathore</td>
                  <td className='project-tdata'>2101660100046</td>
                  <td className='project-tdata'>Computer Science And Engineering</td>
                </tr>
                <tr className='assign-trow'>
                <td className='project-tdata'>Ravi Rathore</td>
                  <td className='project-tdata'>2101660100046</td>
                  <td className='project-tdata'>Computer Science And Engineering</td>
                </tr>
                <tr className='assign-trow'>
                <td className='project-tdata'>Ravi Rathore</td>
                  <td className='project-tdata'>2101660100046</td>
                  <td className='project-tdata'>Computer Science And Engineering</td>
                </tr>
              </table>
    
              </div>
          
    
    
          </div>
    
        </div>
    
        </div>
      )
}
