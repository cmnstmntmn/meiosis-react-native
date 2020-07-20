/**
 * @format
 */

import React from 'react';
import {Text, Button} from 'react-native';

export const Root = ({state, actions}) => {
  return (
    <>
      <Text>{JSON.stringify(state, null, 2)}</Text>
      <Button onPress={actions.increment} title="Increment" />
    </>
  );
};
