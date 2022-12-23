import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    Primary: '#FFA07A',
    Secondary: '#87CEEB',
    Grey: '#D3D3D3',
    White: '#ffffff',
    Black: '#000814',
    Bg: '#002233',
  },
};

type Props = {
  children?: React.ReactNode;
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
