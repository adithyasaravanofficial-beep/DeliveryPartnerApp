import {useWindowDimensions} from 'react-native';

// Colours sampled from the design image
export const colors = {
  primary: '#FE5943', cream: '#FAF0E7', white: '#FFFFFF', text: '#1B1B1B',
  inactive: '#D6D7D9', softBorder: '#F8CFC6', skip: '#F0533C', spark: '#F0523A',
};

// The Figma frame is 360 x 792. Every size/position below is written in those design units
// and scaled to the real screen with s(), so the layout matches the design on any phone width.
export const DESIGN_W = 360;
export function useDesign() {
  const {width, height} = useWindowDimensions();
  const u = width / DESIGN_W;
  return {u, width, height, s: n => n * u};
}
