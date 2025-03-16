import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Box } from '@mui/material';

function Header() {
    const features = [
        { icon: '🆕', title: 'Новинка', subtitle: '2025 року' },
        { icon: '✅', title: 'Оплата', subtitle: 'після перевірки' },
        { icon: '🚚', title: 'Швидка', subtitle: 'доставка' }
    ];

    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 1
            }}
        >
            <Toolbar>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-around"
                    width="100%"
                    py={1}
                >
                    {features.map((feature, index) => (
                        <Box key={index} display="flex" alignItems="center" gap={1}>
                            <Typography variant="h6">{feature.icon}</Typography>
                            <Box>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" sx={{ lineHeight: 1.2 }}>
                                    {feature.subtitle}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Header;