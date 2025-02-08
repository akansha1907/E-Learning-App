import React from 'react';
import BackIconHeader from '../../src/components/backIconHeader/BackIconHeader';
import {render} from '@testing-library/react-native';
describe('BackIconHeader Snapshot testing', () => {
  it('Should render BackIconHeder correctly', () => {
    const tree = render(<BackIconHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
