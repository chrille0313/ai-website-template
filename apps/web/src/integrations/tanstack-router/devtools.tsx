import { useRouter } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

function RouterDevtoolsPanel() {
  const router = useRouter();
  return <TanStackRouterDevtoolsPanel router={router} />;
}

export default {
  name: "TanStack Router",
  render: <RouterDevtoolsPanel />,
};
