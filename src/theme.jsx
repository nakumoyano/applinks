import { createTheme } from "@material-ui/core";
import { blue, grey, black } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[500],
    },
  },
  myButton: {
    backgroundColor: "red",
    color: "white",
    border: "1px solid black",
  },
});
