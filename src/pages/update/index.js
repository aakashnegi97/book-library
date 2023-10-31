import React from "react";
import { useTheme, Box, makeStyles } from "@material-ui/core";

import clsx from "clsx";
import { commonStyles } from "../../utils/commonStyles";
import BookForm from "../../component/form/BookForm";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as callAction from "../../redux/action";
import { config } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0.5rem",
  },
  dFJCAC: {
    ...commonStyles.dFJCAC,
  },
}));
const Update = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();
  const { updateData, setActiveTab, booksLength, updateBook } = props;

  React.useEffect(() => {
    if (!booksLength || !updateData) {
      history.push(config.routes.home.url);
    }
    setActiveTab();
  }, []);

  const submitHandler = (values) => {
    updateBook(values).then(() => {
      history.push(config.routes.home.url);
    });
  };

  return (
    <>
      <Box className={clsx(classes.container, classes.dFJCAC)}>
        <BookForm fieldData={updateData} onSubmit={submitHandler} />
      </Box>
    </>
  );
};
const mapStateToProps = ({ bookReducer }) => {
  return {
    updateData: bookReducer?.updateBook,
    booksLength: bookReducer?.books?.length,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateBook: (request) => dispatch(callAction.updateBooks(request)),
    setActiveTab: () => dispatch(callAction.setActiveTab(0)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
