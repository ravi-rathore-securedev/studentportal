import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import './styles/attendaceview.css';

export const AssignmentView = () => {
    const { userroll } = useParams();
    const [assignview, setAssignview] = useState([]);
    const [fyear, setFyear] = useState('');
    const [fbranch, setFbranch] = useState('');
    const [filterview, setFilterview] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [ereportResponse, assignmenttResponse] = await Promise.all([
                    axios.get("https://6538d7e9a543859d1bb208d2.mockapi.io/ereport"),
                    axios.get("https://6578746ef08799dc804559c9.mockapi.io/assignmentt")
                ]);

                setAssignview(ereportResponse.data);
                setFilterview(assignmenttResponse.data);
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
        const statefilter = assignview.filter((item) => String(item.rollno) === userroll);

        if (statefilter.length > 0) {
            setFyear(statefilter[0]?.cyear);
            setFbranch(statefilter[0]?.branchn);
            // Update other state variables as needed
        }
    }, [assignview, userroll]);

    const filterData = filterview.filter((item) => String(item.year) === fyear && String(item.branch) === fbranch);

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
                            <th>Subject</th>
                            <th>Unit</th>
                            <th>Assignment Date</th>
                            <th>Submission Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterData.map(({ tname, branch, year, sub, unit, adate, sdate, status }, key) => (
                            <tr key={key}>
                                <td>{tname}</td>
                                <td>{branch}</td>
                                <td>{year}</td>
                                <td>{sub}</td>
                                <td>{unit}</td>
                                <td>{adate}</td>
                                <td>{sdate}</td>
                                <td>{status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
