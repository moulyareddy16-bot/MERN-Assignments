import { useAuth } from "../store/authStore";
import { Navigate, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

function ProtectedRoute({ children, allowedRoles }) {
  const { loading, currentUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      toast.error("Redirecting to Login", { id: "auth-error" });
    }
  }, [loading, isAuthenticated]);

  //loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  //if user not loggedin
  if (!isAuthenticated) {
    //redirect to Login
    return <Navigate to="/login" replace />;
  }

  //check roles
  if (allowedRoles && !allowedRoles.includes(currentUser?.role)) {
   
    //redirect to Login
    return <Navigate to="/unauthorized" replace state={{ redirectTo: "/" }} />;
  }

  return children;
}

export default ProtectedRoute;