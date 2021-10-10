import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';

initializeAuthentication()
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()

const useDataProvider = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => setProducts(data.meals))
    },[search])

    // Google Authentication
    const googleAuth = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user
            console.log(user);
            setUser(user)
        }).catch(error => {
            setError(error.message)
        })
    }

    return {products, setProducts, setSearch, googleAuth, user}
};

export default useDataProvider;