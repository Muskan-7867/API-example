import React from "react";

import "./App.css";

import FetchExample from "./components/Fetch";
import AxiosExample from "./components/Axios";

function App() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 -z-10 h-screen w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>

      <FetchExample />
      <AxiosExample />
    </div>
  );
}

export default App;
