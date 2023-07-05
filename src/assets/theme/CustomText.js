import {Text} from 'react-native';
import Device from 'react-native-device-info';
import {scale} from './responsive';
export const PrimaryText = props => {
  const {text, color, fontWeight, style} = props;
  const isTablet = Device.isTablet();
  return (
    <Text
      style={[
        {
          fontSize: isTablet ? scale(7) : 16,
          color: color === undefined ? 'black' : color,
          fontWeight: fontWeight === undefined ? '500' : fontWeight,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export const SecondaryText = props => {
  const {text, color, fontWeight, style, numberOfLines} = props;
  const isTablet = Device.isTablet();
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          fontSize: isTablet ? scale(5) : 14,
          color: color === undefined ? 'black' : color,
          fontWeight: fontWeight === undefined ? '400' : fontWeight,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export const ErrorText = props => {
  const {text, fontWeight, style} = props;
  return (
    <Text
      style={[
        style,
        {
          fontSize: 14,
          color: 'red',
          fontWeight: fontWeight === undefined ? '400' : fontWeight,
        },
      ]}>
      {text}
    </Text>
  );
};
