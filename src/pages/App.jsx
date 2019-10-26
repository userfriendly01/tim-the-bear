import React, { useState, useEffect } from 'react'
import { 
  Header,
  Footer,
  Navigation
} from '../components'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #EDEDEE;
    white-space: nowrap;
`;

const App = () => {

  const [ loading, setLoading ] = useState(false);

  useEffect(() => {

  })

  return (
    <MainContainer>
      { loading ?
        <div>LOADING</div>
        :
        <div>
            <Header />
            <Navigation />
            <Footer />
        </div>
      }
    </MainContainer>
  );
};

export default App;