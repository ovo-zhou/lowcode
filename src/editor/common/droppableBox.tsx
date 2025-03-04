import { useDrop } from "react-dnd";
export default function DroppableBox(props) {
  const { id } = props;
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "box",
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }

      // 这里把当前组件的id返回出去，在拖拽结束事件里可以拿到这个id。
      return {
        id,
      };
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
        display: "inline-block",
      }}
    >
      {props.children}
    </div>
  );
}
