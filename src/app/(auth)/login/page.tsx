import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="flex h-screen justify-center items-center p-4">
        <Card className="w-[450px] shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Login</CardTitle>
            <CardDescription className="font-semibold text-slate-600 tracking-widest">
              Sign In to our platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Example: email@gmail.com"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="**********"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-3">
            <Button className="w-full">Login</Button>
            <p className="text-sm">
              Not Registered?{" "}
              <Link href="/register">
                <span className="underline font-bold">Create Account</span>
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
