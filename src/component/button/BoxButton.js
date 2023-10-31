import React from "react";
import { useTheme, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {},
  buttonStyle: {
    height: 40,
    padding: "0.5rem 0.7rem  ",
    backgroundColor: "#12A89D  ",
    color: "#fff  ",
    borderRadius: "4px  ",
    fontWeight: "550  ",
    textTransform: "none  ",
    "&:hover": {
      backgroundColor: "#12A89D",
    },
  },
}));
const BoxButton = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { text, className, onClick, disabled, type } = props;
  const properties = {
    onClick,
    disabled,
    type,
  };
  return (
    <>
      <Button {...properties} className={clsx(classes.buttonStyle, className)}>
        {text}
      </Button>
    </>
  );
};
BoxButton.defaultProps = {
  className: "",
  type: "",
  disabled: false,
  onClick: () => {},
};
export default BoxButton;
