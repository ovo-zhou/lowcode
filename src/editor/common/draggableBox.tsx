import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { updateComponents } from "../contexts/componentsSlice";
export default function DraggableBox(props: {
  name: string;
  componentDefaultProps: object;
  children: React.ReactNode;
}) {
  const { name, componentDefaultProps } = props;
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag({
    type: "box",
    item: { name },
    end(draggedItem, monitor) {
      // console.log("end", draggedItem, monitor.getDropResult());
      const dropResult = monitor.getDropResult();
      if (!dropResult) {
        return;
      }
      // 更新组件store
      console.log(name, componentDefaultProps);
      dispatch(
        updateComponents({
          id: +new Date(),
          name,
          props: componentDefaultProps,
        })
      );
    },
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
