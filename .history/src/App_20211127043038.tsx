import './App.css';

import Logo from './Components/Logo'
import {Overview} from './Components/Icons'

function App() {
  return (
    <div className="App text-center">
      <Logo Icon={<Overview />} />
    </div>
  );
}

export default App;
