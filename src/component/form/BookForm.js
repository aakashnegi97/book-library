import React from "react";
import { useTheme, Box, makeStyles, Grid } from "@material-ui/core";
import clsx from "clsx";
import { commonStyles } from "../../utils/commonStyles";
import CommonTextField from "../textfield/CommonTextField";
import BoxButton from "../button/BoxButton";

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

const initialFormState = {
  title: "",
  author: "",
  country: "",
  language: "",
  link: "",
  pages: "",
  year: "",
};

const BookForm = React.memo((props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { fieldData, onSubmit } = props;
  const submitButtonLabel = fieldData ? "UPDATE" : "CREATE";

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
    <>
      <Box className={clsx(classes.container)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CommonTextField
              label="Title"
              value={formData.title}
              onChange={(e) => {
                handleFormData(e, "title");
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CommonTextField
              label="Author"
              value={formData.author}
              onChange={(e) => {
                handleFormData(e, "author");
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CommonTextField
              label="Country"
              value={formData.country}
              onChange={(e) => {
                handleFormData(e, "country");
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CommonTextField
              label="Language"
              value={formData.language}
              onChange={(e) => {
                handleFormData(e, "language");
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CommonTextField
              label="Link"
              value={formData.link}
              onChange={(e) => {
                handleFormData(e, "link");
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CommonTextField
              label="Pages"
              value={formData.pages}
              type="number"
              onChange={(e) => {
                handleFormData(e, "pages");
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <CommonTextField
              label="Year"
              value={formData.year}
              onChange={(e) => {
                handleFormData(e, "year");
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <BoxButton onClick={submitHandler} text={submitButtonLabel} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
});

export default BookForm;
