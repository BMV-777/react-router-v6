import { useContext } from "react";
import { AuthContext } from "../hoc/AutuProvader";

export function useAuth() {
  return useContext(AuthContext);
}