import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  const storedItem = JSON.parse(localStorage.getItem("bookedFlight"));

  const [bookedFlight, setBookedFlight] = useState(storedItem);
  useEffect(() => {
    localStorage.setItem("bookedFlight", JSON.stringify(bookedFlight));
  }, [bookedFlight]);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                bookedFlight={bookedFlight}
                setBookedFlight={setBookedFlight}
              />
            }
          />
          <Route
            path="flights"
            element={
              <Flights
                bookedFlight={bookedFlight}
                setBookedFlight={setBookedFlight}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
