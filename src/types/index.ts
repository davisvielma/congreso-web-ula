import type { LucideProps } from "lucide-react"
import type { ComponentType } from "react"

export type Track = "all" | "frontend" | "backend" | "ia"

export interface AgendaItem {
  id: string
  title: string
  speaker: string
  time: string
  track: "frontend" | "backend" | "ia"
  description: string
}

export interface Speaker {
  id: string
  name: string
  role: string
  company: string
  bio: string
  image: string
  specialties: string[]
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export interface QuizQuestion {
  id: string
  question: string
  options: {
    id: string
    text: string
    track: "frontend" | "backend" | "ia"
    icon: ComponentType<LucideProps>
  }[]
}