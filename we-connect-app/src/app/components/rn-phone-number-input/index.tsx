import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import mobileNumberConstant from '@constants/mobileNumberConstant';
import DownArrowIcon from '@icons/DownArrow.icon';
import {globalStyles} from '@styles/global.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import BottomSheetSelect from '@components/bottom-sheet/select';

const RNPhoneNumberInput = () => {
  const country = mobileNumberConstant.BD;
  const openBottomSheet = () => {
    global.showBottomSheet({
      flag: true,
      component: BottomSheetSelect,
      componentProps: {
        options: {
          data: Object.values(mobileNumberConstant),
          title: 'Select Country',
          titleField: 'countryName',
          flatList: true,
          selectedValue: country.countryCode,
        },
      } as any,
    });
  };
  return (
    <View
      style={[
        globalStyles.flexRow,
        {
          borderWidth: 1,
          borderColor: '#323436',
          borderRadius: 16,
          paddingVertical: 8,
          paddingHorizontal: 22,
          flexShrink: 1,
        },
      ]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={openBottomSheet}
        style={[globalStyles.flexRow, {gap: rs(6)}]}>
        <Text style={{fontSize: 29}}>{country.icon}</Text>
        <DownArrowIcon />
      </TouchableOpacity>
      <View style={globalStyles.flexRow}>
        <Text style={{fontSize: 16, color: 'white'}}>
          +{country.callingCode}
        </Text>
        <TextInput
          style={{fontSize: 16, color: 'white', width: '75%'}}
          placeholder="Phone Number"
          numberOfLines={1}
          inputMode="numeric"
        />
      </View>
    </View>
  );
};

export default RNPhoneNumberInput;
