import React, { Children } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { updateComponents } from "../contexts/componentsSlice";
export default function DraggableBox(props: {
  component: React.ComponentType;
  children: React.ReactNode;
}) {
  const { component } = props;
  const dispatch = useDispatch();
  const [{ isDragging }, drag] = useDrag({
    type: "box",
    item: { name: component.componentName },
    end(draggedItem, monitor) {
      // console.log("end", draggedItem, monitor.getDropResult());
      const dropResult = monitor.getDropResult();
      if (!dropResult) {
        return;
      }
      // 更新组件store,在组件schema中插入一条新纪录，props为默认值
      dispatch(
        updateComponents({
          id: +new Date(),
          name: component.componentName,
          props: component.componentDefaultProps,
          children: component.children,
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
