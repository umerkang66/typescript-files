import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

import { Dashboard } from './pages/dashboard/dashboard';
import { customTheme } from './theme/customTheme';

const App: React.FC = (): React.ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
