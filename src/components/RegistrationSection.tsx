import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { CheckCircle, Loader2 } from 'lucide-react'
import { useState } from 'react'
import Confetti from 'react-confetti'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ticketPrices } from '@/data/registration'
import { formSchema } from '@/schemas/register.schema'
import type { FormData } from '@/schemas/typeSchemas'

const RegistrationSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      ticketType: undefined,
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Simular envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log('Datos del formulario:', data)

    setIsSubmitting(false)
    setIsRegistered(true)
    setShowConfetti(true)

    toast.success('Te hemos enviado un email de confirmación.', {
      position: 'bottom-right',
    })

    // Ocultar confetti después de 5 segundos
    setTimeout(() => {
      setShowConfetti(false)
    }, 6000)
  }

  if (isRegistered) {
    return (
      <section id="registration" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50 w-full relative">
        {showConfetti && (
          <Confetti
            width={typeof window !== 'undefined' ? window.innerWidth : 0}
            height={typeof window !== 'undefined' ? window.innerHeight : 0}
            recycle={false}
            numberOfPieces={200}
            className="absolute inset-0"
          />
        )}
        <div className="container mx-auto max-w-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <CardTitle className="text-3xl text-green-600 mb-2">¡Registro Completado!</CardTitle>
                <CardDescription className="text-lg">
                  Te hemos enviado un email de confirmación con todos los detalles del evento.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Nos vemos el 15 de noviembre en el Auditorio La Hechicera, ULA.
                </p>
                <Button
                  onClick={() => {
                    setIsRegistered(false)
                    form.reset()
                  }}
                  variant="outline"
                >
                  Registrar otra persona
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="registration" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50 w-full">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Regístrate Ahora</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Asegura tu lugar en el evento más importante de desarrollo web en Venezuela
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Formulario de Registro</CardTitle>
              <CardDescription>Completa tus datos para confirmar tu participación</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre Completo</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Tu nombre completo"
                            {...field}
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="email@email.com"
                            {...field}
                            className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ticketType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de Ticket</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 w-full overflow-hidden">
                              <SelectValue placeholder="Selecciona tu tipo de ticket" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {Object.entries(ticketPrices).map(([type, price]) => (
                              <SelectItem key={type} value={type} className="w-full overflow-hidden">
                                <div className="flex gap-1 items-center">
                                  <span className="font-medium capitalize">{type}</span>
                                  <span>-</span>
                                  <span className="font-bold text-blue-600">{price}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Procesando...
                        </>
                      ) : (
                        'Confirmar Registro'
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default RegistrationSection
