// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gqslgkgqolvrlfbmpbgu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxc2xna2dxb2x2cmxmYm1wYmd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NjcwMjMsImV4cCI6MjA1ODA0MzAyM30.aywE6ap4HJzj23WNC9j-Tu3B-Bcf8MRrMxteE3JSI0o";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);