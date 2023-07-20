import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { API_BASE_URL, APP_BASE_URL } from "../../constants";

const AttendeeUpdate = () => {
    const { event_id, user_id } = useParams();
    const [IsUpdating, setIsUpdating] = useState(false);

    useEffect(() => {
        // Send a request to the Django server to update the `attended` field
        updateAttendedStatus(user_id, event_id);
    }, [user_id, event_id]);

    const updateAttendedStatus = (userId, eventId) => {
        // Perform the API request to your Django server
        // Replace 'YOUR_API_ENDPOINT' with the actual endpoint to update the 'attended' field
        const apiUrl = `${API_BASE_URL}/admin/update_attended_status_backend/${userId}/${eventId}`;

        fetch(apiUrl, {
            method: 'PUT', // or 'PATCH' if you prefer
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ attended: true }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Success! The `attended` field is updated on the Django side
                setIsUpdating(true);
            })
            .catch((error) => {
                console.error('Error updating attended status:', error);
            });
    };

    return (
        <div>
            <h1>Updating Attendee Status</h1>
            <p>User ID: {user_id}</p>
            <p>Event ID: {event_id}</p>

            {IsUpdating ? (
                <p>Updated Attendance</p>
            ) : (
                <p>Updateing Attendence</p>
            )}


        </div>
    );
};

export default AttendeeUpdate;
