import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => setProducts(data.meals))
    },[search])

    // Google Authentication
    const googleAuth = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        
    }

    // Currently singed In user
        useEffect(() => {
            const unSubscribed = onAuthStateChanged(auth, user => {
                if(user){
                    setUser(user)
                }else{
                    setUser({})
                }
                setIsLoading(false)
            })
            return () => unSubscribed
        },[])



    // Log Out
    const logOut = () => {
        signOut(auth)
        .then(() => {})
        .finally(() => {
            setIsLoading(false)
        })
    }
    
    

    return {products, setProducts, setSearch, googleAuth, user, setUser, logOut, isLoading, setIsLoading}
};

export default useDataProvider;