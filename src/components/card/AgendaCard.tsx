import { Clock, type LucideProps, User } from 'lucide-react'
import type { ComponentType } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  gradient: string
  color: string
  label: string
  time: string
  title: string
  speaker: string
  description: string
  Icon: ComponentType<LucideProps>
}

const AgendaCard = ({ gradient, color, description, label, speaker, time, title, Icon }: Props) => {
  return (
    <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white dark:bg-gray-800">
      <div className={`h-2 bg-gradient-to-r ${gradient}`} />

      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-3">
          <Badge className={`${color} flex items-center gap-1`}>
            <Icon className="w-3 h-3" />
            {label}
          </Badge>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1">
            <Clock className="w-4 h-4 mr-1" />
            {time}
          </div>
        </div>
        <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="flex items-center text-base">
          <User className="w-4 h-4 mr-2" />
          {speaker}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

export default AgendaCard
