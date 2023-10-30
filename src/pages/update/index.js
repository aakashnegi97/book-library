import React from "react";
import { useTheme, Box, makeStyles } from "@material-ui/core";

import clsx from "clsx";
import { commonStyles } from "../../utils/commonStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0.5rem",
  },
  dFAC: {
    ...commonStyles.dFAC,
  },
}));
const Update = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const {} = props;

  return (
    <>
      <Box className={clsx(classes.container)}>Update</Box>
    </>
  );
};

export default Update;