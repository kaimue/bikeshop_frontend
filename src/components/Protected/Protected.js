import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        {isAuthenticated ? <Outlet /> : <Navigate to="/home" />}
      </div>
    </nav>
  );
};

export default Protected;
