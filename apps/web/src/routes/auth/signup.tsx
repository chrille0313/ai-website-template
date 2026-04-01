import { createFileRoute, redirect } from "@tanstack/react-router";
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
    <div className="flex min-h-screen items-center justify-center px-4">
      <SignupForm />
    </div>
  );
}
