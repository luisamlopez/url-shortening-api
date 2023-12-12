import { Box } from '@mui/material';
import Footer from './components/Footer';
import Header from './components/Header';
import CTAintro from './components/CTAintro';

function App() {
  return (
    <Box >
      <Header />
      <Box
        variant="main"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '90%',
          mx: '6rem',
          my: {
            xs: '1rem',
            sm: '1rem',
            md: '3rem',
            lg: '3rem',
          },
          border: '1px solid red',
        }}>
        <CTAintro />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
