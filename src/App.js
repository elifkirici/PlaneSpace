import { useState } from "react";
import "./App.css";
import FlightBooking from "./components/FlightBooking/FlightBooking";
import FlightListItem from "./components/FlightListItem";
import Layout from "./components/Layout";
import ServiceCard from "./components/ServiceCard";
import rentCar from "./assets/rent-car.png";
import rentCarIcon from "./assets/rent-car-icon.svg";
import hotels from "./assets/hotels.png";
import hotelsIcon from "./assets/hotel-icon.svg";
import travel from "./assets/travel-packages.png";
import travelIcon from "./assets/travel-icon.svg";
import RadioWrapperItem from "./components/RadioWrapperItem";
import UpFill from "./assets/up-fill.svg";
import DownFill from "./assets/down-fill.svg";

function App() {
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
  const [selectedSortByOption, setSelectedSortByOption] =
    useState("lovest-price");

  return (
    <div className="App">
      <Layout>
        <div className="w-full container mx-auto">
          <div className="flex">
            {/* Main content section */}
            <div className="flex-1">
              <FlightBooking />
              <div className="flex w-full">
                <FlightListItem />
                <div className="px-4 mt-3 flex flex-col items-start">
                  <p className="font-bold">Sort by:</p>
                  <div className="relative inline-block w-64">
                    {/* Dropdown button */}
                    <div
                      onClick={() =>
                        SetIsSortByDrapdownOpen(!isSortByDrapdownOpen)
                      }
                      className="flex justify-between items-center bg-white rounded-lg p-2 text-dark-text text-sm font-medium cursor-pointer"
                    >
                      <span>
                        {selectedSortByOption === "lowest-price"
                          ? "Lowest Price"
                          : "  Highest Price"}
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
              </div>
            </div>

            {/* Sidebar section */}
            <div className=" bg-gray-100">
              {ServiceCardItem.map((item, i) => (
                <ServiceCard item={item} key={i} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
