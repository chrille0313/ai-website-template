import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { LoginForm } from "@/auth/components/login-form";
import { userQueryOptions } from "@/auth/queries";

export const Route = createFileRoute("/auth/login")({
  beforeLoad: async ({ context }) => {
    const user = await context.queryClient.ensureQueryData(userQueryOptions).catch(() => null);

    if (user) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <LoginForm />
      <p className="text-muted-foreground text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/auth/signup" className="text-primary underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
