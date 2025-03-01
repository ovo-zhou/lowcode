import { componentList } from "../../components";
import DraggableBox from "../../common/draggableBox";
export default function Material() {
  return (
    <div className="material">
      {componentList.map((item) => {
        return (
          <DraggableBox
            name={item[0]}
            key={item[0]}
            componentDefaultProps={item[1].componentDefaultProps}
          >
            {item[0]}
          </DraggableBox>
        );
      })}
    </div>
  );
}
