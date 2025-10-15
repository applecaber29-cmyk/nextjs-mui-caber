import{ TextField, Box, Grid, Typography, Button } from '@mui/material';
export default function TwoColumnLayoute() {
  return (
    <Box
      sx={{
        backgroundImage: 'url(https://www.muralguys.ca/cdn/shop/products/RoseyWaves-02_1800x1800.png?v=1616705733)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        p: { xs: 2, sm: 3, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              px: { xs: 1, sm: 2 },
            }}
          >
            <Box sx={{ maxWidth: 660, width: '100%' }}>
              <Typography
                variant="h3"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  mb: 3,
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Learn to code by watching others
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                  lineHeight: 1.5,
                  fontWeight: 500,
                  fontFamily: 'Arial, sans-serif',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                See how experienced developers solve problems in real-time.
                Watching scripted tutorials is great, but understanding how
                developers think is invaluable.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            alignItems="center"
            sx={{ px: { xs: 1, sm: 2 } }}
          >
            <Button
              fullWidth
             sx={{
           maxWidth: 660,
           width: '100%',
           backgroundColor: 'purple',
           color: 'white',
           textAlign: 'center',
           py: { xs: 1.5, sm: 2 },
           borderRadius: 1,
           fontSize: '1rem',
           fontWeight: 'normal', // Set default to normal
           '&:hover': {
             backgroundColor: '#6a0dad',
           },
         }}
        >
          <Box component="span" sx={{ fontWeight: 'bold' }}>
         Try it free 7 days
         </Box>
         <Box component="span" sx={{ fontWeight: 'normal', ml: 1}}>
         then $20/mo. thereafter
        </Box>
        </Button>

            <Box
              component="form"
              display="flex"
              flexDirection="column"
              gap={2}
              sx={{
                backgroundColor: 'white',
                borderRadius: 2,
                p: { xs: 3, sm: 4 },
                boxShadow: 4,
                maxWidth: 660,
                width: '100%',
              }}
            >
              <TextField label="First Name" variant="outlined" fullWidth />
              <TextField label="Last Name" variant="outlined" fullWidth />
              <TextField label="Email Address" variant="outlined" fullWidth />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#ea0b95ff',
                  color: 'white',
                  fontWeight: 600,
                  py: 1.5,
                  fontSize: '1rem',
                  mt: 1,
                  '&:hover': {
                    backgroundColor: '#be308aff',
                  },
                }}
              >
                CLAIM YOUR FREE TRIAL
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                align="center"
                sx={{ mt: 2 }}
              >
                By clicking the button, you are agreeing to our{' '}
                <span style={{ color: 'red' }}>Terms and Services</span>.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

