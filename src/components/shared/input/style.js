import {StyleSheet} from 'react-native';
import {
  fontValue,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../config/globals/styles';

export const styles = StyleSheet.create({
  container: parseColor => {
    return {
      width: '80%',
      alignSelf: 'center',
      borderRadius: 25,
      borderColor: parseColor(),
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      overflow: 'hidden',
      paddingHorizontal: widthPercentageToDP(5),
      height: heightPercentageToDP(6),
    };
  },
  seperator: parseColor => {
    return {
      height: '40%',
      width: 1,
      backgroundColor: parseColor(),
      marginEnd: '2%',
    };
  },
  iconStyle: (withIcon: boolean) => {
    return {
      fontSize: fontValue(17),
      width: '12%',
      paddingStart: withIcon ? 0 : '3%',
    };
  },
  input: (withIcon: boolean) => {
    return {
      color: 'black',
      fontSize: fontValue(14),
      width: withIcon ? '85%' : '100%',
      paddingHorizontal: withIcon
        ? widthPercentageToDP(1)
        : widthPercentageToDP(5),
    };
  },
});
