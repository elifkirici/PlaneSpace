import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import plane from "../assets/plane.svg";
import alitalia from "../assets/Alitalia_logo.png";

function FlightListItem({ item, setBookedFlight }) {
  // Converts hours and minutes to two-digit format
  const dateStr1 = item.departure.departureTime; // Departure time
  const dateStr2 = item.arrival.arrivalTime; // Landing time

  const convertToTime = (dateStr) => {
    const date = new Date(dateStr);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const departureTime = convertToTime(dateStr1); // Departure time
  const arrivalTime = convertToTime(dateStr2); // Landing time

  const calculateFlightDuration = (departureStr, arrivalStr) => {
    const departureTime = new Date(departureStr);
    const arrivalTime = new Date(arrivalStr);

    const durationInMillis = arrivalTime - departureTime;

    // Convert time to hours and minutes
    const hours = Math.floor(durationInMillis / (1000 * 60 * 60));
    const minutes = Math.floor(
      (durationInMillis % (1000 * 60 * 60)) / (1000 * 60)
    );
    const formattedDuration = `${hours}h, ${minutes}m`;

    return formattedDuration;
  };

  // Calculate flight time
  const flightDuration = calculateFlightDuration(dateStr1, dateStr2);
  const navigate = useNavigate();

  const handleBookFlight = (flightItem) => {
    setBookedFlight((prev) => {
      const isFlightAlreadyBooked = prev.some(
        (flight) => flight.id === flightItem.id
      ); // Assuming flights have unique 'id'

      if (isFlightAlreadyBooked) {
        toast("Your flight was successfully recorded");
        return prev;

        // If flight is already booked, return the previous array without adding
      } else {
        toast("You are already booked for this flight");
        return [...prev, flightItem]; // If not booked, add the flight to the array
      }
    });
    setTimeout(() => {
      navigate("/Flights");
    }, 2000);
  };
  return (
    //FlightListItem start
    <div className="flight-list-item ">
      <div className="bg-white relative rounded-lg">
        {/* flight-info start */}
        <div className="flight-info p-5">
          <div className="w-auto flex">
            <h1 className="font-bold text-base">
              {item.departure.city + "-" + item.arrival.city}
            </h1>
          </div>
          <div className="flex items-center justify-between mt-8 text-xs text-dark-text">
            <p>Departure</p>
            <img src={alitalia} className="h-3 w-10 md:w-14" alt="Plane" />
            <p className="mr-9">Arrival</p>
          </div>
          {/* flight-info-content start */}

          <div className="flight-info-content flex items-center text-justify mb-8">
            <div className="flex flex-col gap-1 justify-start font-semibold">
              <p className="text-dark-text">{departureTime}</p>
              <span className="text-xs text-light-text">
                Airport: {item.departure.airport}
              </span>
            </div>
            <hr className="border border-light-text mx-auto px-5 md:px-10" />
            <div className="flex flex-col gap-3 items-center">
              <img
                src={plane}
                className="h-5 w-5 fill-dark-purple"
                alt="Plane"
              />
              <p className="text-xs text-light-text">
                {flightDuration} (Nonstop)
              </p>
            </div>
            <hr className="border border-light-text mx-auto px-5 md:px-10" />
            <div className="flex flex-col gap-1 justify-start font-semibold">
              <p className="text-dark-text">{arrivalTime}</p>
              <span className="text-xs text-light-text">
                Airport: {item.departure.airport}
              </span>
            </div>
          </div>
          {/* flight-info-content end */}

          {/* bottom-flight-info-content start */}
          <div className="flight-info-bottom-content flex justify-between">
            <div className="flex flex-col gap-1 text-justify font-bold">
              <p className="text-dark-purple text-lg">Price: ${item.price}</p>
              <span className="text-xs text-light-text">Round Trip</span>
            </div>
            <button
              onClick={() => handleBookFlight(item)}
              className="absolute right-0 bottom-0 font-bold bg-dark-purple text-white py-5 px-6 md:py-6 md:px-8 rounded-tl-lg rounded-br-lg"
            >
              Book Flight
            </button>
            <ToastContainer />
          </div>
          {/* bottom-flight-info-content end */}
        </div>
        {/* flight-info end */}
      </div>

      {/* check-detail-btn start */}
      <button className="bg-light-btn text-light-purple text-xs rounded-b-lg underline py-4 px-6 flex justify-start">
        <a href="/" className="font-bold">
          Check the details
        </a>
      </button>
      {/* check-detail-btn end */}
    </div>
    //FlightListItem end
  );
}

export default FlightListItem;
