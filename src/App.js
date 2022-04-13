import React from 'react';
import './App.css';
import Maps from './Maps/Maps';
import Find from './Find/Find';
import Jobs from './Jobs/Jobs';
import Features from './Features/Features';
import Candidates from './Candidates/Candidates';

const App = () => {
    return (
        <div className='app'>
            <Maps />
            <Find />
            <Jobs />
            <Features />
            <Candidates />
        </div>
    )
}

export default App;