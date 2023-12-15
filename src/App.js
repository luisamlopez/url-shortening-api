import { Box } from '@mui/material';
import Footer from './components/Footer';
import Header from './components/Header';
import CTAintro from './components/CTAintro';
import LinkForm from './components/LinkForm';

function App() {
  return (
    <Box >
      <Header />
      <Box
        variant="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '100%',
          mx: {
            xs: '0.5rem',
            sm: '0.5rem',
            lg: '6rem',
          },
          my: {
            xs: '0.5rem',
            sm: '0.5rem',
            md: '2rem',
            lg: '2rem',
          },
          border: '1px solid red',
        }}>
        <CTAintro />
        <LinkForm />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
