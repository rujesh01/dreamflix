"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AppleIcon, GoogleIcon } from "@/components/icons/auth-icons";
import { handleSignIn } from "@/actions/users";
const LoginPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Welcome Back again
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Button variant="outline" className="w-full" onClick={()=> handleSignIn("google")} >
              <GoogleIcon className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
            <Button onClick={()=> handleSignIn("github")} variant="outline" className="w-full" >
              <AppleIcon className="mr-2 h-4 w-4" />
              Sign in with Apple
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pt-0">
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </div>
          <div className="text-xs text-center text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
