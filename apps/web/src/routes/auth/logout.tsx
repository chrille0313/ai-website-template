import { createFileRoute, redirect } from "@tanstack/react-router";
import { Spinner } from "@workspace/ui/components/spinner";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@workspace/ui/components/empty";
import { signOut } from "@/auth/mutations";
import { authKeys } from "@/auth/queries";

export const Route = createFileRoute("/auth/logout")({
  loader: async ({ context }) => {
    await signOut();
    context.queryClient.removeQueries({ queryKey: authKeys.user });
    throw redirect({ to: "/auth/login" });
  },
  pendingComponent: LogoutPending,
});

function LogoutPending() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Empty className="border-none">
        <EmptyHeader>
          <EmptyMedia>
            <Spinner className="size-8" />
          </EmptyMedia>
          <EmptyTitle>Signing out</EmptyTitle>
          <EmptyDescription>Please wait while we sign you out...</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  );
}
