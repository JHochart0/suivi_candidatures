import React from 'react';
import {useState, useEffect} from 'react';
import AddApplicationForm from "../Components/AddApplicationForm.jsx";
import ApplicationList from "../Components/ApplicationList.jsx";

import '../css/Home.css';

// Home page where applications are shown
function Home() {
    const [applications, setApplications] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // variable to block the saving on applications when we load the page

    //function to add a new application in the list
    const addApplication = (newApplication) =>{
        setApplications([...applications, { ...newApplication, id:Date.now() }]);
    };

    //function used to load the applications
    const loadApplications = () => {
        const savedApplications = JSON.parse(localStorage.getItem("applications")) || [];
        setApplications(savedApplications);
        setIsLoading(false);
    };

    //function used to save applications each time it is called
    const saveApplications = () => {
        try {
            localStorage.setItem("applications", JSON.stringify(applications));
        } catch (error) {
            console.error("Erreur lors de la sauvegarde des candidatures:", error);
        }
    };

    // we load the applications at the launch of the page
    useEffect(()=>{
        loadApplications();
    },[]);

    // we save the applications each time the variable "applications" is modified and denying it at the first render of the page
    useEffect(()=>{
        if(!isLoading){
            saveApplications();
        }
        
    }, [applications]);

    

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
