import { useState } from "react";
import {Routes, Route} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProviderWrapper } from './ThemeContext';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';

function App() {
  // const [mode, setMode] = useState('light');
  // const defaultTheme = createTheme({ palette: { mode } });

  // const toggleColorMode = () => {
  //   setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  // };

  return (
    // <ThemeProvider theme={defaultTheme}>
    <ThemeProviderWrapper>
      <CssBaseline />
      {/* <NavBar mode={mode} toggleColorMode={toggleColorMode} /> */}
      <NavBar />

      <Box sx={{ bgcolor: 'background.default' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Box>
      </ThemeProviderWrapper>
    // </ThemeProvider>
  );
}

export default App;
