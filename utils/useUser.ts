import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import axios from "axios";
import { getAuthToken } from "./cookies";

export default function useUser({
  redirectTo = "",
  redirectIfFound = false,
} = {}) {
  const { data, mutate: mutateUser } = useSWR("/api/users/auth");
  const user = data?.data;

  useEffect(() => {
    if (!redirectTo || !user) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && user?.isLoggedIn)
    ) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);
  return { user, mutateUser };
}
