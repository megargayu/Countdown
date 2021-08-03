import { Button, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { useLocation } from "react-router";
import CountdownComponent from "../components/CountdownComponent";
import { dateIsValid, parseRawDate } from "../util/date";

const Root = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
}));

const Countdown = (): JSX.Element => {
  const query = new URLSearchParams(useLocation().search);

  const title = query.get("title");
  const date = parseRawDate(query.get("date"));

  return (
    <Root>
      {title === null || date === null || !dateIsValid(date) ? (
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Valid title and/or date were not given.
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
