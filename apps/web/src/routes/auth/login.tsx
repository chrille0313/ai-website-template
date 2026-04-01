import { createFileRoute, redirect } from "@tanstack/react-router";
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
    <div className="flex min-h-screen items-center justify-center px-4">
      <LoginForm />
    </div>
  );
}
