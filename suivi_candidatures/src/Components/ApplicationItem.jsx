import React from 'react';
import {useState} from 'react';

function ApplicationItem(props) {
    const application = props.application;
    const onDelete = props.onDelete;
    const updateDate = props.updateDate;

    const [isRemoving, setIsRemoving] = useState(false);
    const [isEditingDate, setIsEditingDate] = useState(false); // État pour savoir si on édite la date
    const [newDate, setNewDate] = useState(application.applicationDate); // Nouvelle date à modifier

    //function used to add animation when we delete the application
    const handleDelete = () => {
        setIsRemoving(true);
        setTimeout(() => onDelete(application.id), 300);
    };

    const handleEditDate = () => {
        setIsEditingDate(true); // Afficher le champ de date pour modification
    };

    const handleDateChange = (e) => {
        setNewDate(e.target.value); // Mettre à jour la nouvelle date
    };

    const handleSaveDate = () => {
        updateDate(application.id, newDate); // Sauvegarder la nouvelle date
        setIsEditingDate(false); // Masquer le champ de modification
    };
    return (
        <div className={`applicationItem ${isRemoving ? "removing" : ""}`}>
            <button className="deleteApplication" onClick={handleDelete}>✖</button>
            <h3>{application.structureName}</h3>
            <p><strong>Objet de la candidature :</strong> {application.title}</p>
            <p>
                <strong>Date d'envoi : </strong> 
                {isEditingDate ? (
                    <div className="updateDate">
                        <input
                            type="date"
                            value={newDate}
                            onChange={handleDateChange}  // OnChange pour mettre à jour la nouvelle date
                        />
                        <button onClick={handleSaveDate}>💾</button>
                    </div>
                ) : (
                    <div className="updateDate">
                        {application.applicationDate}
                        <button onClick={handleEditDate}>✏️</button>
                    </div>
                )}
            </p>
            <p><strong>Lieu :</strong> {application.location}</p>
            <a href={application.link} target="_blank" rel="noopener noreferrer">Voir le lien</a>
        </div>
    );
}

export default ApplicationItem;
