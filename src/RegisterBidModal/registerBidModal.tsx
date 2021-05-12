import "./registerBidModalStyles.css";
import { Navbar, Container } from "react-bootstrap";
import { BidDetails } from "./RegisterBidFormComponents/BidDetails/bidDetails";

export function RegisterBidModal() {
  return (
    <div>
      <Navbar className="header-block" expand="lg" variant="light">
        <h1 className="mx-auto modal-heading">Place you Bid(1/4 step)</h1>
      </Navbar>
      <Container>
        <BidDetails />
      </Container>
    </div>
  );
}

export default RegisterBidModal;
