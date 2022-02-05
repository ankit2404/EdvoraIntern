
import Home from "./pages/Home";
import {CompanyProvider} from './context/CompanyContext'
function App() {
  return (
    <CompanyProvider>
    <div className="App">
      <Home />
    </div>
    </CompanyProvider>
  );
}

export default App;
