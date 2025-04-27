import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const AdminVerificationPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // The correct password
  const correctPassword = "#solarlink#€€€";
  
  // Phone numbers and address info
  const phoneNumbers = ["+234 9032334918", "+234 7025615619"];
  const address = "23 Ikorodu Road, Epe, Lagos, Nigeria";
  
  const handleVerify = () => {
    setIsSubmitting(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      if (password === correctPassword) {
        // Store the admin verification status in localStorage
        localStorage.setItem("adminVerified", "true");
        
        toast({
          title: "Success!",
          description: "Admin access granted.",
          variant: "default",
        });
        navigate("/admin");
      } else {
        toast({
          title: "Invalid Password",
          description: "The password you entered is incorrect.",
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
    }, 1000);
  };
  
  const handleBackToSite = () => {
    navigate("/");
  };
  
  const handleShowConfirmDialog = () => {
    setShowConfirmDialog(true);
  };

  return (
    <div className="container max-w-lg py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Admin Verification</CardTitle>
          <CardDescription className="text-center">
            Enter the administrator password to access the admin panel.
            <div className="mt-2">
              <p>Business contact numbers:</p>
              {phoneNumbers.map((phone, index) => (
                <p key={index} className="font-medium text-foreground">{phone}</p>
              ))}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="text-center text-sm text-muted-foreground">
              <p>Business Address:</p>
              <p className="font-medium text-foreground">{address}</p>
            </div>
            
            <div className="mt-4 relative">
              <Input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="pr-10"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleBackToSite}>
            Back to Site
          </Button>
          <Button 
            onClick={handleVerify}
            disabled={password.length === 0 || isSubmitting}
          >
            {isSubmitting ? "Verifying..." : "Verify"}
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Would you like to proceed to the admin section?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setShowConfirmDialog(false);
              navigate('/');
            }}>
              Yes, continue to admin
            </Button>
            <Button onClick={() => {
              setShowConfirmDialog(false);
              navigate('/admin-verification');
            }}>
              No, go to home page
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminVerificationPage;
            
