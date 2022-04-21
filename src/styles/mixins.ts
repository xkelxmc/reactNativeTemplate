import {ColorValue, StyleProp, ViewStyle} from 'react-native';

type DimensionValue = number | string | undefined;

function dimensions(
  top: DimensionValue,
  right: DimensionValue,
  bottom: DimensionValue,
  left: DimensionValue,
  property: 'margin' | 'padding',
): StyleProp<ViewStyle> {
  let styles: StyleProp<ViewStyle> = {};

  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(
  top: DimensionValue,
  right: DimensionValue,
  bottom: DimensionValue,
  left: DimensionValue,
): StyleProp<ViewStyle> {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(
  top: DimensionValue,
  right: DimensionValue,
  bottom: DimensionValue,
  left: DimensionValue,
): StyleProp<ViewStyle> {
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(
  color: ColorValue,
  offset: {width: number; height: number} = {height: 2, width: 2},
  radius: number = 8,
  opacity: number = 0.2,
): StyleProp<ViewStyle> {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
