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
import Link from "next/link";

export function CreateAccount() {
  return (
    <Card className="w-full max-w-md p-6 rounded-lg shadow-lg bg-background-default">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-primary-dark">
          Create an account
        </CardTitle>
        <CardDescription className="text-text-light">
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button
            variant="outline"
            className="border-primary-light text-primary-light"
          >
            {/* <Icons.gitHub className="w-4 h-4 mr-2" /> */}
            Github
          </Button>
          <Button
            variant="outline"
            className="border-primary-light text-primary-light"
          >
            {/* <Icons.google className="w-4 h-4 mr-2" /> */}
            Google
          </Button>
        </div>
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-text-light" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-background-dark text-text-muted">
              Or continue with
            </span>
          </div>
        </div>
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
        <Link href="/course-selector">
          <Button className="w-full bg-primary-dark text-text-inverted">
            Create account
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
