import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';



const itemsFromBackend = [
  { id: 1, content: 'First task' },
  { id: 2, content: 'Second task' },
  { id: 3, content: 'Third task' },
  { id: 4, content: 'Fourth task' },
  { id: 5, content: 'Fifth task' },
];

const columnsFromBackend = {
  1: {
    name: 'Requested',
    items: itemsFromBackend,
  },

};

export default function Home() {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div className={styles.container}>
      <DragDropContext onDropEnd={(result) => console.log(result)}>
        {Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable droppableId={id}>
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver
                        ? 'lightblue'
                        : 'lightgrey',
                        padding: 4,
                        width: 250,
                        minHeight: 500,
                    }}
                  ></div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
}
