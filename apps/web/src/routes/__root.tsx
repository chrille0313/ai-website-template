import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { TanStackDevtools } from "@tanstack/react-devtools";
import TanStackRouterDevTools from "@/integrations/tanstack-router/devtools";
import TanStackQueryDevtools from "@/integrations/tanstack-query/devtools";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster />
      {import.meta.env.DEV && (
        <TanStackDevtools plugins={[TanStackRouterDevTools, TanStackQueryDevtools]} />
      )}
    </>
  );
}
