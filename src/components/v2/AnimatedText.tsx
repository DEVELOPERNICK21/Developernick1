'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

function AnimatedChar({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const start = index / total
  const end = Math.min(start + 1 / total, 1)
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

  return (
    <motion.span className="inline" style={{ opacity }}>
      {char}
    </motion.span>
  )
}

function AnimatedWord({
  word,
  wordStartIndex,
  total,
  scrollYProgress,
  isLast,
}: {
  word: string
  wordStartIndex: number
  total: number
  scrollYProgress: MotionValue<number>
  isLast: boolean
}) {
  return (
    <span className="inline-block whitespace-nowrap">
      {word.split('').map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          index={wordStartIndex + i}
          total={total}
          scrollYProgress={scrollYProgress}
        />
      ))}
      {!isLast && '\u00A0'}
    </span>
  )
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')
  let charIndex = 0

  return (
    <p
      ref={ref}
      className={`text-center font-medium leading-relaxed text-brand-light ${className}`}
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', maxWidth: '560px' }}
    >
      {words.map((word, i) => {
        const wordStartIndex = charIndex
        charIndex += word.length + (i < words.length - 1 ? 1 : 0)
        return (
          <AnimatedWord
            key={`${word}-${i}`}
            word={word}
            wordStartIndex={wordStartIndex}
            total={text.length}
            scrollYProgress={scrollYProgress}
            isLast={i === words.length - 1}
          />
        )
      })}
    </p>
  )
}
