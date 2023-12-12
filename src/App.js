import { Box } from '@mui/material';
import Footer from './components/Footer';
import Header from './components/Header';
import CTAintro from './components/CTAintro';

function App() {
  return (
    <Box >
      <Header />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: {
          xs: '375px',
          sm: '375px',
          md: '1440px',
          lg: '1440px',
        },
        mt: '6rem',
      }}>
        <CTAintro />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
