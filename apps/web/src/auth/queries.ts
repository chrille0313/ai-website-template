import { queryOptions } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const authKeys = {
  user: ["auth", "user"] as const,
};

export const userQueryOptions = queryOptions({
  queryKey: authKeys.user,
  queryFn: async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  },
  staleTime: Infinity,
  retry: false,
});
