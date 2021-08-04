import { Button, TextField, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import AdapterLuxon from "@material-ui/lab/AdapterLuxon";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { useState } from "react";
import { DateTimePicker } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
import { dateIsValid } from "../util/date";
import { DateTime } from "luxon";

const Root = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
}));

const FormContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  padding: "30px",
  borderRadius: "10px",
  textAlign: "center",
}));

const Home = (): JSX.Element => {
  const [title, setTitle] = useState<string | null>(null);
  const [date, setDate] = useState<DateTime | null>(
    DateTime.now().plus({ days: 1 })
  );
  const history = useHistory();

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title === null || date === null || title === "") {
      return;
    }

    const params = new URLSearchParams({
      title: title,
      date: date.toSeconds().toString(),
    });
    history.push("/countdown?" + params.toString());
  };

  return (
    <>
      <Root>
        <FormContainer>
          <Typography variant="h1">
            <b>Create Countdown</b>
          </Typography>
          <br></br>
          <form noValidate onSubmit={onSubmit}>
            <TextField
              placeholder="Enter title"
              label="Countdown Title"
              variant="standard"
              value={title ?? ""}
              error={title === ""}
              helperText={title === "" && "Please provide a title!"}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              required
              margin="normal"
              sx={{ marginBottom: 3 }}
              fullWidth
            />
            <LocalizationProvider dateAdapter={AdapterLuxon}>
              <DateTimePicker
                renderInput={(props) => (
                  <TextField
                    {...props}
                    variant="standard"
                    required
                    error={date === null || !dateIsValid(date)}
                    helperText={
                      (date === null || !dateIsValid(date)) &&
                      "Please provide a valid date!"
                    }
                    sx={{ marginBottom: 3 }}
                    fullWidth
                  />
                )}
                label="End Date Time"
                value={date}
                onChange={setDate}
              />
            </LocalizationProvider>
            <Button
              disabled={
                title === "" ||
                title === null ||
                date === null ||
                !dateIsValid(date)
              }
              variant="contained"
              size="large"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </FormContainer>
      </Root>
    </>
  );
};

export default Home;
