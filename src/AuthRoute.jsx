import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const authed = localStorage.getItem("user_id"); // isauth() returns true or false based on localStorage
  return authed ? children : <Navigate to="/join" />;
};

export default AuthRoute;
