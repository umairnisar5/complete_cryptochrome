import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HiddenCards from  "./HiddenCards";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.common.white,
        borderRadius: "10px"
    },
}));


const useStylesAppBar = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        outline: "none"
    },
}));


const useStylesTab = makeStyles((theme) => ({
    root: {
        outline: "none !important"
    },
}));



const useStylesTabPanel = makeStyles((theme) => ({
    root: {
        borderRadius: "2px"
    },
}));
export default function FooterTabsView() {
    const classes = useStyles();
    const appBarClasses = useStylesAppBar()
    const tabButtonClasses = useStylesTab()
    const tabPanelButtonClasses = useStylesTabPanel()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar
                className={appBarClasses.root}
                position="static">
                <Tabs value={value} indicatorColor="white" onChange={handleChange} aria-label="Farm Card">
                    <Tab className={tabButtonClasses.root} label="stake" {...a11yProps(0)} />
                    <Tab className={tabButtonClasses.root} label="Contracts" {...a11yProps(1)} />
                    <Tab className={tabButtonClasses.root} label="farm Info" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel className={tabPanelButtonClasses.root} value={value} index={0}>
                Item One
      </TabPanel>
            <TabPanel value={value} index={1}>
              <HiddenCards />
              <hr/>
              <HiddenCards />
              <hr />
              <HiddenCards />
      </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
      </TabPanel>
        </div>
    );
}
