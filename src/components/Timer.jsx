import React, { memo, useState, useEffect } from 'react';
import { Typography, Stack, Box } from '@mui/material';

function Timer({ discountTimer }) {
    const [time, setTime] = useState({
        hours: parseInt(discountTimer?.hours || 0),
        minutes: parseInt(discountTimer?.minutes || 0),
        seconds: parseInt(discountTimer?.seconds || 0)
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => {
                let newSeconds = prevTime.seconds - 1;
                let newMinutes = prevTime.minutes;
                let newHours = prevTime.hours;

                if (newSeconds < 0) {
                    newSeconds = 59;
                    newMinutes -= 1;
                }

                if (newMinutes < 0) {
                    newMinutes = 59;
                    newHours -= 1;
                }

                if (newHours < 0) {
                    clearInterval(timer);
                    return { hours: 0, minutes: 0, seconds: 0 };
                }

                return {
                    hours: newHours,
                    minutes: newMinutes,
                    seconds: newSeconds
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeBlockStyle = {
        backgroundColor: '#ff5252',
        color: 'white',
        borderRadius: '8px',
        padding: '8px 12px',
        minWidth: '70px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    };

    if (!discountTimer) return null;

    return (
        <Box sx={{ textAlign: 'center', my: 3 }}>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                <Box sx={timeBlockStyle}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        {String(time.hours).padStart(2, '0')}
                    </Typography>
                    <Typography variant="caption">
                        годин
                    </Typography>
                </Box>
                <Box sx={timeBlockStyle}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        {String(time.minutes).padStart(2, '0')}
                    </Typography>
                    <Typography variant="caption">
                        хвилин
                    </Typography>
                </Box>
                <Box sx={timeBlockStyle}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        {String(time.seconds).padStart(2, '0')}
                    </Typography>
                    <Typography variant="caption">
                        секунд
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
}

export default memo(Timer);