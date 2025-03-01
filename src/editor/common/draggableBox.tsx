import React from "react";
import { useDrag } from "react-dnd";
export default function DraggableBox(props: {
  id: string;
  children: React.ReactNode;
}) {
  const id = props.id;
  const [{ isDragging }, drag] = useDrag({
    type: "box",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0 : 1,
        backgroundColor: "#fff",
        padding: "10px",
        border: "1px solid #ddd",
      }}
    >
      {props.children}
    </div>
  );
}
