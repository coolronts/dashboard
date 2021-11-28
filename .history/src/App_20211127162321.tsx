import './App.css';

import LeftDrawer from './Units/LeftDrawer'

function App() {
  return (
    <div className="App">
      
      <div className="flex ">
        <div className="bg-white w-1/3">
          <LeftDrawer/>
        </div>
      </div>
    </div>
  );
}

export default App;
