import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../src/index';

test('Alert component renders without errors', () => {
  shallow(<Alert />);
  shallow(<Alert showIcon />);
});
