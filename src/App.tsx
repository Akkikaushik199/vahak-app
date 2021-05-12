import logo from "./logo.png";
import "./App.css";
import { RegisterBidModal } from "./RegisterBidModal/registerBidModal";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" fixed="top" variant="light">
        <img className="vahak-logo" src={logo} alt="Logo" />
      </Navbar>
      <div className="App-body">
        <RegisterBidModal />
      </div>
    </div>
  );
}

export default App;
