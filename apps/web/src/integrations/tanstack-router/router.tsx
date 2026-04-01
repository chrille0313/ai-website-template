import { createRouter } from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { queryClient } from "@/integrations/tanstack-query/client";
import { routeTree } from "@/routeTree.gen";

export const router = routerWithQueryClient(
  createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
    context: {
      queryClient,
    },
  }),
  queryClient,
);

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
