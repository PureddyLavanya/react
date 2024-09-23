import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Table } from 'react-bootstrap';
import './DraggableTable.css'; // Import CSS for styling

// Initial column headers
const initialColumns = [
  "S.No",
  "Visit Type",
  "Appointment Type",
  "Department",
  "Doctor Name",
  "Appointment Date",
  "Time",
  "BP",
  "Blood Sugar",
  "Height",
  "Weight",
  "Temperature",
  "Heart Rate",
  "Respiratory Rate",
  "Allergies",
  "Allergy Type",
  "Allergen",
  "Reaction",
  "Edit",
  "View Data"
];

// Function to reorder columns
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const DraggableTable = () => {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedColumns = reorder(
      columns,
      result.source.index,
      result.destination.index
    );

    setColumns(reorderedColumns);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="table-wrapper"
          >
            <Table bordered striped className="text-center">
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <Draggable key={column} draggableId={column} index={index}>
                      {(provided) => (
                        <th
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="table-header"
                          style={{ ...provided.draggableProps.style }}
                        >
                          {column}
                        </th>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Out Patient</td>
                  <td>Emergency</td>
                  <td>General</td>
                  <td>Lakshmi</td>
                  <td>Appointment Date</td>
                  <td>Time</td>
                  <td>120</td>
                  <td>240</td>
                  <td>5'2"</td>
                  <td>60</td>
                  <td>90°C</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Allergies</td>
                  <td>Skin Allergy</td>
                  <td>Cosmetics</td>
                  <td>Reaction</td>
                  <td>Edit</td>
                  <td>View Data</td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableTable;
