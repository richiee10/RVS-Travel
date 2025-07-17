import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(nuxtApp => {
  const supabase = createClient(
    'https://YOUR_PROJECT_ID.supabase.co',  // 🔁 replace this
    'YOUR_ANON_KEY'                         // 🔁 replace this
  )

  nuxtApp.provide('supabase', supabase)
})
