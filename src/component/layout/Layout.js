import React from "react";
import { useTheme, Box, makeStyles } from "@material-ui/core";

import clsx from "clsx";
import { commonStyles } from "../../utils/commonStyles";
import Header from "./Header";
import Notifier from "../notifier/Notifier";

const useStyles = makeStyles((theme) => ({
  container: {},
  dFAC: {
    ...commonStyles.dFAC,
  },
}));
const Layout = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { children } = props;

  return (
    <>
      <Box className={clsx(classes.container)}>
        <Notifier />
        <Header />
        {children}
      </Box>
    </>
  );
};

export default Layout;
