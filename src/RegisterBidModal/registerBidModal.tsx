import "./registerBidModalStyles.css";
import { Navbar, Container } from "react-bootstrap";
import { BidDetails } from "./RegisterBidFormComponents/BidDetails/bidDetails";
import { BidRateDetails } from "./RegisterBidFormComponents/BidRateDetails/bidRateDetails"
import { useState } from "react";

interface RegisterBidModalProps{
  step: number;
  increaseSteps: () => void;
}

export function RegisterBidModal(props: RegisterBidModalProps) {
  
  const [step, setStep] = useState(props.step);
  console.log(step);

  const handleIncreaseSteps = () => {
    console.log("I'm called")
    props.increaseSteps();
  }

  const renderForm = (): JSX.Element => {
    console.log(step)
    switch (step) {
      case 1:
        return <BidDetails increaseSteps={handleIncreaseSteps} step={step}/>;
      case 2:
        return <BidRateDetails />;
      default:
        return <></>;
    }
  };
  
  const renderStepsHeading = (): string => {
    switch (step) {
      case 1:
        return "Place you Bid(1/4 step)";
      case 2:
        return "Place you Bid(2/4 step)";
      default:
        return "";
    }
  };

  return (
    <div>
      <Navbar className="header-block" expand="lg" variant="light">
        <h1 className="mx-auto modal-heading">{renderStepsHeading()}</h1>
      </Navbar>
      <Container>{renderForm()}</Container>
    </div>
  );
}

export default RegisterBidModal;
