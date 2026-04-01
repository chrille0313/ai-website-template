import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";

export const Route = createFileRoute("/auth/confirm-email")({
  component: ConfirmEmailPage,
});

function ConfirmEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Check your email</CardTitle>
          <CardDescription>
            We sent you a confirmation link. Please check your inbox and click the link to verify
            your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" asChild>
            <Link to="/auth/login">Back to login</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
