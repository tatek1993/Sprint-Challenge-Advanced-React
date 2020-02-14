import { useEffect } from 'react';
import { useLocalStorage } from 'react';

export const useDarkMode = (initialValue) => {
    const [darkMode, useDarkMode] = useLocalStorage(initialValue);

    useEffect(() => {

        if(darkMode === true){
            document.querySelector('body').classList.add('dark-mode')
        } else {
            return document.querySelector('body').classList.remove('dark-mode')
        }

    }, [darkMode])

    return [darkMode, setDarkMode]
}