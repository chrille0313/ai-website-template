import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

import { useUser } from "@/auth/hooks";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const { data: user } = useUser();

  return (
    <div className="container mx-auto max-w-4xl py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="outline" asChild>
          <Link to="/auth/logout">Sign out</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>You are signed in as {user?.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is a protected page. Start building your app from here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
