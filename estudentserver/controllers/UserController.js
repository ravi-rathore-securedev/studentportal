
import dbConnection from '../database/db.js';
// import path from 'path';


export const StudentDetail = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        // Check if all required parameters are present in the request body
        const requiredParams = [];

        const user = req.body;
        const {RollNo} = req.params;
        // console.log(user);
        // console.log("forLOop");
        for (const param of requiredParams) {
            if (user[param] === undefined) {
                console.log(`Warning: ${param} is undefined in the user object.`);
                user[param] = null;
            }
        }
        // Insert data into the table
        const [result, fields] = await connection.execute(`
        INSERT INTO RegisterStudent (
            RollNo,
            EnrollmentNo,
            Year,
            Branch ,
            Gender,
            StudentName ,
            Dob, 
            Email_ID,
            StudentID_No ,
            Father_Name ,
            FID_No ,
            Mother_Name , -- Corrected column name here
            MID_No ,
            Student_MNO ,
            Father_MNo ,
            currentyear
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [   RollNo,
                user.EnrollmentNo,
                user.Year,
                user.Branch ,
                user.Gender,
                user.StudentName ,
                user.Dob, 
                user.Email_ID,
                user.StudentID_No ,
                user.Father_Name ,
                user.FID_No ,
                user.Mather_Name ,
                user.MID_No ,
                user.Student_MNO ,
                user.Father_MNo ,
                user.currentyear]);

        // Check if the insertion was successful
        if (result.affectedRows === 1) {
            // User data successfully inserted
            return res.status(200).json({ message: 'User added successfully!' });
        } else {
            // No rows were affected, indicating the insertion failed
            return res.status(500).json({ error: 'Failed to add user.' });
        }

        // Release the connection back to the pool
        connection.release();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const StudentAddress = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        // Check if all required parameters are present in the request body
        const requiredParams = [];

        const user = req.body;
        console.log(user);
        const {RollNo} = req.params;
        // console.log("forLOop");
        for (const param of requiredParams) {
            if (user[param] === undefined) {
                console.log(`Warning: ${param} is undefined in the user object.`);
                user[param] = null;
            }
        }
        
        // Insert data into the table
        const [result, fields] = await connection.execute(`
        INSERT INTO StudentAddress (
            RollNo,
            area,
            houseNo,
            block,
            dist,
            state,
            pincode,
            country
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
        `,
            [   RollNo,
                user.area,
          user.houseNo,
          user.block,
          user.dist,
           user.state,
           user.pincode,
         user.country]);

        // Check if the insertion was successful
        console.log(RollNo);
        if (result.affectedRows === 1) {
            // User data successfully inserted
            return res.status(200).json({ message: 'Address added successfully!' });
        } else {
            // No rows were affected, indicating the insertion failed
            return res.status(500).json({ error: 'Failed to add Address.' });
        }

        // Release the connection back to the pool
        connection.release();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
export const SemesterMarks = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        // Check if all required parameters are present in the request body
        const requiredParams = [];

        const user = req.body;
        console.log(user);
        const {RollNo} = req.params;
        // console.log("forLOop");
        for (const param of requiredParams) {
            if (user[param] === undefined) {
                console.log(`Warning: ${param} is undefined in the user object.`);
                user[param] = null;
            }
        }
        
        // Insert data into the table
        const [result, fields] = await connection.execute(`
        INSERT INTO SemesterMarks (
            RollNo,
            I_Sem,
            II_Sem,
            III_Sem,
            IV_Sem,
            V_Sem,
            VI_Sem,
            VII_Sem,
            VIII_Sem
        ) 
        VALUES (?,?, ?, ?, ?, ?, ?, ?, ?);
        `,
            [   RollNo,
                user.I_Sem,
            user.II_Sem,
            user.III_Sem,
            user.IV_Sem,
            user.V_Sem,
            user.VI_Sem,
            user.VII_Sem,
            user.VIII_Sem]);

        // Check if the insertion was successful
        console.log(RollNo);
        if (result.affectedRows === 1) {
            // User data successfully inserted
            return res.status(200).json({ message: 'Marks added successfully!' });
        } else {
            // No rows were affected, indicating the insertion failed
            return res.status(500).json({ error: 'Failed to add Marks.' });
        }

        // Release the connection back to the pool
        connection.release();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const SubjectDetails = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        // Check if all required parameters are present in the request body
        const requiredParams = [];

        const user = req.body;
        // console.log(user);
        const {RollNo} = req.params;
        // console.log("forLOop");
        for (const param of requiredParams) {
            if (user[param] === undefined) {
                console.log(`Warning: ${param} is undefined in the user object.`);
                user[param] = null;
            }
        }
        
        // Check if the data already exists for the given RollNo and Semester
        const [existingData, _] = await connection.execute(`
            SELECT * FROM SubjectChoose
            WHERE RollNo = ? AND Semester = ?;
        `, [RollNo, user.Semester]);

        // If data already exists, return an error response
        if (existingData.length > 0) {
            // console.log('Subject details already exist for the given RollNo and Semester.')
            return res.status(200).json({ message: 'Subject details already exist for the given RollNo and Semester.' });
        }
        // Insert data into the table
        const [result, fields] = await connection.execute(`
        INSERT INTO SubjectChoose (
            RollNo,
            Semester,
    SubCode_I ,
SubCode_II ,
SubCode_III ,
SubCode_IV ,
SubCode_V ,
SubCode_VI ,
PCode_I ,
PCode_II ,
PCode_III ,
PCode_IV 
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?);
        `,
            [   RollNo,
                user.Semester,
                user.SubCode_I ,
               user.SubCode_II ,
               user.SubCode_III ,
               user.SubCode_IV ,
               user.SubCode_V ,
               user.SubCode_VI ,
               user.PCode_I ,
               user.PCode_II ,
               user.PCode_III ,
               user.PCode_IV ]);

        // Check if the insertion was successful
        console.log(RollNo);
        if (result.affectedRows === 1) {
            // User data successfully inserted
            return res.status(200).json({ message: 'Subject added successfully!' });
        } 
        else {
            // No rows were affected, indicating the insertion failed
            return res.status(500).json({ message: 'Subject already added' });
        }

        // Release the connection back to the pool
        connection.release();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const SemesterSubject = async (req, res) => {
    try {
        const connection = await dbConnection();
        
        const {Semester} = req.params;
        console.log(Semester);
        
        // Fetch data using a JOIN operation
    const [rows, fields] = await connection.execute(`
    SELECT
                TheorySubject.Semester,
                TheorySubject.SubCode_I,
                TheorySubject.SubCode_II,
                TheorySubject.SubCode_III,
                TheorySubject.SubCode_IV,
                TheorySubject.SubCode_V,
                TheorySubject.SubCode_VI,
                PracticalSubject.PCode_I,
                PracticalSubject.PCode_II,
                PracticalSubject.PCode_III,
                PracticalSubject.PCode_IV,
                TS1.SubName AS SubName_I,
                TS2.SubName AS SubName_II,
                TS3.SubName AS SubName_III,
                TS4.SubName AS SubName_IV,
                TS5.SubName AS SubName_V,
                TS6.SubName AS SubName_VI,
                PS1.SubName AS SubName_P_I,
                PS2.SubName AS SubName_P_II,
                PS3.SubName AS SubName_P_III,
                PS4.SubName AS SubName_P_IV
            FROM
                TheorySubject
            JOIN
                PracticalSubject ON TheorySubject.Semester = PracticalSubject.Semester
            LEFT JOIN
                TheorySubName AS TS1 ON TheorySubject.SubCode_I = TS1.SubCode
            LEFT JOIN
                TheorySubName AS TS2 ON TheorySubject.SubCode_II = TS2.SubCode
            LEFT JOIN
                TheorySubName AS TS3 ON TheorySubject.SubCode_III = TS3.SubCode
            LEFT JOIN
                TheorySubName AS TS4 ON TheorySubject.SubCode_IV = TS4.SubCode
            LEFT JOIN
                TheorySubName AS TS5 ON TheorySubject.SubCode_V = TS5.SubCode
            LEFT JOIN
                TheorySubName AS TS6 ON TheorySubject.SubCode_VI = TS6.SubCode
            LEFT JOIN
                PracticalSubName AS PS1 ON PracticalSubject.PCode_I = PS1.SubCode
            LEFT JOIN
                PracticalSubName AS PS2 ON PracticalSubject.PCode_II = PS2.SubCode
            LEFT JOIN
                PracticalSubName AS PS3 ON PracticalSubject.PCode_III = PS3.SubCode
            LEFT JOIN
                PracticalSubName AS PS4 ON PracticalSubject.PCode_IV = PS4.SubCode
            WHERE
                TheorySubject.Semester = ?
        `, [Semester]);

  // Close the MySQL connection
  connection.end();

  // Send the fetched data as a JSON response
  console.log(rows);
    return res.status(200).json(rows);
  
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// export const SubCodeData=async(req ,res)=>{
//     try {
//         const connection = await dbConnection();
        
//         const user = req.body;
//         const {year} = req.params;
//         // console.log(user);
    

//         // Perform database operation: insert user data
        
//         // Check if the table exists
//         const [tables] = await connection.execute(`SHOW TABLES LIKE 'Batch${year}'`);
        
//         // If the table doesn't exist, create it
//         if (tables.length === 0) {
//             await connection.execute(`CREATE TABLE Batch${year} (
//                 Roll_No BIGINT,
//                 Branch VARCHAR(255),
//     semester INT,
//     SubCode1 VARCHAR(255),
//     SubCode2 VARCHAR(255),
//     SubCode3 VARCHAR(255),
//     SubCode4 VARCHAR(255),
//     SubCode5 VARCHAR(255),
//     SubCode6 VARCHAR(255),
//     PCode1 VARCHAR(255),
//     PCode2 VARCHAR(255),
//     PCode3 VARCHAR(255),
//     PCode4 VARCHAR(255),
//     PCode5 VARCHAR(255),
//     PRIMARY KEY (Roll_No, semester),
//     FOREIGN KEY (semester) REFERENCES  SubCodName(semester)
//             )`);
//         } else {
//             console.log("Table already exists");
//         }

//         // Insert data into the table
//         const [result, fields] = await connection.execute(`
//             INSERT INTO Batch${year} (Roll_No,
//                 Branch,
//                 semester,
//                 SubCode1,
//             SubCode2 ,
//             SubCode3 ,
//             SubCode4 ,
//             SubCode5 ,
//             SubCode6 ,
//             PCode1 ,
//             PCode2 ,
//             PCode3 ,
//             PCode4 ,
//             PCode5 ) 
//             VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//             [user.Roll_No,user.Branch,user.semester,user.SubCode1,
//                 user.SubCode2 ,
//                 user.SubCode3 ,
//                 user.SubCode4 ,
//                 user.SubCode5 ,
//                 user.SubCode6 ,
//                 user.PCode1 ,
//                 user.PCode2 ,
//                 user.PCode3 ,
//                 user.PCode4 ,
//                 user.PCode5]);

//         // Check if the insertion was successful
//         if (result.affectedRows === 1) {
//             // User data successfully inserted
//             return res.status(200).json({ message: 'User added successfully!' });
//         } else {
//             // No rows were affected, indicating the insertion failed
//             return res.status(500).json({ error: 'Failed to add user.' });
//         }

//         // Release the connection back to the pool
//         connection.release();
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };