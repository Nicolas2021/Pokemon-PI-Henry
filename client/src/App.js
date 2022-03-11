import "./App.css";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import store from "./redux/store";
import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import Form from "./pages/Form/Form";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/CreatePokemon" element={<Form />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
