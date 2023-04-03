import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://rcbnuzvmmrzvjrsoyfhu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjYm51enZtbXJ6dmpyc295Zmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0NDc1NjUsImV4cCI6MTk5NjAyMzU2NX0.IpK76P7SsZq54khzth23FIt1K5eGkfPmDhGCMs8STxU"
);
