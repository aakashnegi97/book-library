import React from "react";
import { useTheme, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import CommonText from "../text/CommonText";

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
const ToggleButtonComponent = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { value, onChange, orientation, list } = props;
  const handleChange = (e, value) => {
    onChange(value);
  };
  return (
    <>
      <ToggleButtonGroup
        orientation={orientation}
        value={value}
        exclusive
        onChange={handleChange}
      >
        {list?.map((data, index) => (
          <ToggleButton value={data.value} key={index}>
            <CommonText text={data.name} type={4} />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
};
ToggleButtonComponent.defaultProps = {
  className: "",
  orientation: "horizontal",
  onChange: () => {},
  value: "",
  list: [],
};
export default ToggleButtonComponent;
