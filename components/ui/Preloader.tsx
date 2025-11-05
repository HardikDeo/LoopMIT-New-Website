'use client';

import { useEffect, useRef } from 'react';

export default function Preloader() {
  const preloaderRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const dotsRef = useRef([]);
  const glowRef = useRef(null);

  useEffect(() => {
    // Dynamically import GSAP to avoid SSR issues
    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default;

      // Initial entrance animation
      gsap.from(imageRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });

      // Continuous floating animation
      gsap.to(imageRef.current, {
        y: -15,
        duration: 1.5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Glow pulse animation
      gsap.to(glowRef.current, {
        scale: 1.3,
        opacity: 0.3,
        duration: 1.5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Animate dots
      dotsRef.current.forEach((dot, i) => {
        gsap.to(dot, {
          scale: 1.5,
          opacity: 0.5,
          duration: 0.6,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.2,
        });
      });

      // Main timeline
      const tl = gsap.timeline({
        delay: 2,
        onComplete: () => {
          // Fade out preloader
          gsap.to(preloaderRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
              if (preloaderRef.current) {
                ;
              }
            }
          });
        }
      });

      // Animate background from black to white
      tl.to(preloaderRef.current, {
        backgroundColor: '#ffffff',
        duration: 2.5,
        ease: 'power2.inOut',
      })
      
      // Invert image colors from white to black
      .to(imageRef.current, {
        filter: 'invert(1) brightness(1)',
        duration: 2,
        ease: 'power2.inOut',
      }, '-=2')
      
      // Fade text color
      .to(textRef.current, {
        color: '#000000',
        duration: 2,
        ease: 'power2.inOut',
      }, '-=2')
      
      // Update dots color
      .to(dotsRef.current, {
        backgroundColor: '#000000',
        duration: 2,
        ease: 'power2.inOut',
      }, '-=2')
      
      // Final scale animation
      .to(imageRef.current, {
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1,
      }, '-=0.5');
    });
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center transition-colors overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        {/* Glow effect behind image */}
        <div
          ref={glowRef}
          className="absolute inset-0 -z-10 blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
          }}
        />

        {/* Main train image */}
        <div className="relative">
          <img
            ref={imageRef}
            src="/pictures/maglev-hyperloop-train-svgrepo-com.png"
            alt="Loading"
            width="180"
            height="180"
            className="drop-shadow-2xl"
            style={{ filter: 'invert(0) brightness(1.2)' }}
          />
          
          {/* Speed lines effect */}
          <div className="absolute top-1/2 -left-20 -translate-y-1/2 flex flex-col gap-3 opacity-30">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-0.5 bg-white rounded-full"
                style={{
                  width: `${60 - i * 15}px`,
                  animation: `slideLeft 1s ease-in-out infinite`,
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading text with enhanced styling */}
        <div className="mt-12 text-center">
          <p
            ref={textRef}
            className="text-white text-2xl font-light tracking-[0.4em] mb-4"
            style={{
              textShadow: '0 0 20px rgba(255,255,255,0.5)',
            }}
          >
            LOADING
          </p>
          
          {/* Animated dots */}
          <div className="flex gap-2 justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                
                className="w-2.5 h-2.5 rounded-full bg-white"
                style={{
                  boxShadow: '0 0 10px rgba(255,255,255,0.5)',
                }}
              />
            ))}
          </div>

          {/* Progress hint */}
          <div className="mt-6 text-white/40 text-xs tracking-widest">
            INITIALIZING
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(-100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}