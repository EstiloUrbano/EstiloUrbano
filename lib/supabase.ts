import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gdigrcwsnjpdwvphvufm.supabase.co'
const supabaseKey = 'sb_publishable_A_xGdcQYsYnve0KKzi2_tg_P36Qm2pX'

export const supabase = createClient(supabaseUrl, supabaseKey)
