import React from 'react';
import Form from './Form.jsx';
import AllAgents from './AllAgents.jsx';

// styled components
import {
  Title,
  AppContainer,
  FinePrint,
  Spacer
} from '../styles.js';


function App(props) {

  return (
    <AppContainer>
      <Title>
        Contact Agent
      </Title>
      <Form />
      <FinePrint>
        By pressing Contact Agent, you agree that Zillow Group and real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. You don't need to consent as a condition of buying any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use. Zillow does not endorse any real estate professionals.
        </FinePrint>
      <Spacer></Spacer>
      <AllAgents houseId={props.houseId} />
    </AppContainer>
  )
}

export default App;

