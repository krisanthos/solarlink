
import { useState } from "react";
import { Milk } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: April 27, 2025</p>
        
        <h2>1. Introduction</h2>
        <p>
          SolarLink ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        
        <h2>2. Information We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on our website, or otherwise when you contact us.
        </p>
        
        <h2>3. How We Use Your Information</h2>
        <p>
          We use personal information collected via our website for a variety of business purposes described below:
        </p>
        <ul>
          <li>To provide and maintain our website</li>
          <li>To notify you about changes to our website</li>
          <li>To allow you to participate in interactive features of our website</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our website</li>
          <li>To monitor the usage of our website</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
        
        <h2>4. Disclosure of Your Information</h2>
        <p>
          We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
        </p>
        
        <h2>5. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.
        </p>
        
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p>
          SolarLink<br />
          23 Ikorodu Road, Epe, Lagos, Nigeria<br />
          Phone: +234 9032334918<br />
          Email: info@solarlink.com
        </p>
      </div>
      
      <div className="mt-16 flex justify-center">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" className="hover:bg-transparent">
              <Milk className="h-10 w-10 opacity-30 hover:opacity-100 transition-opacity" />
              <span className="sr-only">Admin Access</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                Do you want to continue to the admin section?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => navigate('/')}>No, go to main page</AlertDialogCancel>
              <AlertDialogAction onClick={() => navigate('/admin-verification')}>
                Yes, continue to admin
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
