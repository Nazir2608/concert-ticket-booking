import React from "react";
import "./SeatGrid.css";

function SeatGrid({ section, rows, cols, bookedSeats, selectedSeats, onSeatSelect }) {
  // Function to determine the status of each seat (booked, selected, or available)
  const getSeatStatus = (row, col) => {
    const seatNumber = `${row}-${col}`; // Combine row and column to create the seat number
    // Check if the seat is booked
    const isBooked = bookedSeats.some(
      (seat) => seat.section === section && seat.number === seatNumber
    );
    // Check if the seat is selected
    const isSelected = selectedSeats.some(
      (seat) => seat.section === section && seat.number === seatNumber
    );

    // Return the seat status based on booking and selection
    if (isBooked) return "booked";    // Seat is booked
    if (isSelected) return "selected"; // Seat is selected but not yet booked
    return "available"; // Seat is available for selection
  };

  return (
    <div className="seat-grid">
      {/* Loop through each row and column to generate the seat grid */}
      {Array.from({ length: rows }).map((_, row) => (
        <div key={row} className="seat-row">
          {Array.from({ length: cols }).map((_, col) => {
            const seatNumber = `${row + 1}-${col + 1}`; // Generate the seat number based on row and column
            const status = getSeatStatus(row + 1, col + 1); // Get the seat status (booked, selected, or available)

            return (
              <div
                key={col}
                className={`seat ${status}`} // Apply the appropriate CSS class based on the seat status
                onClick={() => onSeatSelect(seatNumber)} // Handle seat selection on click
              >
                {seatNumber} {/* Display the seat number */}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default SeatGrid;
