import {View, Text} from 'react-native';
import React from 'react';
import {Colors} from '@styles/colors.style.asset';
import {useNavigation, useTheme} from '@react-navigation/native';
import ImagePreview from '@components/image-preview/Index.component';
import {typographies} from '@styles/typographies.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import RippleButton from '@components/button/ripple/CustomRipple.c';
import dayjs from 'dayjs';
import {IChat} from '../interface';
import {screens} from '@routes/routeName.routes';
interface Props {
  item: IChat;
  index: number;
}
const ChatItem: React.FC<Props> = ({item}) => {
  const colors = useTheme().colors as Colors;
  const {name, message, date, image, seen, total_message_unseen} = item;
  const navigation = useNavigation() as any;
  return (
    <RippleButton
      onPress={() => navigation.navigate(screens.chatDetails, {item})}>
      <View
        style={[
          globalStyles.flexRow,
          globalStyles.widthFull,
          {...customPadding(10, 20, 10, 20)},
        ]}>
        <View style={{width: rs(60), height: rs(60), borderRadius: rs(500)}}>
          <ImagePreview source={{uri: image}} borderRadius={500} />
        </View>
        <View
          style={[
            globalStyles.rowBetweenWithoutFlex,
            globalStyles.flexGrow1,
            globalStyles.flexShrink1,
          ]}>
          <View style={globalStyles.flexShrink1}>
            <Text
              numberOfLines={1}
              style={[typographies(colors).heading6, globalStyles.flexShrink1]}>
              {name}
            </Text>
            <Text
              numberOfLines={1}
              style={[
                typographies(colors).bodyMediumMedium,
                {marginTop: rs(4)},
              ]}>
              {message}
            </Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: !seen ? 'flex-end' : 'space-between',
            }}>
            {seen && Number(total_message_unseen) > 0 && (
              <View
                style={{
                  backgroundColor: colors.primary,
                  borderRadius: rs(500),
                  width: rs(25),
                  height: rs(25),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={[
                    typographies(colors).bodySmallMedium,
                    {color: colors.white},
                  ]}>
                  {total_message_unseen}
                </Text>
              </View>
            )}
            <Text
              style={[
                typographies(colors).bodySmallMedium,
                {color: colors.primary},
              ]}>
              {dayjs(date).format('HH:mm')}
            </Text>
          </View>
        </View>
      </View>
    </RippleButton>
  );
};

export default ChatItem;
