import './App.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import React, { useState } from 'react';

function App() {
  const [items] = useState([
    { id: 0, text: 'item0' },
    { id: 1, text: 'item1' },
    { id: 2, text: 'item2' },
  ]);

  const onDragEnd = (result) => {
    const remove = items.splice(result.source.index, 1);
    console.log(remove);
    items.splice(result.destination.index, 0, remove[0]);
  };

  return (
    <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {/* indexはitemsの配列の番号 */}
              {items.map((item, index) => (
                <Draggable draggableId={item.text} index={index} key={item.id}>
                  {(provided) => (
                    <div
                      className="item0"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.text}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
