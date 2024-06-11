import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dkxugyxwnqclicfvkwtd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRreHVneXh3bnFjbGljZnZrd3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzMzE4NDQsImV4cCI6MjAzMTkwNzg0NH0.ueMovtQbCZR1ixMLEW9SU0DkUkLGbueXlMkHaURyH0A";
export const supabase = createClient(supabaseUrl, supabaseKey);
