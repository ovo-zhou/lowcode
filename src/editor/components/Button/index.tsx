import { Button as AntdButton } from "antd";

export default function Button(props) {
  return <AntdButton {...props}>{props.text}</AntdButton>;
}
