import {StyleProp, ViewStyle} from 'react-native';
import {reduce, toLower} from 'lodash';

const acceptSizes = [4, 8, 12, 16, 20] as const;

const acceptSpacingDirections = [
  'Top',
  'Bottom',
  'Left',
  'Right',
  'Horizontal',
  'Vertical',
] as const;

const acceptSpacingTypes = ['margin', 'padding'] as const;

type SpacingType = `${'p' | 'm'}${
  | 't'
  | 'b'
  | 'l'
  | 'r'
  | 'h'
  | 'v'}${typeof acceptSizes[number]}`;

const generateSpacingStylesRow = (
  type: typeof acceptSpacingTypes[number],
  direction: typeof acceptSpacingDirections[number],
): Record<SpacingType, StyleProp<ViewStyle>> => {
  return reduce<
    typeof acceptSizes[number],
    Record<SpacingType, StyleProp<ViewStyle>>
  >(
    acceptSizes,
    (acc, size) => {
      return {
        ...acc,
        [`${type[0]}${toLower(direction[0])}${size}`]: {
          [`${type}${direction}`]: size,
        },
      };
    },
    <Record<SpacingType, StyleProp<ViewStyle>>>{},
  );
};

const generateSpacingStyles = (): Record<SpacingType, StyleProp<ViewStyle>> => {
  return reduce<
    typeof acceptSpacingTypes[number],
    Record<SpacingType, StyleProp<ViewStyle>>
  >(
    acceptSpacingTypes,
    (acc, type) => {
      return {
        ...acc,
        ...reduce(
          acceptSpacingDirections,
          (acc2, direction) => ({
            ...acc2,
            ...generateSpacingStylesRow(type, direction),
          }),
          {},
        ),
      };
    },
    <Record<SpacingType, StyleProp<ViewStyle>>>{},
  );
};

export const SPACING: Record<SpacingType, StyleProp<ViewStyle>> = {
  ...generateSpacingStyles(),
};
