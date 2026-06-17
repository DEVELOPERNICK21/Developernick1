'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { Model3D } from '@/lib/constants'

type ScrollModelProps = Model3D & {
  containerRef?: React.RefObject<HTMLElement | null>
}

export default function ScrollModel({
  src,
  alt,
  className,
  parallaxY = 60,
  parallaxRotate = 12,
  containerRef,
}: ScrollModelProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef ?? ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [parallaxY, -parallaxY])
  const rotate = useTransform(scrollYProgress, [0, 1], [-parallaxRotate, parallaxRotate])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, rotate, scale, willChange: 'transform' }}
    >
      <Image
        src={src}
        alt={alt}
        width={320}
        height={320}
        className="h-auto w-full drop-shadow-[0_8px_24px_rgba(0,229,255,0.2)]"
      />
    </motion.div>
  )
}
