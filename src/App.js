import React, { useState } from "react";
import "./App.css";
import SeatGrid from "./components/SeatGrid";
import BookingConfirmation from "./components/BookingConfirmation";

function App() {
  // State to manage booked seats
  const [bookedSeats, setBookedSeats] = useState([]);
  // State to manage currently selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Handle seat selection
  const handleSeatSelect = (section, seatNumber) => {
    // Prevent booking more than 5 seats simultaneously
    if (selectedSeats.length >= 5) {
      alert("You can only select up to 5 seats.");
      return;
    }

    // Check if seat is already booked
    const isBooked = bookedSeats.some(
      (seat) => seat.section === section && seat.number === seatNumber
    );
    if (isBooked) {
      alert("This seat is already booked.");
      return;
    }

    // Check if seat is already selected
    const isAlreadySelected = selectedSeats.some(
      (seat) => seat.section === section && seat.number === seatNumber
    );

    if (isAlreadySelected) {
      // Remove seat from selection
      setSelectedSeats((prev) =>
        prev.filter(
          (seat) => !(seat.section === section && seat.number === seatNumber)
        )
      );
    } else {
      // Add seat to selection
      setSelectedSeats((prev) => [...prev, { section, number: seatNumber }]);
    }
  };

  // Confirm booking and mark seats as booked
  const handleConfirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat to book.");
      return;
    }

    // Add selected seats to bookedSeats and clear selectedSeats
    setBookedSeats((prev) => [...prev, ...selectedSeats]);
    setSelectedSeats([]);
    alert("Your seats have been booked!");
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        Diljit Dosanjh Concert Ticket Booking
      </header>

      {/* Main content */}
      <div className="container page-content">
        <div className="row">
          {/* VIP Section */}
          <div className="col-md-4">
            <h3 className="section-heading">VIP Section</h3>
            <SeatGrid
              section="VIP"
              rows={5}
              cols={5}
              bookedSeats={bookedSeats}
              selectedSeats={selectedSeats}
              onSeatSelect={(seatNumber) =>
                handleSeatSelect("VIP", seatNumber)
              }
            />
          </div>

          {/* General Section */}
          <div className="col-md-4">
            <h3 className="section-heading">General Section</h3>
            <SeatGrid
              section="General"
              rows={6}
              cols={6}
              bookedSeats={bookedSeats}
              selectedSeats={selectedSeats}
              onSeatSelect={(seatNumber) =>
                handleSeatSelect("General", seatNumber)
              }
            />
          </div>

          {/* Economy Section */}
          <div className="col-md-4">
            <h3 className="section-heading">Economy Section</h3>
            <SeatGrid
              section="Economy"
              rows={8}
              cols={8}
              bookedSeats={bookedSeats}
              selectedSeats={selectedSeats}
              onSeatSelect={(seatNumber) =>
                handleSeatSelect("Economy", seatNumber)
              }
            />
          </div>
        </div>

        {/* Booking Confirmation */}
        <BookingConfirmation
          selectedSeats={selectedSeats}
          onConfirmBooking={handleConfirmBooking}
        />
      </div>
    </div>
  );
}

export default App;
