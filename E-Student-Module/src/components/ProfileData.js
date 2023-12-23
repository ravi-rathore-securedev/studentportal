import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav from './Nav'

export const ProfileData = () => {
    const { userroll, userdob } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://6538d7e9a543859d1bb208d2.mockapi.io/ereport");
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [userroll]);

    const filteredData = data.filter((item) => String(item.rollno) === userroll && String(item.dob) === userdob);

    return (
        <div>
            <Nav />
            <div className='freespace'></div>
            {loading ? (
                <div>Loading...</div>
            ) : filteredData.length > 0 ? (
                filteredData.map((item, key) => (
                    <div key={key}>

                        <div className="p_greedo">
                            <h3 className="p_Top">My Profile (मेरी प्रोफाइल)</h3>

                            <div className="p_entry">Id</div>
                            <div className='VP_in' > {item.id}</div>

                            <div className="p_entry">Name (नाम)</div>
                            <div className='VP_in' >{item.StudentName}</div>

                            <div className="p_entry">Father's Name (पिता का नाम)</div>
                            <div className='VP_in' >{item.fname}</div>

                            <div className="p_entry">Gender (लिंग)</div>
                            <div className='VP_in' >{item.gender}</div>

                            <div className="p_entry">Mobile no.</div>
                            <div className='VP_in' >{item.mobno}</div>

                            <div className="p_entry">Mother's Name (मां का नाम)</div>
                            <div className='VP_in' >{item.mname}</div>

                            <div className="p_entry">DOB (जन्म की तारीख)</div>
                            <div className='VP_in' >{item.dob}</div>

                            <div className="p_entry">Email Id (ईमेल आईडी)</div>
                            <div className='VP_in'>{item.email}</div>

                            <div className="p_entry">Corresponding Address (पत्रव्यवहारी का पता)</div>
                            <div className='VP_in' >{item.add}</div>

                            <div className="p_entry">City/District (शहर/जिला)</div>
                            <div className='VP_in' >{item.dist}</div>

                            <div className="p_entry">State (राज्य)</div>
                            <div className='VP_in'>{item.state}</div>

                            <div className="p_entry">Country (देश)</div>
                            <div className='VP_in'>{item.country}</div>

                            <div className="p_entry">Pincode (पिन कोड)</div>
                            <div className='VP_in' >{item.pincode}</div>

                            <div className="p_entry">Aadhar Number</div>
                            <div className='VP_in' >{item.adhar}</div>

                            <div className="p_entry">Father's Aadhar Number</div>
                            <div className='VP_in' >{item.fadhar}</div>

                            <div className="p_entry">Mother's Aadhar Number</div>
                            <div className='VP_in'>{item.madhar}</div>

                            <div className="p_entry">Photograph (छायाप्रति)</div>
                            <div className='VP_in'>{item.photo}</div>

                            <div className="p_entry">Signature (हस्ताक्षर)</div>
                            <div className='VP_in'>{item.sign}</div>

                            <div className="p_entry">Aadhar image</div>
                            <div className='VP_in'>{item.adhimg}</div>

                            <div className="p_entry">10th Marksheet</div>
                            <div className='VP_in'>{item.marktn}</div>

                            <div className="p_entry">12th Marksheet</div>
                            <div className='VP_in' >{item.marktw}</div>

                            <div className="p_entry">Roll No.:</div>
                            <div className='VP_in'>{item.rollno}</div>

                            <div className="p_entry">Enrollment No.:</div>
                            <div className='VP_in'>{item.enrolno}</div>

                            <div className="p_entry">Admission Session (प्रवेश सत्र)</div>
                            <div className='VP_in'>{item.admssn}</div>

                            <div className="p_entry">Admission Semester (प्रवेश सेमेस्टर)</div>
                            <div className='VP_in'>{item.admsem}</div>

                            <div className="p_entry">Academic Status (शैक्षणिक स्थिति)</div>
                            <div className='VP_in'>{item.acdstatus}</div>

                            <div className="p_entry">Institute's Code and Name (संस्थान का कोड और नाम)</div>
                            <div className='VP_in'>{item.insname} </div>

                            <div className="p_entry">Course Name (कोर्स का नाम)</div>
                            <div className='VP_in'>{item.coursen} </div>

                            <div className="p_entry">Branch Name (ब्रांच का नाम)</div>
                            <div className='VP_in' >{item.branchn}</div>

                            <div className="p_entry">Semester (सेमेस्टर)</div>
                            <div className='VP_in'  >{item.sem}</div>



                            <h4 className='p_h4'>Semester Details:- </h4>
                            <div></div>

                            <div className='p_subject'>
                                <h3 className='p_sub'>Theory Subject:-</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Subject Code</th>
                                            <th>Subject Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td className='P_tdc'> {item.subcode1}</td>
                                            <td className='p_td'>{item.sub1}</td>
                                        </tr>

                                        <tr>
                                            <td className='P_tdc'>{item.subcode2}</td>
                                            <td className='p_td'>{item.sub2}</td>
                                        </tr>

                                        <tr>
                                            <td className='P_tdc'>{item.subcode3}</td>
                                            <td className='p_td'>{item.sub3}</td>
                                        </tr>

                                        <tr>
                                            <td className='P_tdc'>{item.subcode4}</td>
                                            <td className='p_td'>{item.sub4}</td>
                                        </tr>
                                        <tr>
                                            <td className='P_tdc'>{item.subcode5}</td>
                                            <td className='p_td'>{item.sub5}</td>
                                        </tr>
                                        <tr>
                                            <td className='P_tdc'>{item.subcode6}</td>
                                            <td className='p_td'>{item.sub6}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className='p_subject'>
                                <h3 className='p_sub'>Practical Subject:-</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='ptcooo'>Subject Code</th>
                                            <th>Subject Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='P_tdc'>{item.psubcode1}</td>
                                            <td className='p_td'>{item.psub1}</td>
                                        </tr>
                                        <tr>
                                            <td className='P_tdc'>{item.psubcode2}</td>
                                            <td className='p_td'>{item.psub2}</td>
                                        </tr>
                                        <tr>
                                            <td className='P_tdc'>{item.psubcode3}</td>
                                            <td className='p_td'>{item.psub3}</td>
                                        </tr>

                                        <tr>
                                            <td className='P_tdc'>{item.psubcode4}</td>
                                            <td className='p_td'>{item.psub4}</td>
                                        </tr>

                                        <tr>
                                            <td className='P_tdc'>{item.psubcode5}</td>
                                            <td className='p_td'>{item.psub5}</td>
                                        </tr>

                                        <tr>
                                            <td className='P_tdc'>{item.psubcode6}</td>
                                            <td className='p_td'>{item.psub6}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                ))
            ) : (
                <div>No data available for the selected user.</div>
            )}
        </div>
    );
};