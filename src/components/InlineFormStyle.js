import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textfield: {
    "& label": {
      fontSize: "0.8rem",
      top: -8,
    },
    "& label.Mui-focused": {
      top: 0,
    },
    "& input": {
      padding: "0.65rem 1rem",
      fontSize: "0.8rem",
    },
    "& .MuiInputBase-root": {
      marginRight: 16,
    },
  },
  button: {
    boxShadow: "none",
    background: "#d9b79a !important",
    color: "#fff !important",
  },
});

export default useStyles;
