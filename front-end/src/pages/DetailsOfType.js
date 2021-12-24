import Defender from "./Defender"
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SelectType from "./SelectType";

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
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
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
const Details = () => {
    const [value, setValue] = React.useState(0);
    const [type,setType] = React.useState('')
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const getType = (props) => setType(props)
  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Attacker" {...a11yProps(0)} />
        <Tab label="Defender" {...a11yProps(1)} />
      </Tabs>
    </Box>
    <SelectType get={getType}/>
    <TabPanel value={value} index={0}>
      Item One
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Defender type={type} />
    </TabPanel>

  </Box>
  );
};

export default Details;
