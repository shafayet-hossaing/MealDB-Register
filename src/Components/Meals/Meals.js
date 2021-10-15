import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Meals = (props) => {
    const {strMeal, strMealThumb, strInstructions, idMeal} = props.product

    return (
            <Grid sx={{marginTop: 5}} item md={4} xs={12} sm={6}>
                <Card className="text-white shadow" style={{backgroundColor: "#043266", padding: "8px solid white", borderRadius: "10px"}}>
                    <CardMedia
                        component="img"
                        height="240"
                        image={strMealThumb}
                        alt={strMeal}
                    />
                    <CardContent>
                        <Typography variant="h6" gutterBottom component="div">
                            {strMeal}
                        </Typography>
                        <Typography className="text-white" sx={{fontWeight: "medium", lineHeight: 1.3}} variant="h6" color="text.secondary">
                            {strInstructions.slice(0, 118)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                            <Button variant="outlined"><Link style={{textDecoration: "none", textTransform: "capitalize"}} to={`meal/${idMeal}`}>Order Now</Link></Button>
                    </CardActions>
                </Card>
            </Grid>
    );
};

export default Meals;