/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    textReverse: '#ECEDEE',
    background: '#fff',
    primaryAccent: '#eeaeee',
    primary: '#C74CC9',
    primarySurface: '#FFDAFF',
    secondary: '#111011',
    secondaryAccent: '#000000',
    tint: tintColorLight,
    gray: '#77879A',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    surface: '#F6F6F6'
  },
  dark: {
    text: '#ECEDEE',
    textReverse: '#11181C',
    background: '#151718',
    tint: tintColorDark,
    gray: '#77879A',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    surface: '#28292f',
    primaryAccent: '#471548',
    primary: '#C74CC9',
    primarySurface: '#370f38',
    secondary: '#f6f1f6',
    secondaryAccent: '#ffffff',
  },
};
