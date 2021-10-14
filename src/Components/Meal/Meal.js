import React from 'react';
import { useParams } from 'react-router';

const Meal = () => {
    const {mealId} = useParams()
    return (
        <div>
            <h3 className="text-white text-center mt-5">This Meal's Id Is {mealId}</h3>
        </div>
    );
};

export default Meal;