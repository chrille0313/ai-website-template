import { useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { authKeys, userQueryOptions } from "./queries";
import { signInWithEmail, signUp, signOut } from "./mutations";

export function useUser() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      queryClient.setQueryData(authKeys.user, session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [queryClient]);

  return useQuery(userQueryOptions);
}

export function useSignIn() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInWithEmail(email, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.user });
    },
  });
}

export function useSignUp() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signUp(email, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.user });
    },
  });
}

export function useSignOut() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.clear();
    },
  });
}
