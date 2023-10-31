import React from "react";
import { useTheme, Box, makeStyles, Snackbar } from "@material-ui/core";

import clsx from "clsx";
import { commonStyles } from "../../utils/commonStyles";
import { connect } from "react-redux";
import { Alert } from "@material-ui/lab";
import * as callAction from "../../redux/action";

const useStyles = makeStyles((theme) => ({
  container: {},
  dFAC: {
    ...commonStyles.dFAC,
  },
}));
const Notifier = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { notifications, deleteNotification } = props;
  const handleClose = (id) => {
    deleteNotification(id);
  };
  return (
    <>
      {notifications?.map((notify) => {
        return (
          <Snackbar
            key={notify?.id}
            open={true}
            autoHideDuration={3000}
            onClose={() => handleClose(notify?.id)}
          >
            <Alert
              onClose={() => handleClose(notify?.id)}
              severity={notify?.type}
            >
              {notify?.message}
            </Alert>
          </Snackbar>
        );
      })}
    </>
  );
};
const mapStateToProps = ({ bookReducer }) => {
  return {
    notifications: bookReducer.notifications,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteNotification: (id) => dispatch(callAction.deleteNotification(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifier);
