import './App.css';

import Logo from './Components/Logo'
import {Overview} from './Components/Icons'

function App() {
  return (
    <div className="App bg-red-50">
      <Overview />
      <Logo Icon={<Overview />} />
    </div>
  );
}

export default App;
