import { Space as AntdSpace } from "antd";

export default function Space(props) {
  const { children, ...restProps } = props;
  if (children.length === 0) {
    return <AntdSpace {...restProps}>暂无内容</AntdSpace>;
  }
  return <AntdSpace {...restProps}>{children}</AntdSpace>;
}
// 组件的默认属性
Space.componentDefaultProps = {
  size: "small",
};
// 组件名称
Space.componentName = "Space";
// 组件节点,如果children为[]，表示为容器组件，可以添加子组件，如果为null，表示为叶子组件，不能添加子组件
Space.children = [];
