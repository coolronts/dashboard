import './App.css';

import Home from './Pages/Home'
import {LeftDrawer} from './Units/Shared'

function App() {
  const styles = {
    leftDrawer: 'bg-white px-8 rounded-tr-3xl py-8 w-42',
  }
  return (
    <div className="App flex">
      <div className={styles.leftDrawer}>
        <LeftDrawer/>
      </div>
      <div className="w-full">
        <Home/>
      </div>
    </div>
  );
}

export default App;
