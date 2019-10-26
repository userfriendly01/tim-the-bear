import React from 'react'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../components'
import "react-tabs/style/react-tabs.css";
import { routes } from '../utils/Routes.jsx'

const StyledLink = styled(Link)`
  display: inline-block;    
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
      <Container>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/meet">Meet The Bear</StyledLink>
        <StyledLink to="/gear">Bear Swag</StyledLink>
        <StyledLink to="/sponsor">Sponsorship Opportunities</StyledLink>
        <StyledLink to="/train">Train with Tim</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Container>
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