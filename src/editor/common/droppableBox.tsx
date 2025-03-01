import { useDrop } from "react-dnd";
export default function DroppableBox() {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "box",
    drop: (item, monitor) => {
      console.log(item, monitor);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  return (
    <div
      ref={drop}
      style={{
        backgroundColor: canDrop ? (isOver ? "green" : "yellow") : "red",
      }}
    ></div>
  );
}
