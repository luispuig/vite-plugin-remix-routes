import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div>
      /index.jsx
      <Link to="demos/about">go to /demos/about</Link>
      <Link to="demos/params">go to /demos/params</Link>
    </div>
  );
}
