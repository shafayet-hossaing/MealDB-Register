import { useEffect, useState } from 'react';

const useDataProvider = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => setProducts(data.meals))
    },[search])
    return {products, setProducts, setSearch}
};

export default useDataProvider;