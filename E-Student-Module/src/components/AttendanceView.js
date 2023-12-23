import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles/attendaceview.css';
import Nav from './Nav'

export const AttendanceView = () => {
    const { userroll } = useParams();
    const [profilefetch, setProfilefetch] = useState([]);
    const [fyear, setFyear] = useState('');
    const [fbranch, setFbranch] = useState('');
    const [attendfetch, setAttendfetch] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [ereportResponse, attendanceResponse] = await Promise.all([
                    axios.get("https://6538d7e9a543859d1bb208d2.mockapi.io/ereport"),
                    axios.get("https://6578746ef08799dc804559c9.mockapi.io/Attendance")
                ]);

                setProfilefetch(ereportResponse.data);
                setAttendfetch(attendanceResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const statefilter = profilefetch.filter((item) => String(item.rollno) === userroll);

        if (statefilter.length > 0) {
            setFyear(statefilter[0]?.cyear);
            setFbranch(statefilter[0]?.branchn);
        }
    }, [profilefetch, userroll]);

    const filterData = attendfetch.filter((item) => String(item.year) === fyear && String(item.branch) === fbranch);

    return (

        <div>
            <Nav />
            <div className='freespace'></div>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && filterData.length > 0 && (
                <table className='A_table'>
                    <thead>
                        <tr>
                            <th>Teacher</th>
                            <th>Branch</th>
                            <th>Year</th>
                            <th>Class Name</th>
                            <th>Class Timing</th>
                            <th>Name</th>
                            <th>Roll No</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterData.map(({ teacher, branch, year, className, classTiming, students, date }, key) => (
                            <tr key={key}>
                                <td>{teacher}</td>
                                <td>{branch}</td>
                                <td>{year}</td>
                                <td>{className}</td>
                                <td>{classTiming}</td>
                                <td>{date}</td>
                                {students
                                    .filter(({ rollNo }) => rollNo === userroll)
                                    .map(({ id, name, rollNo, isPresent }) => (
                                        <React.Fragment key={rollNo}>
                                            <td>{name}</td>
                                            <td>{rollNo}</td>
                                            <td>{isPresent ? 'Present' : 'Absent'}</td>
                                        </React.Fragment>
                                    ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
