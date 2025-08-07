import type { QuizQuestion } from "@/types"
import { Code, Database, Brain } from "lucide-react"


export const quizQuestions: QuizQuestion[] = [
  {
    id: "1",
    question: "¿Qué aspecto del desarrollo web te interesa más?",
    options: [
      {
        id: "ui",
        text: "Interfaces de usuario interactivas",
        track: "frontend",
        icon: Code,
      },
      {
        id: "api",
        text: "APIs y arquitecturas de servidor",
        track: "backend",
        icon: Database,
      },
      {
        id: "ai",
        text: "Inteligencia artificial y ML",
        track: "ia",
        icon: Brain,
      },
    ],
  },
  {
    id: "2",
    question: "¿Con qué tecnología te gustaría trabajar más?",
    options: [
      {
        id: "react",
        text: "React y ecosistema frontend",
        track: "frontend",
        icon: Code,
      },
      {
        id: "node",
        text: "Node.js y microservicios",
        track: "backend",
        icon: Database,
      },
      {
        id: "tensorflow",
        text: "TensorFlow y modelos de IA",
        track: "ia",
        icon: Brain,
      },
    ],
  },
  {
    id: "3",
    question: "¿Qué tipo de problemas prefieres resolver?",
    options: [
      {
        id: "ux",
        text: "Experiencia de usuario y diseño",
        track: "frontend",
        icon: Code,
      },
      {
        id: "performance",
        text: "Rendimiento y escalabilidad",
        track: "backend",
        icon: Database,
      },
      {
        id: "data",
        text: "Análisis de datos y predicciones",
        track: "ia",
        icon: Brain,
      },
    ],
  },
]

export const trackInfo = {
  frontend: {
    name: "Frontend Development",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    description: "Perfecto para crear interfaces increíbles y experiencias de usuario memorables",
  },
  backend: {
    name: "Backend Development",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    description: "Ideal para construir arquitecturas robustas y sistemas escalables",
  },
  ia: {
    name: "Inteligencia Artificial",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    description: "Excelente para innovar con IA y crear soluciones inteligentes",
  },
}