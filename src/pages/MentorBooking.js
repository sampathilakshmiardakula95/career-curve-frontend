// src/pages/MentorBooking.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MentorBooking = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Fetch mentors from the backend
    axios.get('http://localhost:3001/api/mentors')
      .then(response => {
        setMentors(response.data);
      })
      .catch(error => {
        console.error('Error fetching mentors:', error);
      });
  }, []);

  return (
    <div>
      <h1>Mentor Booking</h1>
      <ul>
        {mentors.map(mentor => (
          <li key={mentor.id}>{mentor.name} - Expertise: {mentor.areas_of_expertise.join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default MentorBooking;
