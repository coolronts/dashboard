import './App.css';

import Home from './Pages/Home'

function App() {
  const styles = {
    leftDrawer: 'bg-white px-8 rounded-tr-3xl py-8',
  }
  return (
    <div className="App">
      <div className={styles.leftDrawer}>
        <LeftDrawer/>
      </div>
      <Home/>
    </div>
  );
}

export default App;
