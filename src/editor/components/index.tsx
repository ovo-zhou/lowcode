import { Space } from "antd";
import Button from "./Button";

const componentList: [string, React.ComponentType][] = [
  ["Button", Button],
  ["Space", Space],
];
const componentMap = new Map(componentList);
export { componentMap, componentList };
