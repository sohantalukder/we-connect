import {FlatList, Text} from 'react-native';
import React from 'react';
import SplashContainer from '@layouts/SplashContainer.layout';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import Button from '../../components/button/button/Button.component';
import {customPadding} from '@styles/global.style.asset';

const SplashIndex: React.FC = () => {
  const colors = useTheme().colors as Colors;
  return (
    <SplashContainer containerStyle={{...customPadding(0, 20, 0, 20)}}>
      <Text style={typographies(colors).bodyLargeBold}>SplashIndex</Text>
      <FlatList
        data={new Array(20).fill('')}
        contentContainerStyle={{gap: 8}}
        renderItem={({index}) => (
          <Button onPress={() => console.log(index)} text="Hello" />
        )}
      />
    </SplashContainer>
  );
};

export default SplashIndex;
