import React from "react";
import {
  useTheme,
  Box,
  makeStyles,
  Tabs,
  Tab,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { commonStyles } from "../../utils/commonStyles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0.5rem",
    backgroundColor: "rgb(255, 115, 0)",
    position: "sticky",
    top: 0,
    zIndex: 1,
    borderRadius: 5,
  },
  dFAC: {
    ...commonStyles.dFAC,
  },
  tabStyle: {
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 600,
  },
  selectedTabStyle: {
    borderBottom: "0.15rem solid #fff",
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Header = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const history = useHistory();
  const {} = props;

  const tabs = [
    { label: "Books List", route: "/home" },
    // {label:"Update Book" , route:"update"},
    { label: "Create Book", route: "/create" },
  ];

  const [selectedTab, setSelectedTab] = React.useState(0);

  React.useEffect(() => {}, []);

  const handleChange = (e, value) => {
    setSelectedTab(value);
    history.push(tabs[value].route);
  };

  return (
    <>
      <Box className={clsx(classes.container)}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor=""
        >
          {tabs.map((tab, index) => {
            return (
              <Tab
                className={clsx(
                  selectedTab === index ? classes.selectedTabStyle : ""
                )}
                label={
                  <Typography className={clsx(classes.tabStyle)}>
                    {tab.label}
                  </Typography>
                }
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </Box>
    </>
  );
};

export default Header;
