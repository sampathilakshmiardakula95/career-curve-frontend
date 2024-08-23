import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const MentorList = () => {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const response = await axios.get('/mentors');
                setMentors(response.data);
            } catch (error) {
                console.error('Error fetching mentors:', error);
            }
        };

        fetchMentors();
    }, []);

    return (
        <ul>
            {mentors.map((mentor) => (
                <li key={mentor.id}>{mentor.name} - {mentor.areas_of_expertise}</li>
            ))}
        </ul>
    );
};

export default MentorList;
