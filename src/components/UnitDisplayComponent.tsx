import { Box, Typography } from "@material-ui/core";

const UnitDisplay = ({
  unitName,
  unitValue,
}: {
  unitName?: string;
  unitValue: string;
}): JSX.Element => (
  <Box sx={{ alignItems: "start", margin: "1vmin" }}>
    <Typography variant="h2" sx={{ textAlign: "center" }}>
      {unitValue}
    </Typography>
    {unitName !== undefined && (
      <Typography style={{ textAlign: "center" }}>{unitName}</Typography>
    )}
  </Box>
);

export const Colon = (): JSX.Element => <UnitDisplay unitValue=":" />;

export default UnitDisplay;
