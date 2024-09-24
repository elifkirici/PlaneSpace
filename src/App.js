import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  const [bookedFlight, setBookedFlight] = useState([]);

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
