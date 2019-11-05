import Button from '@material-ui/core/Button';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import API from '../services/dateAPI';

configure({ adapter: new Adapter() });

describe('DateAPI <App />', () => {

  it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('check if service is used to fetch data from the API', async () => {
    const mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet('https://jsonmock.hackerrank.com/datetime').reply(200, {
      "time": "11:41:59 AM", "date": "08-10-2018"
    });
    let res = await API.getAPIResponse();
    expect(res).toEqual('08-10-2018');
  });

  it('check if button click splits and displays the date', async () => {
    const mockAdapter = new MockAdapter(axios);
    mockAdapter.onGet('https://jsonmock.hackerrank.com/datetime').reply(200, {
      "time": "19:13:23 AM", "date": "10-09-2011"
    });
    const wrapper = mount(<App />);
    const button = wrapper.find(Button).props().onClick();
    let res = await API.getAPIResponse();
    expect(wrapper.text()).toEqual('Date APIDisplay DateDay: 10Month: 9Year: 2011');
  })
});
