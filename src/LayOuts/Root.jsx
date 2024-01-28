import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="dark:bg-yellow-100">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
