'use client'

import { useState } from 'react'
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { ChevronRight, Play, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
          <h1 className='text-4xl fonrt-bold tracking-tight leading-tight sm:text-6xl'>
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
    </MaxWidthWrapper>
  )
}
