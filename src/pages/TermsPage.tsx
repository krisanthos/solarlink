
import { useState } from "react";
import { Milk } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const TermsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: April 27, 2025</p>
        
        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing our website, you agree to be bound by these Terms and Conditions and to comply with all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>
        
        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials on SolarLink's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul>
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose</li>
          <li>Attempt to decompile or reverse engineer any software contained on SolarLink's website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>
        
        <h2>3. Disclaimer</h2>
        <p>
          The materials on SolarLink's website are provided on an 'as is' basis. SolarLink makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        
        <h2>4. Limitations</h2>
        <p>
          In no event shall SolarLink or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SolarLink's website.
        </p>
        
        <h2>5. Accuracy of Materials</h2>
        <p>
          The materials appearing on SolarLink's website could include technical, typographical, or photographic errors. SolarLink does not warrant that any of the materials on its website are accurate, complete or current.
        </p>
        
        <h2>6. Links</h2>
        <p>
          SolarLink has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SolarLink of the site. Use of any such linked website is at the user's own risk.
        </p>
        
        <h2>7. Contact</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
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

export default TermsPage;
