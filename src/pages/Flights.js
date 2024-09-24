import { useState, useEffect } from "react";
import MyFlightsItem from "../components/MyFlightsItem";
import info from "../assets/info.svg";
function Flights({ bookedFlight, setBookedFlight }) {
  const [isSortingDrapdownOpen, SetIsSortingDrapdownOpen] = useState(false);
  const SortByOptions = ["Recommended", "New To Old", "Old To New"];
  const [selectedSortOption, setSelectedSortOption] = useState("Recommended");

  // Close the dropdown after selection
  const handleSortOptionClick = (option) => {
    setSelectedSortOption(option);
    SetIsSortingDrapdownOpen(false);
  };

  // Apply sort when selectedSortOption changes
  useEffect(() => {
    let sortedFlights = [...bookedFlight];

    // If "New To Old" is selected, reverse the array
    if (selectedSortOption === "New To Old") {
      sortedFlights.reverse();
    }

    // If "Old To New" or "Recommended" is selected, no sorting (keep original order)
    if (
      selectedSortOption === "Old To New" ||
      selectedSortOption === "Recommended"
    ) {
      sortedFlights = [...bookedFlight];
    }

    setBookedFlight(sortedFlights);
  }, [selectedSortOption]);

  const averagePrice =
    bookedFlight.reduce((acc, item) => acc + item.price, 0) /
    bookedFlight.length;

  return (
    <div className="container mx-auto">
      {bookedFlight.length > 0 ? (
        <>
          <div className="w-full flex justify-between mb-10">
            <div className="relative inline-block">
              <div className="flex items-center justify-between w-full gap-2">
                <p className="font-semibold text-dark-text">Sort By:</p>
                <div
                  onClick={() =>
                    SetIsSortingDrapdownOpen(!isSortingDrapdownOpen)
                  }
                  className="flex justify-between items-center text-dark-text text-sm cursor-pointer"
                >
                  <p className="font-bold">{selectedSortOption}</p>
                </div>
              </div>

              {/* Dropdown options */}
              {isSortingDrapdownOpen && (
                <div className="bg-white absolute z-50 mt-1 text-justify shadow-lg">
                  {SortByOptions.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleSortOptionClick(item)}
                      className="px-4 py-2 cursor-pointer hover:bg-light-btn inline-flex w-full"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <img src={info} alt="info" />
              <p className="text-dark-text">
                AVG Fare:
                <span className="font-semibold text-black">
                  ${averagePrice}
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            {bookedFlight.map((item, i) => (
              <MyFlightsItem item={item} key={i} />
            ))}
          </div>
        </>
      ) : (
        <div className="h-screen font-bold flex justify-center items-center text-lg">
          <p>There is no flight bookings available</p>
        </div>
      )}
    </div>
  );
}

export default Flights;
