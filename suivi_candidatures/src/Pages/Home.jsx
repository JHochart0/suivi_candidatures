import React from 'react';
import {useState} from 'react';
import AddApplicationForm from "../Components/AddApplicationForm.jsx";
import ApplicationList from "../Components/ApplicationList.jsx";

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
            <h2>Candidature</h2>
            <div className="applicationSection">
                <AddApplicationForm addApplication={addApplication} />
                <ApplicationList applications={applications} setApplications={setApplications} />
            </div>
           
        </div>
    )
}

export default Home;
