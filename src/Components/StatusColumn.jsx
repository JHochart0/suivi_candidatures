import React from 'react';
import { Draggable, Droppable } from "@hello-pangea/dnd";
import ApplicationItem from "./ApplicationItem.jsx";

function StatusColumn(props) {
    const title = props.title;
    const applications = props.applications;
    const status = props.status;
    const onDelete = props.onDelete;
    const updateDate = props.updateDate;

    // Filtering application by their status (waiting, pending, rejected, accepted)
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
                                    <div className="applicationItemBox" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                        <ApplicationItem application={application} onDelete={onDelete} updateDate={updateDate} />
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