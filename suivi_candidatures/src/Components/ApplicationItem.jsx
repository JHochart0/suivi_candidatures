import React from 'react';
import {useState} from 'react';

function ApplicationItem(props) {
    const application = props.application;
    const onDelete = props.onDelete;

    const [isRemoving, setIsRemoving] = useState(false);
    const handleDelete = () => {
        setIsRemoving(true);
        setTimeout(() => onDelete(application.id), 300);
    };

    return (
        <div className={`applicationItem ${isRemoving ? "removing" : ""}`}>
            <button className="deleteApplication" onClick={handleDelete}>✖</button>
            <h3>{application.structureName}</h3>
            <p><strong>Objet de la candidature :</strong> {application.title}</p>
            <p><strong>Date d'envoi :</strong> {application.applicationDate}</p>
            <p><strong>Lieu :</strong> {application.location}</p>
            <a href={application.link} target="_blank" rel="noopener noreferrer">Voir le lien</a>
        </div>
    );
}

export default ApplicationItem;
