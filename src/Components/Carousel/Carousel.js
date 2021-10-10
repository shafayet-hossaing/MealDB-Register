import { Button, Typography } from '@mui/material';
import React from 'react';
import img from './food.png';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner pt-3">
                    <div class="carousel-item active">
                        <div className="row d-flex justify-content-center align-items-center p-5">
                            <div className="col-md-6">
                                <Typography className="mb-4 text-white" variant="h4" sx={{fontWeight: "bold",}}>
                                    Order Your Foods With Us
                                </Typography>
                                <Typography className="mb-4 text-white">
                                    We deliver the best foods in you home, So, What are you waiting for? <br />
                                    Let's order and enjoy the foods
                                </Typography>
                                <Button variant="contained">Order Your Foods</Button>
                            </div>
                            <div className="col-md-6">
                                <img src={img} class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;