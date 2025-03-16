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
                    spacing={1}
                    justifyContent="space-around"
                    width="100%"
                    py={1}
                >
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5,
                                minWidth: 0
                            }}
                        >
                            <Typography variant="h6">{feature.icon}</Typography>
                            <Box sx={{ minWidth: 0 }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: 'bold',
                                        lineHeight: 1,
                                        whiteSpace: 'nowrap',
                                        fontSize: '0.8rem'
                                    }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        lineHeight: 1,
                                        whiteSpace: 'nowrap',
                                        fontSize: '0.8rem'
                                    }}
                                >
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