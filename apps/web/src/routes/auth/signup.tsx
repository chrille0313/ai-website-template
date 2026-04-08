import { createFileRoute, Link, redirect } from "@tanstack/react-router";

import { SignupForm } from "@/auth/components/signup-form";
import { userQueryOptions } from "@/auth/queries";

export const Route = createFileRoute("/auth/signup")({
  beforeLoad: async ({ context }) => {
    const user = await context.queryClient.ensureQueryData(userQueryOptions).catch(() => null);

    if (user) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: SignupPage,
});

function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <SignupForm />
      <p className="text-muted-foreground text-sm">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-primary underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
