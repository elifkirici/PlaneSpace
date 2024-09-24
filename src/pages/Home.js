import { useState, useEffect } from "react";
import FlightBooking from "../components/FlightBooking/FlightBooking";
import FlightListItem from "../components/FlightListItem";
import ServiceCard from "../components/ServiceCard";
import rentCar from "../assets/rent-car.png";
import rentCarIcon from "../assets/rent-car-icon.svg";
import hotels from "../assets/hotels.png";
import hotelsIcon from "../assets/hotel-icon.svg";
import travel from "../assets/travel-packages.png";
import travelIcon from "../assets/travel-icon.svg";
import RadioWrapperItem from "../components/RadioWrapperItem";
import UpFill from "../assets/up-fill.svg";
import DownFill from "../assets/down-fill.svg";

function Home({ bookedFlight, setBookedFlight }) {
  const ServiceCardItem = [
    {
      image: rentCar,
      title: "Car Rentals",
      icons: rentCarIcon,
    },
    {
      image: hotels,
      title: "Hotels",
      icons: hotelsIcon,
    },
    {
      image: travel,
      title: "Travel Packages",
      icons: travelIcon,
    },
  ];
  const ArrivalTimeOptions = ["5:00 AM - 11:59 AM", "12:00 PM - 5:59 PM"];
  const [isSortByDrapdownOpen, SetIsSortByDrapdownOpen] = useState(false);
  const [selectedSortByOption, setSelectedSortByOption] = useState("");
  const [filteredFlights, setFilteredFlights] = useState([]);

  const FlightData = [
    {
      id: 1,
      flightNumber: "TK1234",
      airline: {
        name: "Turkish Airlines",
        code: "TK",
      },
      departure: {
        city: "Istanbul",
        airport: "IST",
        departureTime: "2024-09-22T08:30:00+03:00",
      },
      arrival: {
        city: "New York",
        airport: "JFK",
        arrivalTime: "2024-09-22T13:30:00-04:00",
      },
      price: 850,
      currency: "USD",
    },
    {
      id: 2,
      flightNumber: "BA9876",
      airline: {
        name: "New York",
        code: "JFK",
      },
      departure: {
        city: "Istanbul",
        airport: "IST",
        departureTime: "2024-09-22T08:30:00+03:00",
      },
      arrival: {
        city: "New York",
        airport: "JFK",
        arrivalTime: "2024-09-22T13:30:00-04:00",
      },
      price: 1520,
      currency: "GBP",
    },
    {
      id: 3,
      flightNumber: "BA9876",
      airline: {
        name: "New York",
        code: "JFK",
      },
      departure: {
        city: "Istanbul",
        airport: "IST",
        departureTime: "2024-09-22T08:30:00+03:00",
      },
      arrival: {
        city: "New York",
        airport: "JFK",
        arrivalTime: "2024-09-22T13:30:00-04:00",
      },
      price: 420,
      currency: "GBP",
    },
    {
      id: 4,
      flightNumber: "BA9876",
      airline: {
        name: "New York",
        code: "JFK",
      },
      departure: {
        city: "Istanbul",
        airport: "IST",
        departureTime: "2024-09-22T08:30:00+03:00",
      },
      arrival: {
        city: "New York",
        airport: "JFK",
        arrivalTime: "2024-09-22T13:30:00-04:00",
      },
      price: 170,
      currency: "GBP",
    },
    {
      id: 5,
      flightNumber: "LH5432",
      airline: {
        name: "Lufthansa",
        code: "LH",
      },
      departure: {
        city: "Frankfurt",
        airport: "FRA",
        departureTime: "2024-09-24T07:45:00+02:00",
      },
      arrival: {
        city: "Tokyo",
        airport: "NRT",
        arrivalTime: "2024-09-24T20:55:00+09:00",
      },
      price: 1200,
      currency: "EUR",
    },
    {
      id: 6,
      flightNumber: "DL1123",
      airline: {
        name: "Delta Airlines",
        code: "DL",
      },
      departure: {
        city: "Atlanta",
        airport: "ATL",
        departureTime: "2024-09-25T14:25:00-04:00",
      },
      arrival: {
        city: "Los Angeles",
        airport: "LAX",
        arrivalTime: "2024-09-25T16:45:00-07:00",
      },
      price: 320,
      currency: "USD",
    },
    {
      id: 7,
      flightNumber: "AF2345",
      airline: {
        name: "Air France",
        code: "AF",
      },
      departure: {
        city: "Paris",
        airport: "CDG",
        departureTime: "2024-09-26T09:00:00+02:00",
      },
      arrival: {
        city: "Rome",
        airport: "FCO",
        arrivalTime: "2024-09-26T10:30:00+02:00",
      },
      price: 180,
      currency: "EUR",
    },
    {
      id: 8,
      flightNumber: "EK6789",
      airline: {
        name: "Emirates",
        code: "EK",
      },
      departure: {
        city: "Dubai",
        airport: "DXB",
        departureTime: "2024-09-27T23:55:00+04:00",
      },
      arrival: {
        city: "Sydney",
        airport: "SYD",
        arrivalTime: "2024-09-28T20:15:00+10:00",
      },
      price: 950,
      currency: "USD",
    },
    {
      id: 9,
      flightNumber: "QR9876",
      airline: {
        name: "Qatar Airways",
        code: "QR",
      },
      departure: {
        city: "Doha",
        airport: "DOH",
        departureTime: "2024-09-28T01:30:00+03:00",
      },
      arrival: {
        city: "London",
        airport: "LHR",
        arrivalTime: "2024-09-28T07:30:00+01:00",
      },
      price: 600,
      currency: "QAR",
    },
    {
      id: 10,
      flightNumber: "CX5432",
      airline: {
        name: "Cathay Pacific",
        code: "CX",
      },
      departure: {
        city: "Hong Kong",
        airport: "HKG",
        departureTime: "2024-09-29T18:45:00+08:00",
      },
      arrival: {
        city: "San Francisco",
        airport: "SFO",
        arrivalTime: "2024-09-29T15:25:00-07:00",
      },
      price: 980,
      currency: "HKD",
    },
    {
      id: 11,
      flightNumber: "AA1234",
      airline: {
        name: "American Airlines",
        code: "AA",
      },
      departure: {
        city: "Dallas",
        airport: "DFW",
        departureTime: "2024-09-30T13:00:00-05:00",
      },
      arrival: {
        city: "Miami",
        airport: "MIA",
        arrivalTime: "2024-09-30T16:30:00-04:00",
      },
      price: 250,
      currency: "USD",
    },
    {
      id: 12,
      flightNumber: "VA3456",
      airline: {
        name: "Virgin Australia",
        code: "VA",
      },
      departure: {
        city: "Melbourne",
        airport: "MEL",
        departureTime: "2024-10-01T06:15:00+10:00",
      },
      arrival: {
        city: "Auckland",
        airport: "AKL",
        arrivalTime: "2024-10-01T11:25:00+12:00",
      },
      price: 450,
      currency: "AUD",
    },
  ];

  //Apply sort when selectedSortByOption changes
  useEffect(() => {
    let sortedFlights = [...filteredFlights];

    if (selectedSortByOption === "lowest-price") {
      sortedFlights.sort((a, b) => a.price - b.price);
    } else if (selectedSortByOption === "highest-price") {
      sortedFlights.sort((a, b) => b.price - a.price);
    }

    setFilteredFlights(sortedFlights);
  }, [selectedSortByOption]);

  return (
    <div className="App">
      <div className="w-full container mx-auto">
        <div className="flex">
          {/* Main content section */}
          <div className="flex-1">
            <FlightBooking
              FlightData={FlightData}
              setFilteredFlights={setFilteredFlights}
              filteredFlights={filteredFlights}
            />
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col w-full gap-8">
                {filteredFlights.length > 0 ? (
                  filteredFlights.map((item, i) => (
                    <FlightListItem
                      item={item}
                      key={i}
                      filteredFlights={filteredFlights}
                      setBookedFlight={setBookedFlight}
                    />
                  ))
                ) : (
                  <div className="flex justify-center">
                    <p>NO DATA PLEASE SEARCH</p>
                  </div>
                )}
              </div>
              {filteredFlights.length > 0 && (
                <div className="px-4 mt-3 flex flex-col items-start">
                  <p className="font-bold">Sort by:</p>

                  {/* Dropdown button */}
                  <div className="relative inline-block w-64">
                    <div
                      onClick={() =>
                        SetIsSortByDrapdownOpen(!isSortByDrapdownOpen)
                      }
                      className="flex justify-between items-center bg-white rounded-lg p-2 text-dark-text text-sm font-medium cursor-pointer"
                    >
                      <span>
                        {selectedSortByOption === "lowest-price"
                          ? "Lowest Price"
                          : selectedSortByOption === "highest-price"
                          ? "Highest Price"
                          : "Sort by price"}
                      </span>
                      {isSortByDrapdownOpen ? (
                        <img src={UpFill} className="w-2.5 h-2.5" alt="up" />
                      ) : (
                        <img
                          src={DownFill}
                          className="w-2.5 h-2.5"
                          alt="down"
                        />
                      )}
                    </div>

                    {/* Dropdown options */}
                    {isSortByDrapdownOpen && (
                      <div className="absolute mt-1 w-full bg-white rounded-lg text-justify shadow-lg">
                        <div
                          onClick={() => {
                            setSelectedSortByOption("lowest-price");
                            SetIsSortByDrapdownOpen(false);
                          }}
                          className="px-4 py-2 cursor-pointer hover:bg-light-btn"
                        >
                          Lowest Price
                        </div>
                        <div
                          onClick={() => {
                            setSelectedSortByOption("highest-price");
                            SetIsSortByDrapdownOpen(false);
                          }}
                          className="px-4 py-2 cursor-pointer hover:bg-light-btn"
                        >
                          Highest Price
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="radio-wrapper-content mt-5 flex flex-col items-start gap-2">
                    <p className="text-dark-text text-md font-bold mb-2">
                      Arrival Time
                    </p>
                    {ArrivalTimeOptions.map((item, i) => (
                      <RadioWrapperItem item={item} key={i} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar section */}
          <div className="hidden md:block bg-gray-100">
            {ServiceCardItem.map((item, i) => (
              <ServiceCard item={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
