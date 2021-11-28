import './App.css';

import Logo from './Components/Logo'
import {Overview} from './Components/Icons'

function App() {
  return (
    <div className="App">
      <div className="mt-48 px-24">
        <Logo Icon={<Overview />} name="Overview" />
      </div>
    </div>
  );
}

export default App;
