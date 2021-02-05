import { ITheme } from "../src/interface/Theme";

const theme:ITheme = {
  font: `'Roboto',sans-serif`,
  fontSizes:{
    small: 'font-size: 20px; line-height: 30px',
    regular: 'font-size: 24px; line-height: 32px',
    large: 'font-size: 30px; line-height: 40px',
    larger: 'font-size: 36px; line-height: 48px',
    xlarge: 'font-size: 48px; line-height: 56px',
  },
  colors:{
    primary:"#16202a",
    primaryVariant:"#192734",
    secondary:"#e0245e",
    secondaryVariant:"#6c63fe",
    textPrimary:"#ffffff"
  },
  screen:{
    xs:'575px',
    sm:'767px',
    md:'991px',
    lg:'1199px'
  }
}
export default theme;