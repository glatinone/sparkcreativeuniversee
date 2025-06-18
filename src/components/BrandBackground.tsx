import React from 'react'

const BrandBackground = ({ children }: { children?: React.ReactNode }) => (
  <div className="relative min-h-screen w-full overflow-x-hidden bg-black">
    {/* Animated Brand Floating Elements */}
    <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse z-0" style={{ background: 'radial-gradient(circle, #8F43EE33 60%, transparent 100%)' }} />
    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 z-0" style={{ background: 'radial-gradient(circle, #3ABEFF33 60%, transparent 100%)' }} />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl animate-pulse delay-2000 z-0" style={{ background: 'radial-gradient(circle, #1DE9B633 60%, transparent 100%)' }} />
    {/* Animated Grid Pattern */}
    <div className="absolute inset-0 z-0 pointer-events-none" style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
      animation: 'gridMove 16s linear infinite',
    }} />
    <div className="relative z-10">{children}</div>
    <style jsx global>{`
      @keyframes gridMove {
        0% { background-position: 0 0, 0 0; opacity: 0.7; }
        50% { background-position: 25px 25px, 25px 25px; opacity: 1; }
        100% { background-position: 50px 50px, 50px 50px; opacity: 0.7; }
      }
    `}</style>
  </div>
)

export default BrandBackground 