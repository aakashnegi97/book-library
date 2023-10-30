import React from "react";
import { useTheme, Box, makeStyles } from "@material-ui/core";

import clsx from "clsx";
import { commonStyles } from "../../utils/commonStyles";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  container: {
  },
  dFAC: {
    ...commonStyles.dFAC,
  },
}));
const Layout = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const {children} = props;

  return (
    <>
      <Box className={clsx(classes.container)}>
        <Header />
        {children}
      </Box>
    </>
  );
};

export default Layout;
