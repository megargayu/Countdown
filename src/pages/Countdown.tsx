import { Button, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { DateTime } from "luxon";
import { useLocation } from "react-router";
import CountdownComponent from "../components/CountdownComponent";
import { parseRawDate } from "../util/date";

const Root = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
}));

const checkInput = (
  title: string | null,
  date: DateTime | null
): string | null => {
  if (title === null) {
    return "No title was given!";
  }

  if (date === null) {
    return "No date was given!";
  }

  if (!date.isValid) {
    return "Date provided is not valid.";
  }

  if (date.toSeconds() < DateTime.now().toSeconds()) {
    return "The date provided has already passed!";
  }

  return null;
};

const Countdown = (): JSX.Element => {
  const query = new URLSearchParams(useLocation().search);

  const title = query.get("title");
  const date = parseRawDate(query.get("date"));

  const error = checkInput(title, date);

  return (
    <Root>
      {title === null || date === null || error !== null ? (
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          {error}
        </Typography>
      ) : (
        <>
          <Typography variant="h1" sx={{ textAlign: "center" }}>
            <b>{title}</b>
          </Typography>
          <CountdownComponent toDate={date} />
        </>
      )}
      <br />
      <Button variant="contained" size="large" href={"/"}>
        Go home
      </Button>
    </Root>
  );
};

export default Countdown;
