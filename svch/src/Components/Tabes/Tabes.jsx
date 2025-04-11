import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BiographyComponent from '../BiographyComp/BiographyComp'
import TeamPilot from '../TeamPilot/TeamPilot'
import TrophiesCon from '../TrophiesCon/TrophiesCon'
import Table from '../TableStat/TableStat'
import BestCurcuits from '../BestCurcuits/BestCurcuits'
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#AF2B2B',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#AF2B2B',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: "Bebas Neue, sans-serif",
    fontSize: theme.typography.pxToRem(17),
    marginRight: theme.spacing(1),
    color: '#a8a8a8',
    '&.Mui-selected': {
      color: '#AF2B2B',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#AF2B2B',
    },
  }),
);

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

export default function CustomizedTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#1f1f1f', borderRadius:4 }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          
        >
          <StyledTab label="Trophies" />
          <StyledTab label="Stats" />
          <StyledTab label="Biography" />
          <StyledTab label="The best curcuit"/>
          <StyledTab label="Teams" />
        </StyledTabs>
        <TabPanel value={value} index={0}>
           <TrophiesCon trophie={props.pilot.Trophies}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
           <Table pilot={props.pilot}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <BiographyComponent pilot={props.pilot}/>
        </TabPanel>
        <TabPanel value={value} index={3}>
             <BestCurcuits curcuits={props.pilot.BestCircuits}/>
        </TabPanel>
        <TabPanel value={value} index={4}>
            <TeamPilot pilotTeam={props.pilot.Team}/>
        </TabPanel>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
}
