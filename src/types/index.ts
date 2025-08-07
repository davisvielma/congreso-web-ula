export type Track = "all" | "frontend" | "backend" | "ia"

export interface AgendaItem {
  id: string
  title: string
  speaker: string
  time: string
  track: "frontend" | "backend" | "ia"
  description: string
}
