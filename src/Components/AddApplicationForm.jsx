import React from 'react';
import {useState} from 'react';

//Form component used to add new applications in the board
function AddApplicationForm(props) {
    const addApplication = props.addApplication;

    const [structureName, setStructureName] = useState('');
    const [title, setTitle] = useState('');
    const [applicationDate, setApplicationDate] = useState('');
    const [link, setLink] = useState('');
    const [location, setLocation] = useState('');

    //function to handle informations when the user submits the form
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        //creating the new application object
        const newApplication = {
            structureName,
            title,
            applicationDate: applicationDate || 'Non renseignée', // if the used didn't give a date, we put it to "non renseignée"
            link,
            location,
            status: 'waiting' // default status
        };

        //adding the new application in the list
        addApplication(newApplication);

        // reset the form after adding
        setStructureName('');
        setTitle('');
        setApplicationDate('');
        setLink('');
        setLocation('');
    }

    return (
        <div className="addApplicationBox">
            <h1>Ajouter une candidature</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="structureNameInput">Nom de la structure*</label>
                <input 
                    type="text" 
                    id="structureNameInput"
                    placeholder="Exemple : Google"
                    value={structureName}
                    onChange={(e) => setStructureName(e.target.value)}
                    required
                />
                <label htmlFor="titleInput">Objet de la candidature*</label>
                <input 
                    type="text" 
                    id="titleInput"
                    placeholder="Exemple : Développeur web - Stage"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label htmlFor="dateInput">Date de candidature</label>
                <input 
                    type="date" 
                    id="dateInput"
                    value={applicationDate}
                    onChange={(e) => setApplicationDate(e.target.value)}
                />
                <label htmlFor="linkInput">Lien de l'annonce / contact*</label>
                <input 
                    type="url" 
                    id="linkInput"
                    placeholder="Exemple : https://www.google.fr/"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                />
                <label htmlFor="locationInput">Lieu (Ville / Pays / Distanciel...)*</label>
                <input 
                    type="text" 
                    id="locationInput"
                    placeholder="Exemple : Paris"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
           
            <button type="submit">Ajouter la candidature</button>
            </form>
        </div>
    );
}

export default AddApplicationForm;
