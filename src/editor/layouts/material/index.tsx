import { componentList } from "../../components";
import DraggableBox from "../../common/draggableBox";
export default function Material() {
  return (
    <div className="material">
      {componentList.map((item) => {
        const componentName = item[0];
        const component = item[1];
        return (
          <DraggableBox key={item[0]} component={component}>
            {componentName}
          </DraggableBox>
        );
      })}
    </div>
  );
}
