import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

const items1 = [
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

const items2 = [
  {
    id: "item2-0",
    content: "item2 0",
  },
  {
    id: "item2-1",
    content: "item2 1",
  },
  {
    id: "item2-2",
    content: "item2 2",
  },
];

const itemsGroup = [
  {
    id: "group1",
    items: items1,
  },
  {
    id: "group2",
    items: items2,
  },
];

let draggingGroup = items1;

const grid = 8;

const getListGroupStyle = () => ({
  display: "flex",
});

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
  const onDragEndGroup = (result) => {
    // console.log(result);
    if (!result.destination) {
      return;
    }
    reorder(itemsGroup, result.source.index, result.destination.index);
  };

  const getItemList = (id) => {
    // console.log("id: " + id);
    for (const items of itemsGroup) {
      // console.log(items);
      if (id == items.id) {
        return items.items;
      }
    }
    return null;
  };

  const onDragEndItems = (result) => {
    console.log(result);
    if (!result.destination) {
      return;
    }
    const items = getItemList(result.source.droppableId);
    if (items) {
      reorder(items, result.source.index, result.destination.index);
    }
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEndGroup}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListGroupStyle()}
            >
              {itemsGroup.map((items, index) => (
                <Draggable key={items.id} draggableId={items.id} index={index}>
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
                      {/* {item.content} */}

                      <DragDropContext onDragEnd={onDragEndItems}>
                        <Droppable droppableId={items.id}>
                          {(provided, snapshot) => (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              style={getListStyle(snapshot.isDraggingOver)}
                            >
                              {items.items.map((item, index) => (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
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
