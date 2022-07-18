import Unity_Technologies_logo from './Unity_Technologies_logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React, { Component } from 'react';

export default function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>
      <mainContent>
        <Box
        sx={{
          width: '75%',
          height: '300',
          backgroundColor: '#2D2D2D',
          borderRadius: '45px',
        }}>
        <img src={Unity_Technologies_logo} className="App-logo" alt="Unity Logo" />
          <h1>Recipe Book</h1>
          <Box
        sx={{
          position: 'absolute',
          backgroundColor: '#1D1D1D',
          borderRadius: '45px',
        }}></Box>
        <Button>Save</Button>
        </Box>
          <Button variant="contained">Hello World</Button>


      </mainContent>
      
    </div>
    
  );
}


