import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { quizQuestions, trackInfo } from '@/data/quiz'
import { scrollTo } from '@/utils'

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [recommendedTrack, setRecommendedTrack] = useState<'frontend' | 'backend' | 'ia' | null>(null)

  const handleAnswer = (track: 'frontend' | 'backend' | 'ia') => {
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

      const recommended = Object.entries(trackCounts).reduce((a, b) => (trackCounts[a[0]] > trackCounts[b[0]] ? a : b))[0] as
        | 'frontend'
        | 'backend'
        | 'ia'

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
    <section id="quiz" className="py-20 px-4 w-full">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">¿Cuál es tu Track Ideal?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Responde estas preguntas y descubre qué track del congreso es perfecto para ti
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {showResult ? (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
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
                      <p className="text-gray-600 dark:text-gray-300 text-lg">{trackInfo[recommendedTrack].description}</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={resetQuiz} variant="outline">
                      Repetir Quiz
                    </Button>
                    <Button onClick={() => scrollTo('registration')} className="bg-blue-600 hover:bg-blue-700">
                      Registrarme Ahora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
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
                        style={{
                          width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{quizQuestions[currentQuestion].question}</CardTitle>
                </CardHeader>
                <CardContent className="px-3 sm:px-6">
                  <div className="space-y-4">
                    {quizQuestions[currentQuestion].options.map((option) => (
                      <motion.div key={option.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant="outline"
                          className="w-full py-6 px-3 sm:p-6 h-auto justify-start text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 bg-transparent"
                          onClick={() => handleAnswer(option.track)}
                        >
                          <div className="flex items-center gap-3 sm:gap-4">
                            <option.icon className="w-5 h-5" />
                            <span className="sm:text-lg">{option.text}</span>
                          </div>
                        </Button>
                      </motion.div>
                    ))}
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
