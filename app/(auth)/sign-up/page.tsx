"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AppleIcon, GoogleIcon } from "@/components/icons/auth-icons";
import { handleSignIn } from "@/actions/auth/users";

const SignUpPage = () => {


  return (
    <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
          <CardDescription className="text-center">Sign up to get started with our service</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Button variant="outline" className="w-full" onClick={()=>handleSignIn("google")} >
              <GoogleIcon className="mr-2 h-4 w-4" />
              Sign up with Google
            </Button>
            <Button variant="outline" className="w-full"  >
              <AppleIcon className="mr-2 h-4 w-4" />
              Sign up with Apple
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pt-0">
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </div>
          <div className="text-xs text-center text-muted-foreground">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </div>
        </CardFooter>
      </Card>
  );
};

export default SignUpPage;
