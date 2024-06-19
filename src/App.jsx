import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Products from "./pages/Products";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Navbar user={user} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/products"
            element={<Products user={user} />}
          />
          <Route
            path="/signup"
            element={<Signup setUser={setUser} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
