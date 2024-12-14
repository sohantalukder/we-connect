import React from 'react';
import {ActivityIndicator, Text, View, ViewStyle} from 'react-native';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {globalStyles} from '../../assets/styles/global.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';

const EmptyContent: React.FC<{
  text?: string;
  style?: ViewStyle;
  forLoading?: boolean;
  loadingColor?: string;
}> = ({
  text = '',
  style = {},
  forLoading = false,
  loadingColor = customTheme.colors.orange,
}) => {
  return (
    <View style={[globalStyles.centerView, style]}>
      {forLoading ? (
        <ActivityIndicator size={'large'} color={loadingColor} />
      ) : (
        <Text style={typographies.labelSmall}>{text}</Text>
      )}
    </View>
  );
};

export default EmptyContent;
