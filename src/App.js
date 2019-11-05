import React, { Component } from 'react';
import DateButton from './components/DateButton';
import DateDisplay from './components/DateDisplay';
import API from './services/dateAPI';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: ''
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick = () => {
    API.getAPIResponse().then((res) => {
      this.setState({ apiResponse: res });
    });
  }

  render() {
    const { apiResponse } = this.state;
    return (
      <div>
        <center><h1>Date API</h1></center>
        <center><DateButton onClickButton={this.handleButtonClick} /></center>
        <DateDisplay apiResponse={apiResponse} />
      </div>
    );
  }
}

export default App;
