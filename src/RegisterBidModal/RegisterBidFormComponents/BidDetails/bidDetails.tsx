import "./bidDetailsStyles.css";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

interface formValues {
  source: string;
  destination: string;
  carType: string;
  countTravellers: number;
}

export function BidDetails() {
  const initialValues: formValues = {
    source: "",
    destination: "",
    carType: "",
    countTravellers: 0,
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
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit} className="bid-form">
            <div className="form-row">
              <div className="form-group col-md-6">
                <TextField
                  name="source"
                  className="source-textfield-class"
                  required
                  id="source-textfield"
                  label="Source Location"
                  onChange={handleChange}
                  defaultValue={values.source}
                  variant="outlined"
                />
              </div>
              <div className="form-group col-md-6">
                <TextField
                  name="destination"
                  className="destination-textfield-class"
                  required
                  id="destination-textfield"
                  label="Destination"
                  onChange={handleChange}
                  defaultValue={values.destination}
                  variant="outlined"
                />
              </div>
            </div>
            <div className="form-row">
              <FormControl
                required
                variant="outlined"
                className="carType-formControl"
              >
                <InputLabel id="carType-label" htmlFor="carType-select">
                  Enter Car Type
                </InputLabel>
                <Select
                  native
                  labelWidth={110}
                  onChange={handleChange}
                  inputProps={{
                    name: "carType",
                    id: "carType-select",
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>HatchBack</option>
                  <option value={2}>Sedan</option>
                  <option value={3}>SUV</option>
                </Select>
              </FormControl>
            </div>
            <div className="form-row">
              <TextField
                name="countTravellers"
                className="numberTravellers-textfield-class"
                id="numberTravellers-textfield"
                label="Number of Travellers"
                defaultValue={values.countTravellers}
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
                Enter Bid Details
              </Button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export default BidDetails;
