import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth"); // Redirect to login if not authenticated
      return;
    }

    // Redirect based on user role
    switch (user.role) {
      case "judge":
        navigate("/dashboard/judge");
        break;
      case "lawyer":
        navigate("/dashboard/lawyer");
        break;
      case "litigant":
        navigate("/dashboard/litigant");
        break;
      case "admin":
        navigate("/dashboard/admin");
        break;
      default:
        navigate("/dashboard/unknown");
    }
  }, [user, navigate]);

  return <div>Redirecting...</div>; // Temporary UI while redirecting
}
