"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
// import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Login() {
  return (
    <Card className="w-full max-w-md p-6 rounded-lg shadow-lg bg-background-default">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-primary-dark">Login</CardTitle>
        <CardDescription className="text-text-light">
          Enter your email and password to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-text-default">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            className="border-text-muted"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password" className="text-text-default">
            Password
          </Label>
          <Input id="password" type="password" className="border-text-muted" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary-dark text-text-inverted">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}
