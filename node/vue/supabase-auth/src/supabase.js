import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VUE_APP_SUPABASE_URL
const supabaseAnonKey = process.env.VUE_APP_SUPABASE_PUBLIC_KEY

console.debug(`url=${process.env.VUE_APP_SUPABASE_URL}`)
console.debug(`key=${process.env.VUE_APP_SUPABASE_PUBLIC_KEY}`)

export const supabase = createClient(supabaseUrl, supabaseAnonKey)