import React from "react";
import { useTheme, Box, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import { commonStyles } from "../../../utils/commonStyles";
import CommonText from "../../../component/text/CommonText";
import BoxButton from "../../../component/button/BoxButton";
import EditIcon from "../../../component/icons/EditIcon";
import { useHistory } from "react-router-dom";
import { config } from "../../../utils/constants";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0.7rem",
    border: "1px solid black",
    borderRadius: 12,
    backgroundColor: "#F3FDE8",
  },
  dFAC: {
    ...commonStyles.dFAC,
  },
  dFJCAC: {
    ...commonStyles.dFJCAC,
  },
  titleContainer: {
    position: "relative",
  },
  editIcon: {
    position: "absolute",
    right: 0,
  },
}));
const BookCard = React.memo((props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { book, handleUpdateBook } = props;
  const history = useHistory();
  const handleLink = () => {
    window.open(book?.link || "");
  };

  const editHandler = () => {
    handleUpdateBook(book);
    history.push(config.routes.update.url);
  };
  return (
    <>
      <Box className={clsx(classes.container)}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            className={clsx(classes.dFJCAC, classes.titleContainer)}
          >
            <EditIcon
              buttonClassName={classes.editIcon}
              onClick={editHandler}
            />
            <CommonText text={book?.title} type={1} />
          </Grid>

          <Grid item xs={5} className={clsx(classes.dFAC)}>
            <CommonText text={config.bookCard.language} type={2} />
          </Grid>
          <Grid item xs={7} className={clsx(classes.dFJCAC)}>
            <CommonText text={book?.language} type={3} />
          </Grid>

          <Grid item xs={5} className={clsx(classes.dFAC)}>
            <CommonText text={config.bookCard.author} type={2} />
          </Grid>
          <Grid item xs={7} className={clsx(classes.dFJCAC)}>
            <CommonText text={book?.author} type={3} />
          </Grid>

          <Grid item xs={5} className={clsx(classes.dFAC)}>
            <CommonText text={config.bookCard.country} type={2} />
          </Grid>
          <Grid item xs={7} className={clsx(classes.dFJCAC)}>
            <CommonText text={book?.country} type={3} />
          </Grid>

          <Grid item xs={5} className={clsx(classes.dFAC)}>
            <CommonText text={config.bookCard.pages} type={2} />
          </Grid>
          <Grid item xs={7} className={clsx(classes.dFJCAC)}>
            <CommonText text={book?.pages} type={3} />
          </Grid>

          <Grid item xs={5} className={clsx(classes.dFAC)}>
            <CommonText text={config.bookCard.year} type={2} />
          </Grid>
          <Grid item xs={7} className={clsx(classes.dFJCAC)}>
            <CommonText text={book?.year} type={3} />
          </Grid>

          <Grid item xs={12} className={clsx(classes.dFJCAC)}>
            <BoxButton text={config.bookCard.link} onClick={handleLink} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
});

export default BookCard;
