import React from "react";
import { useTheme, makeStyles, ButtonBase } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    color: "#194B3F",
  },
}));
const EditIcon = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { className, onClick, style, buttonClassName } = props;
  const iconProperties = {
    style,
  };
  const buttonProperties = {
    onClick,
  };
  return (
    <ButtonBase {...buttonProperties} className={clsx(buttonClassName)}>
      <Edit
        {...iconProperties}
        className={clsx(classes.iconStyle, className)}
      />
    </ButtonBase>
  );
};
EditIcon.defaultProps = {
  className: "",
  buttonClassName: "",
  onClick: null,
};
export default EditIcon;
