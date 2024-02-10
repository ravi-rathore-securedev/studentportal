import { Nav } from "../Utils/Nav"
import '../Styles/Document.css'
import { Sidebar } from "../Utils/Sidebar"
export const Documents = () => {
    return (
        <div className='profile'>
            <Nav/>
    <div className='profile-main'>
      <Sidebar/>
        <div className='profile-right'>
        <h1 className='profile-heading'>Profile</h1>
        <div className='profile-info'>
          <h1 className='profile-info-heading'>Documents</h1>
          <div className='document-info-container'>
            <div className='document-label'>Photo</div>
            <div className='document-data'>
                <img src='/src/assets/mydata/img.jpeg' alt='profile' className='profile-image'/>
            </div>
            <div className='document-label'>Signature</div>
            <div className='document-data'>
            <img src='/src/assets/mydata/my sign .jpg' alt='profile' className='profile-image'/>
            </div>
            <div className='document-label'>10th Marksheet</div>
            <div className='document-data'> <img src='/src/assets/mydata/10 marksheet.jpg' alt='profile' className='profile-image'/>
            </div>
            <div className='document-label'>12th Marksheet</div>
            <div className='document-data'> <img src='/src/assets/mydata/12 marksheet my.jpg' alt='profile' className='profile-image'/></div>
            <div className='document-label'>Adhaar</div>
            <div className='document-data'>  <img src='/src/assets/mydata/ADHAAAR.jpg' alt='profile' className='profile-image'/></div>
            
          </div>
        </div>
        </div>
    
    
    </div>
    
            <div className='profile-container'>
              
            </div>
        </div>
      )
}
