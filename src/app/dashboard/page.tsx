import MaxWidthWrapper from '@/components/common/MaxWidthWrapper'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import VideoUrlForm from '@/components/VideoUrlForm'
import { Brain, Headphones, Play, Sparkles } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
     <MaxWidthWrapper className='mt-20'>
        <div className="text-center space-y-4 mb-12">
            <Badge variant={"secondary"} className='mb-4'>
                <Sparkles className='w-3 h-3 mr-1'/>
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Generate smart quizzes from <span className="text-red-500">YouTube</span> videos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your YouTube video into an Interactive quiz with AI.
            </p>
        </div>
        <VideoUrlForm/>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
  {
    [
      {
        icon: <Headphones className='w-6 h-6'/>,
        title: "Active Listening",
        description: "Immerse yourself in native-level conversations to enhance your auditory skills and comprehension."
      },
      {
        icon: <Brain className='w-6 h-6'/>,
        title: "AI Analysis",
        description: "Receive personalized feedback through AI-driven assessments, ensuring you grasp key concepts effectively."
      },
      {
        icon: <Play className='w-6 h-6'/>,
        title: "Interactive Exercises",
        description: "Participate in dynamic, AI-powered activities that adapt to your learning pace, making practice fun and engaging."
      },
    ].map((feature, i ) => (
      <Card key={i} className='p-6 hover:shadow-2xl transition-shadow'>
        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary/10">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">
          {feature.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {feature.description}
        </p>
      </Card>
    ))
  }
</div>

     </MaxWidthWrapper>
  )
}

export default page