import { configureStore } from '@reduxjs/toolkit';
import reducer from './bugs'


/* With toolkit we just import confiureStore and thats it :D */
export default function configureAppStore() {
    return configureStore({reducer});
    
} ;