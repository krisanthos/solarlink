
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const AdminVerificationPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  
  // The correct code - in a real app this should be dynamically generated and sent via SMS
  const correctCode = "123456";
  
  // Phone numbers and address info
  const phoneNumbers = ["+234 9032334918", "+234 7025615619"];
  const address = "23 Ikorodu Road, Epe, Lagos, Nigeria";
  
  const handleVerify = () => {
    setIsSubmitting(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      if (otp === correctCode) {
        toast({
          title: "Success!",
          description: "Admin access granted.",
          variant: "default",
        });
        navigate("/admin");
      } else {
        toast({
          title: "Invalid Code",
          description: "The verification code you entered is incorrect.",
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
            Enter the 6-digit verification code sent to:
            <div className="mt-2">
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
            
            <div className="mt-4">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleBackToSite}>
            Back to Site
          </Button>
          <Button 
            onClick={handleVerify}
            disabled={otp.length !== 6 || isSubmitting}
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
              No, go to home page
            </Button>
            <Button onClick={() => {
              setShowConfirmDialog(false);
              navigate('/admin-verification');
            }}>
              Yes, continue to admin
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminVerificationPage;
