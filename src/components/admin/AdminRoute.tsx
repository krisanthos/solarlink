
import { Navigate, Outlet } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { AdminUser } from "@/utils/types";

// In a real app, this would come from authentication storage
const mockGetCurrentUser = (): AdminUser | null => {
  // This is just for demo purposes
  // A real implementation would check localStorage or a proper auth context
  return {
    username: "admin",
    role: "admin"
  };
};

export const AdminRoute = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulating an authentication check
    const user = mockGetCurrentUser();
    setIsAuthenticated(!!user);
    setIsLoading(false);
    
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in as an admin to view this page.",
        variant: "destructive"
      });
    }
  }, [toast]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
