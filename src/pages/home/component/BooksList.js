import React from "react";
import { useTheme, Box, makeStyles, Grid } from "@material-ui/core";

import clsx from "clsx";
import { commonStyles } from "../../../utils/commonStyles";
import * as callAction from "../../../redux/action";
import { connect } from "react-redux";
import BookCard from "./BookCard";
import PaginationComponent from "../../../component/pagination/Pagination";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0.5rem",
  },
  filterContainer: {
    padding: "1.5rem",
  },
  dFAC: {
    ...commonStyles.dFAC,
  },
  booksListContainer: {
    width: "100%",
    maxWidth: "100%",
  },
}));
const BooksList = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { getBooks, pagination } = props;
  const books = pagination.books;
  React.useEffect(() => {
    if (!pagination?.currentPage) {
      getBooks();
    }
  }, []);
  const handlePagination = (page) => {
    getBooks({ page });
  };
  return (
    <>
      <Box className={clsx(classes.container)}>
        <Box className={clsx(classes.filterContainer)}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              Search
            </Grid>
            <Grid item xs={4}>
              Sort
            </Grid>
          </Grid>
        </Box>
        <Box className={clsx(classes.container)}>
          {books?.length ? (
            <Grid
              container
              spacing={3}
              className={clsx(classes.booksListContainer)}
            >
              {books?.map((book, index) => {
                return (
                  <Grid item xs={12} sm={4} lg={3} key={book.id}>
                    <BookCard book={book} />
                  </Grid>
                );
              })}
              {pagination?.totalPages > 1 ? (
                <Grid item xs={12}>
                  <PaginationComponent
                    count={pagination?.totalPages}
                    page={pagination?.currentPage}
                    onChange={handlePagination}
                  />
                </Grid>
              ) : null}
            </Grid>
          ) : (
            <>Empty</>
          )}
        </Box>
      </Box>
    </>
  );
};

const mapStateToProps = ({ bookReducer }) => {
  return {
    pagination: bookReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: (request) => dispatch(callAction.getBooks(request)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
