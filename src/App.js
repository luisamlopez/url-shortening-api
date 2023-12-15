import { Box } from '@mui/material';
import Footer from './components/Footer';
import Header from './components/Header';
import CTAintro from './components/CTAintro';
import LinkForm from './components/LinkForm';
import AdvancedStatistics from './components/AdvancedStatistics';
import Boost from './components/Boost';

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
          mt: {
            xs: '0.5rem',
            sm: '0.5rem',
          },
        }}>
        <CTAintro />
        <LinkForm />
        <AdvancedStatistics />
      </Box>
      <Boost />
      <Footer />
    </Box>
  );
}

export default App;
