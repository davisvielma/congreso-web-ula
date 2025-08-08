import { Clock, MapPin, ParkingMeterIcon as Parking, Wifi } from 'lucide-react'
import type { InfoCard, InfoList } from '@/types'

export const info: InfoCard[] = [
  {
    title: 'Fácil Acceso',
    desciption: 'Ubicado en el campus principal de la ULA, con múltiples rutas de transporte público',
    Icon: MapPin,
    color: {
      background: 'bg-blue-100 dark:bg-blue-900',
      icon: 'text-blue-600',
    },
  },
  {
    title: 'Estacionamiento',
    desciption: 'Amplio estacionamiento gratuito disponible para todos los asistentes',
    Icon: Parking,
    color: {
      background: 'bg-green-100 dark:bg-green-900',
      icon: 'text-green-600',
    },
  },
  {
    title: 'Conectividad',
    desciption: 'WiFi de alta velocidad y estaciones de carga en todo el auditorio',
    Icon: Wifi,
    color: {
      background: 'bg-purple-100 dark:bg-purple-900',
      icon: 'text-purple-600',
    },
  },
]

export const infoList: InfoList[] = [
  {
    title: 'Horario del Evento',
    Icon: Clock,
    desciption: ['9:00 AM - 6:00 PM', '15 de Noviembre, 2026'],
  },
  {
    title: 'Estacionamiento',
    Icon: Parking,
    desciption: ['Disponible en el campus universitario', 'Entrada gratuita para asistentes'],
  },
  {
    title: 'Conectividad',
    Icon: Wifi,
    desciption: ['WiFi gratuito de alta velocidad', 'Estaciones de carga disponibles'],
  },
]
