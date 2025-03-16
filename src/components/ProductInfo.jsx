import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Skeleton, Stack, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { fetchProductData } from '../services/api';
import Timer from './Timer';

const placeholderStyle = {
    width: '100%',
    height: '300px',
    background: 'linear-gradient(to right, #f0f0f0, #e0e0e0)',
};

function ProductInfo() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await fetchProductData();
                setProduct(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    const renderSkeleton = () => (
        <Card>
            <CardContent>
                <Skeleton variant="text" width="60%" height={30} />
                <Skeleton variant="rectangular" width="100%" height={300} sx={{ marginTop: 2 }} />
                <Skeleton variant="text" width="80%" height={20} sx={{ marginTop: 2 }} />
                <Skeleton variant="text" width="40%" height={20} />
            </CardContent>
        </Card>
    );

    if (loading) return renderSkeleton();
    if (error) return <Typography color="error">Помилка: {error.message}</Typography>;
    if (!product) return <Typography>Немає даних про товар</Typography>;

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card
                elevation={3}
                sx={{
                    maxWidth: '450px',
                    width: '100%',
                    borderRadius: 0
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'rgba(255, 192, 203, 0.8)',
                        padding: 2,
                        textAlign: 'center',
                        borderRadius: 0,
                        mb: 0
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        gutterBottom={false}
                        sx={{ color: 'white', fontWeight: 'bold' }}
                    >
                        {product.name}
                    </Typography>
                </Box>

                {product.image && !imageError ? (
                    <CardMedia
                        component="img"
                        sx={{
                            width: '100%',
                            maxHeight: '300px',
                            objectFit: 'contain',
                            mt: 0
                        }}
                        image={product.image}
                        alt={product.name}
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <Box sx={{
                        ...placeholderStyle,
                        mt: 0
                    }} />
                )}

                <CardContent sx={{ pt: 2 }}>
                    <Stack spacing={2}>
                        {Array.isArray(product.description) && product.description.map((item, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                <CheckIcon
                                    sx={{
                                        color: 'green',
                                        mr: 1,
                                        fontSize: '1.2rem'
                                    }}
                                />
                                <Typography variant="body1">{item}</Typography>
                            </Box>
                        ))}
                    </Stack>

                    <Timer discountTimer={product.discountTimer} />

                    {product.prices && (
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <Stack
                                spacing={6}
                                direction="row"
                                justifyContent="center"
                                alignItems="flex-start"
                            >
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    height: '100%'
                                }}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            textTransform: 'uppercase',
                                            fontSize: '0.7rem',
                                            letterSpacing: '0.5px',
                                            mb: 0,
                                            height: '20px',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        ЗВИЧАЙНА ЦІНА:
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textDecoration: 'line-through',
                                            fontSize: '1.5rem',
                                            lineHeight: 1.1,
                                            height: '40px',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {product.prices.regular}
                                    </Typography>
                                </Box>

                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    height: '100%'
                                }}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            textTransform: 'uppercase',
                                            fontSize: '0.7rem',
                                            letterSpacing: '0.5px',
                                            mb: 0,
                                            height: '20px',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        ЦІНА ЗА АКЦІЄЮ:
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        color="error"
                                        sx={{
                                            fontSize: '1.75rem',
                                            fontWeight: 'bold',
                                            lineHeight: 1.1,
                                            height: '40px',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        {product.prices.discounted}
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    )}

                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            marginTop: 2,
                            backgroundColor: '#FFD700',
                            '&:hover': {
                                backgroundColor: '#E6C200',
                            },
                            color: 'white',
                            borderRadius: 2,
                            width: '90%',
                            maxWidth: '350px',
                            mx: 'auto',
                            display: 'block',
                            padding: '12px',
                            fontSize: '1.2rem'
                        }}
                    >
                        Замовити зараз
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ProductInfo;
