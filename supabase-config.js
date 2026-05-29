// Configuración de Supabase
// Credenciales de tu proyecto de Supabase
const SUPABASE_URL = "https://yzvxkpfpkvinsumenarb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6dnhrcGZwa3ZpbnN1bWVuYXJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNTQzOTEsImV4cCI6MjA5NTYzMDM5MX0.IGjk85fej60zqlC7BEG7uIpRjVSWiXwzzzcYJmngox4";

let supabaseClient;

if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.error("Error: Supabase JS CDN no se ha cargado. Asegúrate de incluir el script del CDN antes de este archivo.");
}
