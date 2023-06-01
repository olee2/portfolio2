import { Typography } from "@mui/material";

export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      Oscar Elny {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
