import './App.css';

import LeftDrawer from './Units/LeftDrawer'

function App() {
  return (
    <div className="App">
      
      <div className="flex ">
        <div className="bg-white px-8 rounded-4xl">
          <LeftDrawer/>
        </div>
      </div>
    </div>
  );
}

export default App;
