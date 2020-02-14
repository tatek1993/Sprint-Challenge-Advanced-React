import { useState } from 'react';

export const useLocalStorage = () => {
    const [ storedValue, setStoredValue ] = useState((key, initialValue) => {
        const checkedValue = window.localStorage.getItem(key);
        return checkedValue ? JSON.parse(checkedValue) : initialValue; 
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, Json.stringify(value));
    }
    return[ storedValue, setValue ];
}