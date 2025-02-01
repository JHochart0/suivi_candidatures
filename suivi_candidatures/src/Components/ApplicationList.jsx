import React from 'react';
import { DragDropContext } from "@hello-pangea/dnd";
import StatusColumn from "./StatusColumn.jsx";

function ApplicationList(props) {
    const applications = props.applications;
    const setApplications = props.setApplications;

    //function used to update the date of an application
    const updateDate = (id, newDate) =>{
        setApplications((previousApps) =>
            previousApps.map((application) =>
                application.id === id ? {...application, applicationDate: newDate } : application
            )
        );
    };

    //function used to delete an application when called
    const deleteApplication = (id) =>{
        const updatedApplications = applications.filter(application => application.id !==id);
        setApplications(updatedApplications);
    };

    // function called when the user deposits an element in a new column
    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        // if the element is out of a droppable zone, we do nothing
        if (!destination) return;
        if (destination.droppableId === source.droppableId) return;

        setApplications(previousApplications => {
            return previousApplications.map(application =>
                application.id.toString() === draggableId ? { ...application, status: destination.droppableId } : application
            );
        });
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="applicationList">
                <div className="columns">
                    <StatusColumn 
                        title="En attente de candidature" 
                        applications={applications} 
                        status="waiting" 
                        onDelete={deleteApplication} 
                        updateDate={updateDate}
                    />
                    <StatusColumn 
                        title="En attente de réponse" 
                        applications={applications} 
                        status="pending" 
                        onDelete={deleteApplication} 
                        updateDate={updateDate}
                    />
                    <StatusColumn 
                        title="Réponse négative" 
                        applications={applications}
                        status="rejected" 
                        onDelete={deleteApplication} 
                        updateDate={updateDate}
                    />
                    <StatusColumn 
                        title="Réponse positive" 
                        applications={applications} 
                        status="accepted" 
                        onDelete={deleteApplication} 
                        updateDate={updateDate}
                    />
                </div>
                
            </div>
        </DragDropContext>
    );
}

export default ApplicationList;