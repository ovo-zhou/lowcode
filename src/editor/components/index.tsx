import Space from "./Space";
import Button from "./Button";

const componentList: [string, React.ComponentType][] = [
  [Button.componentName, Button],
  [Space.componentName, Space],
];
const componentMap = new Map(componentList);
export { componentMap, componentList };
