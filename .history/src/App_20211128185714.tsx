import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './Pages/Home'
import { LeftDrawer } from './Units/Shared'
import {SectionHeader} from './Units/Shared'

function App() {
  const styles = {
    leftDrawer: 'bg-white px-8 rounded-tr-3xl py-8 w-42',
  }
  return (
    <BrowserRouter>
      <div className="App flex">
        <div className={styles.leftDrawer}>
          <LeftDrawer/>
        </div>
        <div className="w-full mx-8">
          <SectionHeader />
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
