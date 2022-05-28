import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

const items = [
  {
    id: "item-0",
    content: "item 0",
  },
  {
    id: "item-1",
    content: "item 1",
  },
  {
    id: "item-2",
    content: "item 2",
  },
  {
    id: "item-3",
    content: "item 3",
  },
  {
    id: "item-4",
    content: "item 4",
  },
];

const grid = 8;

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  width: 250,
  padding: grid,
});

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid} 0`,
  background: isDragging ? "lightgreen" : "grey",

  ...draggableStyle,
});

const reorder = (list, startIndex, endIndex) => {
  const removed = list.splice(startIndex, 1);
  // console.log(removed);
  list.splice(endIndex, 0, removed[0]);
};

function App() {
  const onDragEnd = (result) => {
    // console.log(result);
    if (!result.destination) {
      return;
    }
    reorder(items, result.source.index, result.destination.index);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {/* snapshot はスタイルを当てるためのもの */}
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {/* 移動中のところもスタイルを適応する */}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
