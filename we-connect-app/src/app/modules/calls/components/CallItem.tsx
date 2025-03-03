import {View, Text} from 'react-native';
import React from 'react';
import {ICallEntry} from '../interface';
import ImagePreview from '@components/image-preview/Index.component';
import rs from '@styles/responsiveSize.style.asset';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import dayjs from 'dayjs';
import RippleButton from '@components/button/ripple/CustomRipple.c';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';
import {typographies} from '@styles/typographies.style.asset';
import IconButton from '@components/button/icon-button/IconButton.component';
import VideoIcon from '@icons/Video.icon';
import CallBoldIcon from '@icons/CallBold.icon';
import OutgoingBoldCallIcon from '@icons/OutgoingBoldCall.icon';
import IncomingBoldCallIcon from '@icons/IncomingBoldCall.icon';
import MissedBoldCallIcon from '@icons/MissedBoldCall.icon';
interface props {
  index: number;
  item: ICallEntry;
}
const CallItem: React.FC<props> = ({item}) => {
  const {callType, date, id, image, name, totalMissed} = item;
  const colors = useTheme().colors as Colors;
  const icon = {
    outgoing: {
      icon: (
        <OutgoingBoldCallIcon height={18} width={18} fill={colors.success1} />
      ),
      label: 'Outgoing',
    },
    incoming: {
      icon: (
        <IncomingBoldCallIcon height={18} width={18} fill={colors.primary} />
      ),
      label: 'Incoming',
    },
    missed: {
      icon: <MissedBoldCallIcon height={16} width={16} fill={colors.error1} />,
      label: 'Missed',
    },
  };

  return (
    <RippleButton onPress={() => console.log(id)}>
      <View
        style={[
          globalStyles.rowBetween,
          globalStyles.widthFull,
          {...customPadding(10, 20, 10, 20)},
        ]}>
        <View style={[globalStyles.flexRow, globalStyles.flexShrink1]}>
          <View style={{width: rs(60), height: rs(60), borderRadius: rs(500)}}>
            <ImagePreview source={{uri: image}} borderRadius={500} />
          </View>
          <View style={[globalStyles.flexShrink1, {gap: rs(4.1)}]}>
            <Text style={typographies(colors).heading6}>
              {name} {totalMissed > 0 && ` (${totalMissed})`}
            </Text>
            <View style={[globalStyles.flexRow, {gap: rs(5)}]}>
              {icon[callType].icon}
              <Text
                numberOfLines={1}
                style={typographies(colors).bodyMediumMedium}>
                {dayjs(date).format('MMM DD')}, {dayjs(date).format('hh:mm A')}
              </Text>
            </View>
          </View>
        </View>
        <View style={[globalStyles.flexRow, {gap: rs(0)}]}>
          <IconButton icon={<CallBoldIcon fill={colors.primary} />} />
          <IconButton
            icon={<VideoIcon fill={colors.primary} height={24} width={24} />}
          />
        </View>
      </View>
    </RippleButton>
  );
};

export default CallItem;
