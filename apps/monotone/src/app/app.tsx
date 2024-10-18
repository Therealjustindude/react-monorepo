import { ThemeProvider } from '@react-monorepo/theme-provider';
import styled from 'styled-components';

export function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        Hello World!
      </AppContainer>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  // Your style here
`;

export default App;
