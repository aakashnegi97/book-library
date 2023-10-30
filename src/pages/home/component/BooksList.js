import React from "react";
import { useTheme, Box, makeStyles, Grid } from "@material-ui/core";

import clsx from "clsx";
import { commonStyles } from "../../../utils/commonStyles";
import * as callAction from "../../../redux/action";
import { connect } from "react-redux";
import BookCard from "./BookCard";
import PaginationComponent from "../../../component/pagination/Pagination";
import CommonTextField from "../../../component/textfield/CommonTextField";
import ToggleButtonComponent from "../../../component/button/ToggleButton";

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
  searchStyle: {
    width: "80%",
  },
}));
const BooksList = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { getBooks, setUpdateBook, pagination } = props;
  const books = pagination.books;
  const toggleList = [
    { name: "Ascending", value: "ASC" },
    { name: "Descending", value: "DESC" },
  ];

  const isFirstLoad = React.useRef(true);
  const [search, setSearch] = React.useState(pagination?.search || "");

  React.useEffect(() => {
    if (!pagination?.currentPage) {
      getBooks();
    }
  }, []);

  React.useEffect(() => {
    if (!isFirstLoad.current) {
      const timeout = setTimeout(() => {
        getBooks({ search: search });
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
    isFirstLoad.current = false;
  }, [search]);

  const handlePagination = (page) => {
    getBooks({ page, search: pagination?.search });
  };
  const handleSearch = (e) => {
    e.persist();
    setSearch(e.target.value);
  };
  const hangleToggle = (value) => {
    if (value) {
      getBooks({
        sortDirection: value,
        search: pagination?.search,
        page: pagination?.currentPage,
      });
    }
  };
  const handleUpdateBook = (book) => {
    setUpdateBook(book);
  };
  return (
    <>
      <Box className={clsx(classes.container)}>
        <Box className={clsx(classes.filterContainer)}>
          <Grid container spacing={2}>
            <Grid item xs={8} className={classes.dFAC}>
              <CommonTextField
                label={"Search"}
                onChange={handleSearch}
                value={search}
                className={classes.searchStyle}
              />
            </Grid>
            <Grid item xs={4} className={classes.dFAC}>
              <ToggleButtonComponent
                value={pagination?.sortDirection}
                list={toggleList}
                onChange={hangleToggle}
              />
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
                    <BookCard book={book} handleUpdateBook={handleUpdateBook} />
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
    setUpdateBook: (request) => dispatch(callAction.setUpdateBook(request)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
