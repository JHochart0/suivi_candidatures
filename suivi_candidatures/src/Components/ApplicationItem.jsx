import React from 'react';
import {useState} from 'react';

function ApplicationItem(props) {
    const application = props.application;
    const onDelete = props.onDelete;
    const updateDate = props.updateDate;

    const [isRemoving, setIsRemoving] = useState(false);
    const [isEditingDate, setIsEditingDate] = useState(false); 
    const [newDate, setNewDate] = useState(application.applicationDate);

    //function used to add animation when we delete the application
    const handleDelete = () => {
        setIsRemoving(true);
        setTimeout(() => onDelete(application.id), 300);
    };

    // function used to show the new text input when we want to edit the date
    const handleEditDate = () => {
        setIsEditingDate(true);
    };

    // function called when we edit the value of the date input
    const handleDateChange = (e) => {
        setNewDate(e.target.value);
    };

    // function used to save the new date when the user edited it
    const handleSaveDate = () => {
        updateDate(application.id, newDate);
        setIsEditingDate(false);
    };

    return (
        <div className={`applicationItem ${isRemoving ? "removing" : ""}`}>
            <button className="deleteApplication" onClick={handleDelete}>✖</button>
            <h3>{application.structureName}</h3>
            <p><strong>Objet de la candidature :</strong> {application.title}</p>
            <div>
                <strong>Date d'envoi : </strong> 
                {isEditingDate ? (
                    <div className="updateDate">
                        <input
                            type="date"
                            value={newDate}
                            onChange={handleDateChange}
                        />
                        <button onClick={handleSaveDate}>💾</button>
                    </div>
                ) : (
                    <div className="updateDate">
                        {application.applicationDate}
                        <button onClick={handleEditDate}>✏️</button>
                    </div>
                )}
            </div>
            <p><strong>Lieu :</strong> {application.location}</p>
            <a href={application.link} target="_blank" rel="noopener noreferrer">Voir le lien</a>
        </div>
    );
}

export default ApplicationItem;
