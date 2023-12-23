import React, { useState, useEffect } from 'react';

function MyForm() {
    const [file, setFile] = useState("");
    const [formData, setFormData] = useState(new FormData());

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const setimgfile = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            setFile(selectedFile);

            // Update FormData using a callback to ensure it's based on the latest state
            setFormData((prevFormData) => {
                const newFormData = new FormData(prevFormData);
                newFormData.append("photo", selectedFile);
                return newFormData;
            });

            console.log(selectedFile);
        }
    }

    const addUserData = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        };

        // Perform your axios request with formData
        // const res = await axios.post("/register", formData, config);
        // ...

    }

    return (
        <div className="p_greedo">
            {/* ... */}
            <input type="file" id="p_myFile" name='photo' onChange={setimgfile} />
            <button className='p_in' type="submit" onClick={addUserData}>Upload</button>
        </div>
    );
}

export default MyForm;
