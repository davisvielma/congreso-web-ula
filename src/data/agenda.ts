import { Brain, Code, Database } from 'lucide-react'
import type { AgendaItem } from '@/types'

export const agendaData: AgendaItem[] = [
  {
    id: '1',
    title: 'React 19: Nuevas Características',
    speaker: 'María González',
    time: '09:00 - 09:45',
    track: 'frontend',
    description: 'Explorando las últimas características de React 19 y cómo implementarlas en proyectos reales.',
  },
  {
    id: '2',
    title: 'Node.js y Microservicios',
    speaker: 'Carlos Rodríguez',
    time: '09:00 - 09:45',
    track: 'backend',
    description: 'Arquitectura de microservicios con Node.js y mejores prácticas de desarrollo.',
  },
  {
    id: '3',
    title: 'IA en el Desarrollo Web',
    speaker: 'Ana Martínez',
    time: '09:00 - 09:45',
    track: 'ia',
    description: 'Integración de inteligencia artificial en aplicaciones web modernas.',
  },
  {
    id: '4',
    title: 'TypeScript Avanzado',
    speaker: 'Luis Pérez',
    time: '10:00 - 10:45',
    track: 'frontend',
    description: 'Técnicas avanzadas de TypeScript para aplicaciones escalables.',
  },
  {
    id: '5',
    title: 'GraphQL y APIs Modernas',
    speaker: 'Elena Vargas',
    time: '10:00 - 10:45',
    track: 'backend',
    description: 'Construcción de APIs eficientes con GraphQL y Apollo Server.',
  },
  {
    id: '6',
    title: 'Machine Learning con TensorFlow.js',
    speaker: 'Roberto Silva',
    time: '10:00 - 10:45',
    track: 'ia',
    description: 'Implementación de modelos de ML directamente en el navegador.',
  },
]

export const trackConfig = {
  frontend: {
    label: 'Frontend',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500',
  },
  backend: {
    label: 'Backend',
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    icon: Database,
    gradient: 'from-green-500 to-emerald-500',
  },
  ia: {
    label: 'IA',
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
  },
}
