/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'styled-components';
import { Theme } from './theme.types';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} 
}