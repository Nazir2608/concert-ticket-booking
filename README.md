# Diljit Dosanjh Concert Ticket Booking System

## Overview

This project is a **React-based ticket booking system** designed specifically for the **Diljit Dosanjh Concert**. The system allows users to book seats across three sections: **VIP**, **General**, and **Economy**. It includes features such as seat selection, booking confirmation, and prevents overbooking by managing seat availability.

The system provides an intuitive, user-friendly interface to select seats, view seat availability, and confirm bookings.


## Key Features

### 1. **Display Sections**

The ticket booking system includes three distinct sections:
- **VIP Section**: Premium seats with better visibility.
- **General Section**: Standard seating for the concert.
- **Economy Section**: Budget-friendly seats.

### 2. **Seat Layouts**

Each section has its unique seat grid:
- **VIP Section**: A 5x5 grid (25 seats).
- **General Section**: A 6x6 grid (36 seats).
- **Economy Section**: An 8x8 grid (64 seats).

### 3. **Seat Status**

- Initially, all seats are **available**.
- **Selected seats** will be visually distinct to indicate they are being chosen by the user.
- Once a seat is **booked**, it will be marked as **unavailable** and cannot be booked again.

### 4. **Seat Selection Rules**

- A **maximum of 5 seats** can be selected at a time.
- If the user tries to select more than 5 seats, the system will **notify** them and prevent the action.

### 5. **Booking Confirmation**

After selecting the seats:
- The user can click on **Confirm Booking** to finalize the reservation.
- Upon confirmation:
  - The system will display a list of the **booked seats**, showing the section and seat numbers.
  - The selected seats will be marked as **unavailable** on the seat grid.

### 6. **User-Friendly Interface**

The system will include:
- **Visual indicators** for available, selected, and booked seats.
- A **clean, intuitive layout** for ease of use.
- An interface that adapts to various screen sizes for optimal viewing.

---

## Example Seat Layouts

### **VIP Section (5x5 Grid)**

1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5 
1 2 3 4 5
 1 2 3 4 5

### **General Section (6x6 Grid)**

1 2 3 4 5 6 
1 2 3 4 5 6 
1 2 3 4 5 6 
1 2 3 4 5 6 
1 2 3 4 5 6 
1 2 3 4 5 6

### **Economy Section (8x8 Grid)**

1 2 3 4 5 6 7 8 
1 2 3 4 5 6 7 8 
1 2 3 4 5 6 7 8 
1 2 3 4 5 6 7 8 
1 2 3 4 5 6 7 8
1 2 3 4 5 6 7 8 
1 2 3 4 5 6 7 8 
1 2 3 4 5 6 7 8

## Booking Flow

1. **Seat Selection**
   - The user selects up to **5 seats** from any section (VIP, General, or Economy).
   - As seats are selected, they are visually highlighted.

2. **Confirm Booking**
   - After seat selection, the user clicks the **Confirm Booking** button to finalize the booking.
   - The system displays the **list of booked seats**, showing the section and seat numbers.
   - The booked seats become **unavailable**.


## Technologies Used

- **Frontend**: React.js
- **State Management**: React `useState`, `useEffect`, and Context API
- **Styling**: CSS (or your preferred CSS framework like Bootstrap or Material UI)
- **Deployment**: Vercel, Netlify, or any other cloud platform for deployment


## Installation

To run the project locally:

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine. You can download and install Node.js from [here](https://nodejs.org/).

### Step-by-Step Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Nazir2608/concert-ticket-booking.git
Navigate to the project directory:

cd diljit-concert-ticket-booking
Install dependencies:
npm install
Start the development server:
npm start

Open your browser and visit http://localhost:3000 to view the project.

Contributing
We welcome contributions to this project! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature (e.g., feature/my-feature).
Commit your changes.
Push the changes to your fork.
Submit a pull request explaining your changes.
License
This project is licensed under the MIT License - see the LICENSE file for details.