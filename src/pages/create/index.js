import React from "react";
import { useTheme, Box, makeStyles } from "@material-ui/core";

import clsx from "clsx";
import { commonStyles } from "../../utils/commonStyles";
import { connect } from "react-redux";
import * as callAction from "../../redux/action";
import { useHistory } from "react-router-dom";
import BookForm from "../../component/form/BookForm";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0.5rem",
  },
  dFJCAC: {
    ...commonStyles.dFJCAC,
  },
}));
const Create = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();
  const { createBook, setActiveTab } = props;

  const submitHandler = (request) => {
    createBook(request).then(() => {
      history.push("/home");
    });
  };

  React.useEffect(() => {
    setActiveTab();
  }, []);
  return (
    <>
      <Box className={clsx(classes.container, classes.dFJCAC)}>
        <BookForm onSubmit={submitHandler} />
      </Box>
    </>
  );
};

const mapStateToProps = ({ bookReducer }) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    createBook: (request) => dispatch(callAction.createBook(request)),
    setActiveTab: () => dispatch(callAction.setActiveTab(1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
