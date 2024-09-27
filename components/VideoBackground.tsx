import React from 'react'

interface VideoBackgroundProps {
  videoSrc: string
  fallbackImageSrc?: string
}

export default function VideoBackground({ videoSrc, fallbackImageSrc }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster={fallbackImageSrc}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-white bg-opacity-50" /> {/* Overlay to make video subtle */}
    </div>
  )
}