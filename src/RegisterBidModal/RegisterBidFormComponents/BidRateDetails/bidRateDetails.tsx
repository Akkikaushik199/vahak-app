import "./bidRateDetailsStyles.css";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface rateFormValues {
  bidRate: number;
  contact: number;
  name: string;
  remarks: string;
}

export function BidRateDetails() {
  const initialValues: rateFormValues = {
    bidRate: 0,
    contact: 0,
    name: "",
    remarks: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        countTravellers: Yup.number().max(6, "hello"),
      })}
    >
      {(props) => {
        const { values, isSubmitting, handleChange, handleSubmit } = props;
        return (
          <form onSubmit={handleSubmit} className="bid-form">
            <hr className="solid"></hr>
            <div className="form-row">
              <TextField
                name="contact"
                className="contact-textfield-class"
                required
                id="contact-textfield"
                label="Enter your 10 digits Mobile number"
                onChange={handleChange}
                defaultValue={values.contact}
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="form-row">
              <TextField
                name="name"
                className="name-textfield-class"
                required
                id="name-textfield"
                label="Enter your Name "
                onChange={handleChange}
                defaultValue={values.name}
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="form-row">
              <TextField
                name="remarks"
                className="remarks-textfield-class"
                id="remarks-textfield"
                label="Enter Remarks (optional)"
                defaultValue={values.remarks}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="form-row">
              <Button
                variant="contained"
                className="submit-bid-button"
                disabled={isSubmitting}
                fullWidth
                color="primary"
              >
                Verify via OTP
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default BidRateDetails;
