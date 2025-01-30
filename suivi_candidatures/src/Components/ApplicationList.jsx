import React from 'react';
import { DragDropContext } from "@hello-pangea/dnd";
import StatusColumn from "./StatusColumn.jsx";

function ApplicationList(props) {
    const applications = props.applications;
    const setApplications = props.setApplications;

    // function called when the user deposits an element in a new column
    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        // if the element is out of a droppable zone, we do nothing
        if (!destination) return;
        if (destination.droppableId === source.droppableId) return;

        setApplications(prevApps => {
            return prevApps.map(app =>
                app.id.toString() === draggableId ? { ...app, status: destination.droppableId } : app
            );
        });
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="applicationList">
                <div className="columns">
                    <StatusColumn title="En attente de candidature" applications={applications} status="waiting" />
                    <StatusColumn title="En attente de réponse" applications={applications} status="pending" />
                    <StatusColumn title="Réponse négative" applications={applications} status="rejected" />
                    <StatusColumn title="Réponse positive" applications={applications} status="accepted" />
                </div>
                
            </div>
        </DragDropContext>
    );
}

export default ApplicationList;