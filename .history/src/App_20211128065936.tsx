import './App.css';

import Home from './Pages/Home'
import {LeftDrawer} from './Units/Shared'

function App() {
  const styles = {
    leftDrawer: 'bg-white px-8 rounded-tr-3xl py-8 w-1/4',
  }
  return (
    <div className="App flex">
      <div className={styles.leftDrawer}>
        <LeftDrawer/>
      </div>
      <Home/>
    </div>
  );
}

export default App;
