import { Box } from "@material-ui/core";
import { DateTime } from "luxon";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import toState from "../util/toState";
import UnitDisplay, { Colon } from "./UnitDisplayComponent";

const CountdownComponent = ({ toDate }: { toDate: DateTime }): JSX.Element => {
  const [state, setState] = useState(toState(toDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setState(toState(toDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        padding: "1vmin",
      }}
    >
      {state.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <UnitDisplay unitName={item[0]} unitValue={item[1]} />
            {index < state.length - 1 && <Colon />}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default CountdownComponent;
