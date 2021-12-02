import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Client, Overview, Staff } from "./Pages";

import { LeftDrawer } from "./Units/Shared";
import { SectionHeader } from "./Units/Shared";

function App() {
  const styles = {
    leftDrawer: "bg-white px-8 rounded-tr-3xl py-8 w-42 shadow-lg",
  };
  return (
    <BrowserRouter>
      <div className="App flex mb-6">
        <div className={styles.leftDrawer}>
          <LeftDrawer />
        </div>
        <div className="w-full mx-8">
          <SectionHeader />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/clients" element={<Client />} />
            <Route path="/staff" element={<Staff />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
