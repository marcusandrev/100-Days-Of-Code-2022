import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { DragDropContext, Droppable, Draggable, resetServerContext  } from 'react-beautiful-dnd';
import { renderToString } from 'react-dom/server';

// for this try out turning of ssr for next

// didn't add images folder
const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png',
  },
  {
    id: 'cato',
    name: 'Little Cato',
    thumb: '/images/cato.png',
  },
  {
    id: 'kvn',
    name: 'KVN',
    thumb: '/images/kvn.png',
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
    thumb: '/images/mooncake.png',
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    thumb: '/images/quinn.png',
  },
];

export default function Home() {

  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  resetServerContext();

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }


  return (
    <div className={styles.container}>

      <DragDropContext  onDragEnd={handleOnDragEnd}>
      <header className={styles.appHeader}>
        <h1>Final Space Characters</h1>
        <Droppable droppableId="characters">
        {(provided) => (
              <ul className={styles.characters} {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className={styles.charactersThumb}>
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
        </Droppable>
      </header>
      <p>
        Images from
        <a href='https://final-space.fandom.com/wiki/Final_Space_Wiki'>
          Final Space Wiki
        </a>
      </p>
      </DragDropContext>
    </div>
  );
}
