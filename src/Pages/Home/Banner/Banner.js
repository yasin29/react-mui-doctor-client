import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'

import Grid from '@mui/material/Grid';
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
    height: 450
}

const verticleCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}

const Banner = () => {
    return (
        <div>
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...verticleCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box>
                            <Typography variant="h3">
                                Your new Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{ my: 3, fontSize: 13, color: 'gray', fontWeight: '300' }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quae modi sapiente facilis, optio blanditiis nihil totam perspiciatis illo eum!
                            </Typography>
                            <Button style={{ backgroundColor: '#53B076' }} variant="contained">Get Appointment</Button>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={6} style={verticleCenter}>
                        <img style={{ width: '400px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;