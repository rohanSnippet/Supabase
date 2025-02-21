import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL; //"https://jfqampurtzclbltwgqil.supabase.co";
const supabaseKey = import.meta.env.VITE_APP_ANON_KEY; //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmcWFtcHVydHpjbGJsdHdncWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2MjE3OTEsImV4cCI6MjA1MTE5Nzc5MX0.uzNLVUudUxUA6THHATdu5GPw1VNkLYMhjmbea0zzUx8";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;

