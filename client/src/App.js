import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import ResturantdetailPage from "./routes/ResturantdetailPage";
import { RestaurantsContextProvider } from "./context/RestaurantContext";

function App() {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        {" "}
        <Router>
          {" "}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/restaurants/:id/update"
              element={<UpdatePage />}
            />
            <Route
              exact
              path="/restaurants/:id"
              element={<ResturantdetailPage />}
            />
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
