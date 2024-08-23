import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MentorBooking from './pages/MentorBooking';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route path="/booking" component={MentorBooking} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
