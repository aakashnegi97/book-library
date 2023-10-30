import React from "react";
import { useTheme, Box, makeStyles, Grid } from "@material-ui/core";

import clsx from "clsx";
import { commonStyles } from "../../../utils/commonStyles";
import * as callAction from "../../../redux/action";
import { connect } from "react-redux";
import BookCard from "./BookCard";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0.5rem",
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
  const { getBooks, books } = props;
  React.useEffect(() => {
    getBooks();
  }, []);
  console.log(books);

  return (
    <>
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
          </Grid>
        ) : (
          <>Empty</>
        )}
      </Box>
    </>
  );
};

const mapStateToProps = ({ bookReducer }) => {
  return {
    books: bookReducer.books,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: (request) => dispatch(callAction.getBooks(request)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
