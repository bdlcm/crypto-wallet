// index.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


import {App} from "./components/App";

ReactDOM.render(
     <App/>,
    
    document.getElementById('root'),
)
