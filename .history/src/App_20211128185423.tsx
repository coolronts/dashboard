import './App.css';

import {Route, BrowserRouter as Router} from "react-router-dom";

import Home from './Pages/Home'
import { LeftDrawer } from './Units/Shared'
import {SectionHeader} from './Units/Shared'

function App() {
  const styles = {
    leftDrawer: 'bg-white px-8 rounded-tr-3xl py-8 w-42',
  }
  return (
    <div className="App flex">
      <div className={styles.leftDrawer}>
        <LeftDrawer/>
      </div>
      <div className="w-full mx-8">
        <SectionHeader />
          <Router>
            <Route path="/" element={<Home/>} />
          </Router>
      </div>
    </div>
  );
}

export default App;
