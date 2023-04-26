import { supabase } from "./supabase";

export const selectSupabase = async (tabla, columna = '*') => {
  const { data } = await supabase.from(tabla).select(columna)
  return data
}