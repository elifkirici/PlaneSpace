import React, { useState } from "react";
import plane from "../../assets/planeDark.svg";
import planeLanding from "../../assets/plane-landing.svg";
import planeTakeoff from "../../assets/plane-takeoff.svg";
import { ACTIVE_FLIGHT_TYPE } from "./FlightBooking.constants";

function FlightBooking({ FlightData, setFilteredFlights }) {
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
  const [selectedDepartureDate, setSelectedDepartureDate] = useState("");
  const [selectedReturnDate, setselectedReturnDate] = useState("");
  const [flightTypeActive, setFlightTypeActive] = useState(
    ACTIVE_FLIGHT_TYPE.ROUND_TRIP
  );

  // Function to convert Date to 'yyyy-mm-dd' format only
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  //Search button function
  const handleSearch = () => {
    const filtered = FlightData.filter((flight) => {
      return (
        flight.departure.city.toLowerCase() === departureCity.toLowerCase() &&
        flight.arrival.city.toLowerCase() === arrivalCity.toLowerCase() &&
        formatDate(flight.departure.departureTime) === selectedDepartureDate
      );
    });
    setFilteredFlights(filtered);
  };

  return (
    //FlightBooking start
    <div className="flight-booking flex w-fit h-fit bg-white my-4 rounded-lg">
      <div className="flex flex-col items-start gap-4 p-5">
        {/* booker-menu start */}
        <div className="booker-menu flex items-center justify-between w-full">
          <div className="flex items-center">
            <img src={plane} className="mr-4 h-4" alt="Logo" />
            <p className="uppercase text-dark-text font-bold text-base">
              Flight Booking
            </p>
          </div>
          <div className="booker-type-links">
            <button
              className={`${
                flightTypeActive === ACTIVE_FLIGHT_TYPE.ROUND_TRIP
                  ? "bg-dark-purple text-white"
                  : "bg-light-btn text-dark-purple"
              } rounded-tl-2xl rounded-bl-2xl py-2 px-3`}
              onClick={() => {
                setFlightTypeActive(ACTIVE_FLIGHT_TYPE.ROUND_TRIP);
              }}
            >
              Round trip
            </button>
            <button
              className={`${
                flightTypeActive === ACTIVE_FLIGHT_TYPE.ONE_WAY
                  ? "bg-dark-purple text-white"
                  : "bg-light-btn text-dark-purple"
              } rounded-tr-2xl rounded-br-2xl py-2 px-3`}
              onClick={() => {
                setFlightTypeActive(ACTIVE_FLIGHT_TYPE.ONE_WAY);
              }}
            >
              One way
            </button>
          </div>
        </div>
        {/* booker-menu end */}

        {/* flight-booking-content start */}
        <div className="flight-booking-content flex flex-col md:flex-row md:gap-3">
          <div className="flex gap-0.5 mb-4 md:mb-0">
            <div className="relative">
              <input
                type="text"
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
                className="outline-light-text border-[1.5px] border-light-text border-opacity-50 rounded-tl-2xl rounded-bl-2xl w-56 px-10 py-1"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center  pointer-events-none">
                <img
                  src={planeTakeoff}
                  className="w-5 h-5"
                  alt="plane takeoff"
                />
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                value={arrivalCity}
                onChange={(e) => setArrivalCity(e.target.value)}
                className="outline-light-text border-[1.5px] border-light-text border-opacity-50 rounded-tr-2xl rounded-br-2xl w-56 px-10 py-1"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img
                  src={planeLanding}
                  className="w-5 h-5"
                  alt="plane takeoff"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-0.5">
            <div class="custom-date-input relative inline-block">
              <input
                type="date"
                value={selectedDepartureDate}
                onChange={(e) => setSelectedDepartureDate(e.target.value)}
                className="outline-light-text border-[1.5px] border-light-text border-opacity-50 rounded-tl-2xl rounded-bl-2xl w-56 px-5 py-1"
              />
            </div>
            {flightTypeActive === ACTIVE_FLIGHT_TYPE.ROUND_TRIP ? (
              <div class="custom-date-input relative inline-block">
                <input
                  type="date"
                  value={selectedReturnDate}
                  onChange={(e) => setselectedReturnDate(e.target.value)}
                  className="outline-light-text border-[1.5px] border-light-text border-opacity-50 rounded-tr-2xl rounded-br-2xl w-56 px-5 py-1"
                />
              </div>
            ) : (
              <button
                type="date"
                className="outline-light-text border-[1.5px] border-light-text border-opacity-50 rounded-tr-2xl rounded-br-2xl w-56 px-5 py-1 font-semibold"
                onClick={() =>
                  setFlightTypeActive(ACTIVE_FLIGHT_TYPE.ROUND_TRIP)
                }
              >
                + Add return
              </button>
            )}
          </div>
        </div>
        {/* flight-booking-content end */}

        {/* flight-submit-btn start */}
        <div className="flight-submit-btn">
          <button
            onClick={handleSearch}
            className="bg-dark-purple text-white font-semibold py-2 px-5 rounded-lg"
          >
            Show Flights
          </button>
        </div>
        {/* flight-submit-btn end */}
      </div>
    </div>
    //FlightBooking end
  );
}

export default FlightBooking;
