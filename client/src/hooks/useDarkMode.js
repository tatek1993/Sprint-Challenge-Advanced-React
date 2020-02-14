import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {

    console.log("this is uselocalstorage", useLocalStorage);
    const [darkMode, setDarkMode] = useLocalStorage(initialValue);
    
    useEffect(() => {

        if(darkMode === true){
            document.querySelector('body').classList.add('dark-mode')
            
        } else {
            return document.querySelector('body').classList.remove('dark-mode')
        }

    }, [darkMode])

    return [darkMode, setDarkMode]
}

export default useDarkMode;