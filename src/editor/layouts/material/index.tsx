import { componentList } from "../../components";
import DraggableBox from "../../common/draggableBox";
export default function Material() {
  return (
    <div className="material">
      {componentList.map((item) => {
        return (
          <DraggableBox id={item[0]} key={item[0]}>
            {item[0]}
          </DraggableBox>
        );
      })}
    </div>
  );
}
