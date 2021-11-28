import './App.css';

import LeftDrawer from './Units/LeftDrawer'

function App() {
  return (
    <div className="App">
      
      <div className="flex ">
        <div className="bg-white px-8 rounded-3xl py-8">
          <LeftDrawer/>
        </div>
      </div>
    </div>
  );
}

export default App;
