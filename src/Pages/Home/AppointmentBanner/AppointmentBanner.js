import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(35, 46, 80, 0.8)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: -110 }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#53B076' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography sx={{ my: 5 }} variant="h6" style={{ color: 'white', fontSize: '14', fontWeight: '300' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius totam voluptatem dolorem nulla minima laudantium ipsa odit reprehenderit asperiores necessitatibus!
                        </Typography>
                        <Button sx={{ mb: 5 }} style={{ backgroundColor: '#53B076' }} variant="contained" >Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default AppointmentBanner;