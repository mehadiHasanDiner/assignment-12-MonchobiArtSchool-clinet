import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";

const SecuredRoute = ({ children, role }) => {
  const { user, loading } = useAuth();
  const [isSecuredRole, isSecuredRoleLoading] = useUserRole();

  const location = useLocation();
  if (loading || isSecuredRoleLoading) {
    return (
      <div className="w-full flex justify-center">
        <progress className="progress w-1/4 bg-pink-600 mt-24 text-center h-3"></progress>
      </div>
    );
  }

  if (!user) {
    // If the user is not authenticated, redirect to login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if the user has the appropriate role for the route
  if (role === "admin" && isSecuredRole === "admin") {
    return children; // Render the children for admin route
  } else if (role === "instructor" && isSecuredRole === "instructor") {
    return children; // Render the children for instructor route
  } else if (role === "user" && isSecuredRole === "user") {
    return children; // Render the children for user route
  } else {
    // If the user's role doesn't match the route role, redirect to home
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

export default SecuredRoute;
