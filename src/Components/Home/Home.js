import { Container, Grid } from '@mui/material';
import React from 'react';
import useData from '../../Hooks/useData';
import Carousel from '../Carousel/Carousel';
import Meals from '../Meals/Meals';

const Home = () => {
    const {products} = useData()
    return (
            <div className="container"> 
                <Carousel></Carousel>
                <Container maxWidth="lg">   
                    <Grid align="left" container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 5 }} direction="row">
                        {
                            products?.map((product) => <Meals product={product} />)
                        }
                    </Grid>
                </Container>
            </div>
    );
};

export default Home;