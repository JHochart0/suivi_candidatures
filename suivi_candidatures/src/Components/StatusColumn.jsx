import React from 'react';
import { Draggable, Droppable } from "@hello-pangea/dnd";
import ApplicationItem from "./ApplicationItem.jsx";

function StatusColumn(props) {
    const { title, applications, status } = props;

    // Filtrage des candidatures selon leur statut (waiting, pending, rejected, accepted)
    const filteredApplications = applications.filter(application => application.status === status);

    return (
        <div id={status} className="statusColumn">
            <h3>{title}</h3>
            <Droppable droppableId={status}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="columnDroppable">
                        {filteredApplications.map((application, index) => (
                            <Draggable key={application.id} draggableId={application.id.toString()} index={index}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="applicationItemBox">
                                        <ApplicationItem application={application} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

export default StatusColumn;