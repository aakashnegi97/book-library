import React from "react";
import { useTheme, Box, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import { commonStyles } from "../../utils/commonStyles";
import CommonTextField from "../textfield/CommonTextField";
import BoxButton from "../button/BoxButton";
import { config } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0.7rem",
    maxWidth: 300,
  },
  dFAC: {
    ...commonStyles.dFAC,
  },
  dFJCAC: {
    ...commonStyles.dFJCAC,
  },
}));

const initialFormState = config.initialFormState;

const BookForm = React.memo((props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { fieldData, onSubmit } = props;
  const submitButtonLabel = config.formButtonText(fieldData);

  const [formData, setFormData] = React.useState({ ...initialFormState });

  React.useEffect(() => {
    if (fieldData) {
      setFormData({ ...fieldData });
    }
  }, [fieldData]);

  const handleFormData = (e, field) => {
    e.persist();
    setFormData((prev) => {
      let prevdata = { ...prev };
      prevdata[field] = e.target.value;
      return { ...prevdata };
    });
  };

  const submitHandler = () => {
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler();
      }}
    >
      <Box className={clsx(classes.container)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CommonTextField
              {...config.form.title}
              value={formData.title}
              onChange={(e) => {
                handleFormData(e, config.form.title.field);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CommonTextField
              {...config.form.author}
              value={formData.author}
              onChange={(e) => {
                handleFormData(e, config.form.author.field);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CommonTextField
              {...config.form.country}
              value={formData.country}
              onChange={(e) => {
                handleFormData(e, config.form.country.field);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CommonTextField
              {...config.form.language}
              value={formData.language}
              onChange={(e) => {
                handleFormData(e, config.form.language.field);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CommonTextField
              {...config.form.link}
              value={formData.link}
              onChange={(e) => {
                handleFormData(e, config.form.link.field);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CommonTextField
              {...config.form.pages}
              value={formData.pages}
              onChange={(e) => {
                handleFormData(e, config.form.pages.field);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CommonTextField
              {...config.form.year}
              value={formData.year}
              onChange={(e) => {
                handleFormData(e, config.form.year.field);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <BoxButton type="submit" text={submitButtonLabel} />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
});

export default BookForm;
