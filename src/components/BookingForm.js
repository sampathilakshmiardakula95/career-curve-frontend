import React, { useState } from 'react';
import axios from '../services/api';

const BookingForm = () => {
    const [studentId, setStudentId] = useState('');
    const [mentorId, setMentorId] = useState('');
    const [scheduledTime, setScheduledTime] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/bookings', {
                student_id: studentId,
                mentor_id: mentorId,
                scheduled_time: scheduledTime,
                duration: parseInt(duration, 10),
                cost: duration * 10 // Example cost calculation
            });
            alert('Booking created successfully!');
        } catch (error) {
            console.error('Error creating booking:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Student ID" value={studentId} onChange={e => setStudentId(e.target.value)} />
            <input type="text" placeholder="Mentor ID" value={mentorId} onChange={e => setMentorId(e.target.value)} />
            <input type="datetime-local" value={scheduledTime} onChange={e => setScheduledTime(e.target.value)} />
            <input type="number" placeholder="Duration (minutes)" value={duration} onChange={e => setDuration(e.target.value)} />
            <button type="submit">Book</button>
        </form>
    );
};

export default BookingForm;
