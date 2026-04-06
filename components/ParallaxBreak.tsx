interface ParallaxBreakProps {
  imageUrl: string
  alt: string
}

export default function ParallaxBreak({ imageUrl, alt }: ParallaxBreakProps) {
  return (
    <div
      className="parallax-fixed relative w-full"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        height: 'clamp(260px, 36vw, 480px)',
      }}
      role="img"
      aria-label={alt}
    >
      {/* Depth overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.18) 100%)',
        }}
        aria-hidden="true"
      />
    </div>
  )
}
