import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

//React Router with routes to the 2 pages
//Each Tab needs to have an "active" option to show the carot

const StyledTab = styled(Tab)`
    display: inline-block;

`;

const Nav = () => {
    return (
        <Tabs>
            <TabList>
                <StyledTab>Tab 1</StyledTab>
                <StyledTab>Tab 2</StyledTab>
            </TabList>
            <TabPanel>
                TOBEBUILT - TAB1 COMPONENT
            </TabPanel>
            <TabPanel>
                TOBEBUILT - TAB2 COMPONENT
            </TabPanel>
        </Tabs>
    )
}

export default Nav;