import "./registerBidModal.css";
import { Navbar } from "react-bootstrap";

export function RegisterBidModal() {
  return (
    <div>
      <Navbar className="header-block" expand="lg" variant="light">
        <h1 className="mx-auto modal-heading">Place you Bid(1/4 step)</h1>
      </Navbar>
    </div>
  );
}

export default RegisterBidModal;
