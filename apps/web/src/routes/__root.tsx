import { createRootRouteWithContext, Link, Outlet, useRouter } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { TooltipProvider } from "@workspace/ui/components/tooltip";
import { Button } from "@workspace/ui/components/button";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@workspace/ui/components/empty";
import { AlertCircle, FileQuestion } from "lucide-react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import TanStackRouterDevTools from "@/integrations/tanstack-router/devtools";
import TanStackQueryDevtools from "@/integrations/tanstack-query/devtools";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorBoundary,
});

function RootComponent() {
  return (
    <TooltipProvider>
      <Outlet />
      {import.meta.env.DEV && (
        <TanStackDevtools plugins={[TanStackRouterDevTools, TanStackQueryDevtools]} />
      )}
    </TooltipProvider>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Empty className="border-none">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FileQuestion />
          </EmptyMedia>
          <EmptyTitle>Page not found</EmptyTitle>
          <EmptyDescription>The page you're looking for doesn't exist.</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button asChild>
            <Link to="/">Go home</Link>
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
}

function ErrorBoundary({ error }: { error: Error }) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Empty className="border-none">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <AlertCircle />
          </EmptyMedia>
          <EmptyTitle>Something went wrong</EmptyTitle>
          <EmptyDescription>
            {import.meta.env.DEV
              ? error.message
              : "An unexpected error occurred. Please try again."}
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-3">
            <Button onClick={() => router.invalidate()}>Try again</Button>
            <Button variant="outline" asChild>
              <Link to="/">Go home</Link>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
