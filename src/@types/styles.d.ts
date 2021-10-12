import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: {
        green: string;
        orange: string;
        red: string;
        blue: string;
        gray: string;
        white: string;
      };

      fontColor: {
        green: string;
        orange: string;
        red: string;
        blue: string;
        white: string;
      };
    };
  }
}
