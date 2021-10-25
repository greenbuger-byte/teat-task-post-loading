import './App.css';
import {global as GlobalStyle} from "./theme/global";
import Home from "./pages/home";


function App() {
  return (
    <div>
      <GlobalStyle />
        <Home />
    </div>
  );
}

export default App;
