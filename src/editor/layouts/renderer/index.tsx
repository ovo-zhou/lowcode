import React from "react";
import { useDrop } from "react-dnd";
import { useSelector } from "react-redux";
import { componentMap } from "../../components";

interface Component {
  /**
   * 组件id
   */
  id: number;
  /**
   * 组件名
   */
  name: string;
  /**
   * 组件属性
   */
  props: object;
  /**
   * 子组件
   */
  children?: Component[];
}
export default function Material() {
  const components = useSelector((state) => state.components.components);
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "box",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const renderComponent = (components: Component[]) => {
    return components.map((component) => {
      const Com = componentMap.get(component.name);
      if (Com) {
        return (
          <Com {...component.props} key={component.id}>
            {component.children && renderComponent(component.children)}
          </Com>
        );
      }
      return null;
    });
  };
  return (
    <div
      className="material"
      ref={drop}
      style={{
        backgroundColor: canDrop ? (isOver ? "green" : "yellow") : "red",
      }}
    >
      {renderComponent(components)}
    </div>
  );
}
