import React from 'react';
import {useState} from 'react';
import AddApplicationForm from "../Components/AddApplicationForm.jsx";

import '../css/Home.css';

// Home page where applications are shown
function Home() {
    const [applications, setApplications] = useState([]);

    //function to add a new application in the list
    const addApplication = (newApplication) =>{
        setApplications([...applications, { ...newApplication, id:Date.now() }]);
    }

    return (
        <div className="home">
            <AddApplicationForm addApplication={addApplication} />
        </div>
    )
}

export default Home;
