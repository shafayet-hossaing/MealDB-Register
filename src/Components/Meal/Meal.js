import React from 'react';
import { useParams } from 'react-router';

const Meal = () => {
    const {mealId} = useParams()
    return (
        <div>
            <h3 className="text-white text-center mb-4 mt-5">Your Order Is Completed</h3>
            <h3 className="text-white text-center mt-5">Your Order Id Is {mealId}</h3>
        </div>
    );
};

export default Meal;