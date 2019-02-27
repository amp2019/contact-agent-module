import React from 'react';
import ListedAgent from './ListedAgent.jsx';
import PremierAgent from './PremierAgent.jsx';
import axios from 'axios';

// styled components
import { Ad } from '../styles.js';


class AllAgents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lAgent: {},
      pAgent0: {},
      pAgent1: {},
      pAgent2: {},
    };
  }
  componentDidMount() {
    axios.get(`http://steve.us-east-2.elasticbeanstalk.com/houseId/listedAgent/${this.props.houseId}`)
      .then(response => {

        // response is of type string
        // [{"id":101,"house_id":100,"agent_name":"Arch Weber","agitgent_company":"Bechtelar, Gislason and Schuppe","agent_phone":"(236) 089-1945 x509","agent_url":"http://lorempixel.com/640/480/people
        const listAgent = response.data[0];
        this.setState({ lAgent: listAgent });
      });
    axios.get(`http://steve.us-east-2.elasticbeanstalk.com/houseId/premierAgents`)
      .then(response => {
        const preAgent0 = response.data[0];
        const preAgent1 = response.data[1];
        const preAgent2 = response.data[2];
        this.setState({
          pAgent0: preAgent0,
          pAgent1: preAgent1,
          pAgent2: preAgent2,
        });
      });
  }

  render() {
    return (
      <div>
        <ListedAgent lAgent={this.state.lAgent} />
        <PremierAgent pAgents={this.state.pAgent0} />
        <PremierAgent pAgents={this.state.pAgent1} />
        <PremierAgent pAgents={this.state.pAgent2} />
        <Ad>Learn how to appear as the agent above</Ad>
      </div>
    )
  }
};

export default AllAgents;