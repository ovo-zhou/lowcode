import { Button as AntdButton } from "antd";

export default function Button(props) {
  return <AntdButton {...props}>{props.text}</AntdButton>;
}
// 组件的默认属性
Button.componentDefaultProps = {
  text: "按钮",
  type: "primary",
};
// 组件名称
Button.componentName = "Button";
// 组件节点,如果children为[]，表示为容器组件，可以添加子组件，如果为null，表示为叶子组件，不能添加子组件
Button.children = null;
