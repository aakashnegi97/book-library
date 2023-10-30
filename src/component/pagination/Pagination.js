import React from "react";
import { useTheme, makeStyles, Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
}));
const PaginationComponent = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { page, count, onChange } = props;
  const handleChange = (event, value) => {
    onChange(value, event);
  };
  return (
    <Box className={clsx(classes.container)}>
      <Pagination
        count={count}
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </Box>
  );
};
PaginationComponent.defaultProps = {
  page: 0,
  count: 0,
  onChange: () => {},
};
export default PaginationComponent;
