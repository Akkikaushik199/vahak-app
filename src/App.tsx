import logo from "./logo.png";
import { connect, useDispatch } from "react-redux";
import "./App.css";
import { RegisterBidModal } from "./RegisterBidModal/registerBidModal";
import { Navbar } from "react-bootstrap";
import { RootState } from "./redux/store";
import { stepDecrease, stepIncrease } from "./redux/Types/actions";

interface AppProps {
  step: number;
}

function App(props: AppProps) {
  const dispatch = useDispatch();

  const moveToNextStep = () =>{
    console.log("App called");
    dispatch(stepIncrease());
  }

  return (
    <div className="App">
      <Navbar expand="lg" fixed="top" variant="light">
        <img className="vahak-logo" src={logo} alt="Logo" />
      </Navbar>
      <div className="App-body">
        <RegisterBidModal
          increaseSteps={moveToNextStep}
          step={props.step}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    step: state.counter.step,
  };
};

export default connect(mapStateToProps)(App);
