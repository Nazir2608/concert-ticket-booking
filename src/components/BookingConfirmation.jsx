import React from "react";
import "./BookingConfirmation.css";

function BookingConfirmation({ selectedSeats, onConfirmBooking }) {
  return (
    <div className="booking-confirmation">
      <h3>Booking Confirmation</h3>

      {/* Display selected seats if any, otherwise show a message */}
      {selectedSeats.length > 0 ? (
        <ul>
          {/* Loop through selectedSeats and display each seat */}
          {selectedSeats.map((seat, index) => (
            <li key={index}>
              {seat.section} - {seat.number} {/* Show section and seat number */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No seats selected yet.</p> // Message when no seats are selected
      )}

      {/* Button to confirm booking */}
      <button className="btn btn-primary" onClick={onConfirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingConfirmation;
