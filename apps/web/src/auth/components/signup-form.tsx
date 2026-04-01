import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { useSignUp } from "../hooks";
import { signupSchema, type SignupFormValues } from "../schemas";

export function SignupForm() {
  const signUp = useSignUp();

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: SignupFormValues) {
    signUp.mutate({ email: values.email, password: values.password });
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>Enter your details to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...form.register("email")}
            />
            {form.formState.errors.email && (
              <p className="text-destructive text-sm">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...form.register("password")} />
            {form.formState.errors.password && (
              <p className="text-destructive text-sm">{form.formState.errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input id="confirmPassword" type="password" {...form.register("confirmPassword")} />
            {form.formState.errors.confirmPassword && (
              <p className="text-destructive text-sm">
                {form.formState.errors.confirmPassword.message}
              </p>
            )}
          </div>

          {signUp.error && <p className="text-destructive text-sm">{signUp.error.message}</p>}

          <Button type="submit" className="w-full" disabled={signUp.isPending}>
            {signUp.isPending ? "Creating account..." : "Create account"}
          </Button>

          <p className="text-muted-foreground text-center text-sm">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-primary underline">
              Log in
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
