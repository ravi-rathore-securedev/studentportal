import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import './styles/attendaceview.css';
export const TimeTable = () => {
    const { userroll } = useParams();
    const [fetchedData, setFetchedData] = useState([]);
    const [fyear, setFyear] = useState('');
    const [fbranch, setFbranch] = useState('');
    const [filterdata, setFilterdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://6538d7e9a543859d1bb208d2.mockapi.io/ereport");
                setFetchedData(response.data);
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
        const statefilter = fetchedData.filter((item) => String(item.rollno) === userroll);
        console.log(statefilter)

        if (statefilter.length > 0) {
            setFyear(statefilter[0]?.cyear);
            setFbranch(statefilter[0]?.branchn);
        }
    }, [fetchedData, userroll]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://6561c704dcd355c083242eab.mockapi.io/timetable");
                setFilterdata(response.data);
            } catch (error) {
                console.error("Error fetching timetable data:", error);
                setError("Error fetching timetable data");
            }
        };

        fetchData();
    }, []);

    const generateTableRows = (timetable) => {
        const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

        return days.map((day) => (
            <tr key={day}>
                <th>{day}</th>
                {Array.from({ length: 7 }, (_, slot) => (
                    <td key={`${day}${slot}`}>
                        {slot !== 0 && slot !== 4 && timetable[`subject${day}${slot}`] && (
                            <>
                                {timetable[`subject${day}${slot}`]}
                                <br />
                                {timetable[`subjectcode${day}${slot}`]}
                                <br />
                                {timetable[`teacher${day}${slot}`]}
                            </>
                        )}
                    </td>
                ))}
            </tr>
        ));
    };

    const generateFetchedDataRows = () => {
        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>{error}</p>;
        }

        const filtertime = filterdata.filter((item) => String(item.year) === fyear && String(item.branch) === fbranch);

        if (filtertime.length === 0) {
            return <p>No data available for the selected year and branch.</p>;
        }

        return filtertime.map(({ id, year, branch, timetable }) => (
            <div key={id}>
                <h3>{`Year: ${year}`}</h3>
                <h3>{`Branch: ${branch}`}</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>09:00-10:00</th>
                            <th>10:00-11:00</th>
                            <th>11:00-12:00</th>
                            <th>12:00-01:00</th>
                            <th>01:00-02:00</th>
                            <th>02:00-03:00</th>
                            <th>03:00-04:00</th>
                        </tr>
                    </thead>
                    <tbody>{generateTableRows(timetable)}</tbody>
                </table>
            </div>
        ));
    };

    return (
        <div>
            <Nav />
            <div className='freespace'></div>
            {generateFetchedDataRows()}
        </div>
    );
};
