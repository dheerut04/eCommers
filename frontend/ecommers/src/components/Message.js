import { Alert } from "react-bootstrap";

function Message({ variant, children }) {
  console.log("error: ");
  return <Alert variant={variant}>{children}</Alert>;
}
export default Message;
