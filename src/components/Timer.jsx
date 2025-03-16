import React, { memo } from 'react';
import { Typography, Stack, Box } from '@mui/material';

function Timer({ discountTimer }) {
    if (!discountTimer) return null;

    const timeBlockStyle = {
        backgroundColor: '#ff5252',
        color: 'white',
        borderRadius: '8px',
        padding: '8px 2px',
        minWidth: '70px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
    };

    return (
        <Box sx={{ textAlign: 'center', my: 3 }}>
            <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
            >
                <Box sx={timeBlockStyle}>
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: -1 }}>
                        {discountTimer.hours}
                    </Typography>
                    <Typography variant="caption" sx={{ textAlign: 'center' }}>
                        годин
                    </Typography>
                </Box>
                <Box sx={timeBlockStyle}>
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: -1 }}>
                        {discountTimer.minutes}
                    </Typography>
                    <Typography variant="caption" sx={{ textAlign: 'center' }}>
                        хвилин
                    </Typography>
                </Box>
                <Box sx={timeBlockStyle}>
                    <Typography variant="h4" sx={{ textAlign: 'center', mb: -1 }}>
                        {discountTimer.seconds}
                    </Typography>
                    <Typography variant="caption" sx={{ textAlign: 'center' }}>
                        секунд
                    </Typography>
                </Box>
            </Stack >
        </Box >
    );
}

export default memo(Timer);