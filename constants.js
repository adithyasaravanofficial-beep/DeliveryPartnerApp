import {StatusBar} from 'react-native';

// Height of the phone's top status bar (battery, time, wifi...).
// We push our content down by this much so it does not hide under it.
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
