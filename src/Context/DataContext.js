import React, { createContext } from 'react';
import useDataProvider from '../Hooks/useDataProvider';
export const newContext = createContext()

const DataContext = ({children}) => {
    const getValue = useDataProvider()
    return (
        <newContext.Provider value={getValue}>
            {children}            
        </newContext.Provider>
    );
};

export default DataContext;