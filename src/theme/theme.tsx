import React, {useEffect} from 'react';
import {View, ViewProps} from 'react-native';
import {vars, useColorScheme} from 'nativewind';

export const themes = {
  light: vars({
    '--color-primary': '#F19254',
    '--color-secondary': '#607196',
    '--color-danger': '#F44336',
    '--color-container-dark': '#28292B',
    '--color-on-container-dark': '#F6F8FA',
    '--color-surface': '#F6F6F6',
    '--color-on-surface': '#98989A',
    '--color-surface-container': '#EAEAEA',
    '--color-on-surface-container': '#7A7A7A',
    '--color-black': '#2A2C2D',
  }),
  dark: vars({
    '--color-primary': '#F19254',
    '--color-secondary': '#607196',
    '--color-danger': '#F44336',
    '--color-container-dark': '#28292B',
    '--color-on-container-dark': '#F6F8FA',
    '--color-surface': '#1C1C1E',
    '--color-on-surface': '#E5E5EA',
    '--color-surface-container': '#2C2C2E',
    '--color-on-surface-container': '#FFFFFF',
    '--color-black': '#FFFFFF',
  }),
};

export type ModeType = 'light' | 'dark' | 'system';

const Themes = ({
  mode = 'light',
  ...props
}: {
  mode?: ModeType;
  children?: React.ReactNode;
  style?: ViewProps['style'];
}) => {
  const {colorScheme, setColorScheme} = useColorScheme();

  useEffect(() => {
    setColorScheme(mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);
  // console.log('Current color scheme:', colorScheme);
  // console.log('Current theme: ', props.name);
  return (
    <View
      style={[
        themes[colorScheme!],
        {flex: 1, height: '100%', width: '100%'},
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

export default Themes;
