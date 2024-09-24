import React from "react";
import logo from "../assets/logo.svg";

function MyFlightsItem({ item }) {
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

  return (
    <div className="flight-items w-full flex flex-col md:flex-row bg-white px-10 py-8 rounded-lg shadow-lg">
      {/* content start*/}

      <div className="w-full md:w-1/2 flex flex-col">
        {/* airplane logo start*/}

        <div className="airplane-company-logo flex items-center gap-4">
          <div className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-dark-purple rounded-full relative shadow-md duration-700 group-hover:w-24 group-hover:rounded-l-lg">
              <img
                src={logo}
                className=" h-6 absolute top-1/2 duration-700 transform translate-x-[40%] -translate-y-1/2 group-hover:translate-x-16"
                alt="Logo"
              />
            </div>
          </div>
          <div>
            <p className="text-dark-text text-2xl">
              {departureTime} AM - {arrivalTime} AM
            </p>
          </div>
        </div>
        {/* airplane logo end*/}

        <div className="content-info ml-14 justify-center mt-4">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="text-sm font-semibold text-dark-text ">
                {item.airline.name}
              </h2>
              <ul className="text-dark-text font-medium text-xs">
                <li className="mb-4">
                  <a href="/" className="hover:underline text-dark-purple">
                    Flight Details
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-dark-text uppercase ">
                Nonstop
              </h2>
              <ul className="text-light-text text-xs font-medium">
                <li className="mb-4">{flightDuration}</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-dark-text uppercase">
                {item.departure.airport} to {item.arrival.airport}
              </h2>
              <ul className="text-light-text text-xs font-medium">
                <li className="mb-4">{item.flightNumber}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* content end*/}

      {/* price start*/}
      <div className="w-full md:w-1/2">
        <div className="grid grid-cols-5 gap-4 h-full">
          <div className="bg-[#f6f6f6] border border-[#f6f6f6] rounded-lg flex justify-center font-bold text-lg">
            ${item.price}
          </div>
          <div className="bg-[#f6f6f6] border border-[#f6f6f6] rounded-lg"></div>
          <div className="bg-[#f6f6f6] border border-[#f6f6f6] rounded-lg"></div>
          <div className="bg-[#f6f6f6] border border-[#f6f6f6] rounded-lg"></div>
          <div className="bg-[#f6f6f6] border border-[#f6f6f6] rounded-lg"></div>
        </div>
      </div>
      {/* price end*/}
    </div>
  );
}

export default MyFlightsItem;
