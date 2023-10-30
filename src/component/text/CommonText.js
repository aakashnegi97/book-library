import React from "react";
import { useTheme, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  commonStyle: {
    lineHeight: 1.2,
  },
  textStyle1: {
    color: "#194B3F  ",
    fontWeight: "600  ",
    fontSize: "1.3rem  ",
  },
  textStyle2: {
    color: "#194B3F  ",
    fontWeight: "600  ",
    fontSize: "1rem  ",
  },
  textStyle3: {
    color: "#194B3F  ",
    fontWeight: "600  ",
    fontSize: "0.9rem  ",
  },
}));
const CommonText = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { text, className, type } = props;
  let style = "";
  switch (type) {
    case 1:
      style = classes.textStyle1;
      break;
    case 2:
      style = classes.textStyle2;
      break;
    case 3:
      style = classes.textStyle3;
      break;
    case 4:
      style = classes.textStyle4;
      break;
    case 5:
      style = classes.textStyle5;
      break;
    case 6:
      style = classes.textStyle6;
      break;
    case 7:
      style = classes.textStyle7;
      break;
    case 8:
      style = classes.textStyle8;
      break;
    default:
      style = "";
  }
  return (
    <>
      <Typography className={clsx(style, classes.commonStyle, className)}>
        {text}
      </Typography>
    </>
  );
};
CommonText.defaultProps = {
  className: "",
  text: "",
};
export default CommonText;
