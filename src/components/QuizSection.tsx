import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Database, Brain } from "lucide-react"

interface QuizQuestion {
  id: string
  question: string
  options: {
    id: string
    text: string
    track: "frontend" | "backend" | "ia"
    icon: React.ReactNode
  }[]
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "1",
    question: "¿Qué aspecto del desarrollo web te interesa más?",
    options: [
      {
        id: "ui",
        text: "Interfaces de usuario interactivas",
        track: "frontend",
        icon: <Code className="w-5 h-5" />,
      },
      {
        id: "api",
        text: "APIs y arquitecturas de servidor",
        track: "backend",
        icon: <Database className="w-5 h-5" />,
      },
      {
        id: "ai",
        text: "Inteligencia artificial y ML",
        track: "ia",
        icon: <Brain className="w-5 h-5" />,
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
        icon: <Code className="w-5 h-5" />,
      },
      {
        id: "node",
        text: "Node.js y microservicios",
        track: "backend",
        icon: <Database className="w-5 h-5" />,
      },
      {
        id: "tensorflow",
        text: "TensorFlow y modelos de IA",
        track: "ia",
        icon: <Brain className="w-5 h-5" />,
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
        icon: <Code className="w-5 h-5" />,
      },
      {
        id: "performance",
        text: "Rendimiento y escalabilidad",
        track: "backend",
        icon: <Database className="w-5 h-5" />,
      },
      {
        id: "data",
        text: "Análisis de datos y predicciones",
        track: "ia",
        icon: <Brain className="w-5 h-5" />,
      },
    ],
  },
]

const trackInfo = {
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

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [recommendedTrack, setRecommendedTrack] = useState<"frontend" | "backend" | "ia" | null>(null)

  const handleAnswer = (optionId: string, track: "frontend" | "backend" | "ia") => {
    const newAnswers = [...answers, track]
    setAnswers(newAnswers)

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Calcular track recomendado
      const trackCounts = newAnswers.reduce(
        (acc, track) => {
          acc[track] = (acc[track] || 0) + 1
          return acc
        },
        {} as Record<string, number>,
      )

      const recommended = Object.entries(trackCounts).reduce((a, b) =>
        trackCounts[a[0]] > trackCounts[b[0]] ? a : b,
      )[0] as "frontend" | "backend" | "ia"

      setRecommendedTrack(recommended)
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setRecommendedTrack(null)
  }

  return (
    <section id="quiz" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Cuál es tu Track Ideal?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Responde estas preguntas y descubre qué track del congreso es perfecto para ti
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="mb-8">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="outline">
                      Pregunta {currentQuestion + 1} de {quizQuestions.length}
                    </Badge>
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{quizQuestions[currentQuestion].question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {quizQuestions[currentQuestion].options.map((option) => (
                      <motion.div key={option.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant="outline"
                          className="w-full p-6 h-auto justify-start text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 bg-transparent"
                          onClick={() => handleAnswer(option.id, option.track)}
                        >
                          <div className="flex items-center gap-4">
                            {option.icon}
                            <span className="text-lg">{option.text}</span>
                          </div>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  </div>
                  <CardTitle className="text-3xl mb-2">¡Tu Track Recomendado!</CardTitle>
                  <CardDescription className="text-lg">
                    Basado en tus respuestas, este es el track perfecto para ti:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {recommendedTrack && (
                    <div className="mb-8">
                      <Badge className={`text-lg px-6 py-2 mb-4 ${trackInfo[recommendedTrack].color}`}>
                        {trackInfo[recommendedTrack].name}
                      </Badge>
                      <p className="text-gray-600 dark:text-gray-300 text-lg">
                        {trackInfo[recommendedTrack].description}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={resetQuiz} variant="outline">
                      Repetir Quiz
                    </Button>
                    <Button
                      onClick={() => document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Registrarme Ahora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default QuizSection