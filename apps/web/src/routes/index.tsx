import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@workspace/ui/components/button";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Welcome</h1>
      <p className="text-muted-foreground">
        Get started by editing this page or navigating to the dashboard.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/auth/login">Log in</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/auth/signup">Sign up</Link>
        </Button>
      </div>
    </div>
  );
}
