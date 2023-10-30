import React from "react";
import { useTheme, makeStyles, TextField } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  commonStyle: {
    backgroundColor: "#fff",
  },
}));
const CommonTextField = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { value, className, type, variant, onChange, size, label } = props;
  return (
    <TextField
      variant={variant}
      type={type}
      value={value}
      label={label}
      className={clsx(classes.commonStyle, className)}
      onChange={onChange}
      size={size}
      fullWidth={true}
    />
  );
};
CommonTextField.defaultProps = {
  onChange: () => {},
  className: "",
  value: "",
  label: "",
  type: "text",
  variant: "outlined",
  size: "small",
};
export default CommonTextField;
