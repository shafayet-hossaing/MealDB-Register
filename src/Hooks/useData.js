import { useContext } from "react";
import { newContext } from '../Context/DataContext';

const useData = () => {
    return useContext(newContext);
}
export default useData