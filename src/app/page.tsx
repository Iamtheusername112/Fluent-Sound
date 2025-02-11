'use client'

import { useState } from 'react'
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { Brain, ChevronRight, Headphones, Play, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <MaxWidthWrapper className='bg-background text-foreground'>
      <section className='flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-6 gap-10'>
        <div className='max-w-xl text-center space-y-6 lg:text-left'>
          <Badge variant={'secondary'} className='mb-4'>
            <Sparkles className='w-3 h-3 mr-1' />
            AI Powered Learning
          </Badge>
          <h1 className='text-4xl font-bold tracking-tight leading-tight sm:text-6xl'>
            Master any language through{' '}
            <span className='text-primary relative'>
              Active listening
              <div className='absolute bottom-0 w-full h-1 rounded-full bg-primary/20'></div>
            </span>
          </h1>
          <p className='text-lg text-muted-foreground'>
            Transform your language learning journey with AI-powered exercises.
          </p>
          <div className='flex flex-col gap-4 pt-4 sm:flex-row'>
            <Link
              href={'/about'}
              className={buttonVariants({ variant: 'default' })}
            >
              Get Started
              <ChevronRight className='w-4 h-4 ml-2' />
            </Link>

            <Link
              href={'/about'}
              className={buttonVariants({ variant: 'outline' })}
            >
              Learn More
              <Play className='w-4 h-4 ml-2' />
            </Link>
          </div>
        </div>
        <div className='relative w-full lg:w-1/2'>
          <div className='relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl'>
            {isVideoPlaying ? (
              <iframe
                className='w-full h-full'
                src='https://www.youtube.com/embed/Ahwoks_dawU?autoplay=1'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            ) : (
              <div
                className='relative w-full h-full bg-black cursor-pointer'
                onClick={() => setIsVideoPlaying(true)}
              >
                <Image
                  src='https://img.youtube.com/vi/Ahwoks_dawU/hqdefault.jpg'
                  alt='Video Thumbnail'
                  layout='fill'
                  objectFit='cover'
                />
                <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
                  <Play className='w-16 h-16 text-white' />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="container mx-auto py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl mb-4 font-bold">
            How it works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform makes language learning easy, fast and fun.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            [
              {
                icon: <Headphones className='w-6 h-6'/>,
                title: "Active Listening",
                description: "Practice listening to native speakers and improve your comprehension skills."
              },
              {
                icon: <Brain className='w-6 h-6'/>,
                title: "AI Analysis",
                description: "Get instant quizzes to test your understanding."
              },
              {
                icon: <Play className='w-6 h-6'/>,
                title: "Interactive exercises",
                description: "Engage with AI-generated exercises to reinforce your learning."
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
      </section>
      <section className="py-10">
        <div className="relative rounded-2xl bg-primary p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/70"></div>
          <div className="relative z-10 max-w-2xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your language learning?
            </h2>
            <p className="text-primary-foreground/9- mb-8">
            Join thousands of learners who have already transformed their language learning with our platform.
            </p>
            <Button className={buttonVariants({variant: "secondary"})} >
              Get Started now
            </Button>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  )
}
