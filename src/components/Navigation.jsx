import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { routes } from '../utils/Routes.jsx'

const StyledTab = styled(Tab)`
  display: inline-block;
`;

const StyledLink = styled(Link)`
display: block;    
padding: 5px 10px;
color:  #696969;
&:hover {
    color: #16181b;
    text-decoration: none;
    
}
`;

const Navigation = () => {
  return (
    <Router>
      <Tabs>
        <TabList>
          <StyledLink to="/">Tab 1</StyledLink>
          <StyledLink to="/bear">Tab 2</StyledLink>
        </TabList>
      </Tabs>
      <Switch>
        { routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))
        }
      </Switch>
    </Router>
  );
};

export default Navigation;