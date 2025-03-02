import {View, Text} from 'react-native';
import React from 'react';
interface props {
  index: number;
}
const CallItem: React.FC<props> = ({index}) => {
  return (
    <View>
      <Text>CallItem {index}</Text>
    </View>
  );
};

export default CallItem;
