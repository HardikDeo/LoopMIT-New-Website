// components/TeamSection.tsx
'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { subsystems } from '@/types/alumni';
import SubsystemSection from './ui/team /SubsystemSection';
import { Cover } from './ui/cover';
// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AlumniCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !headerRef.current) return;

    const container = containerRef.current;
    const header = headerRef.current;

    // Header animation
    gsap.fromTo(header,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      }
    );

    // Section animations
    gsap.utils.toArray('.subsystem-section').forEach((section: any) => {
      gsap.fromTo(section,
        {
          opacity: 0,
          y: 80
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg- from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div ref={headerRef} className="text-center mb-20 opacity-0">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-600 to-neutral-400 bg-clip-text text-transparent">
        <Cover>MEET OUR ALUMNI</Cover>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          The visionary minds who built the foundation of LoopMIT and continue to inspire future generations.
          </p>
        </div>

        {/* Subsystem Sections */}
        <div className="space-y-24">
          {subsystems.map((subsystem, index) => (
            <div key={subsystem.id} className="subsystem-section">
              <SubsystemSection 
                subsystem={subsystem} 
                index={index}
              />
            </div>
          ))}
        </div>

        
        
      </div>
    </div>
  );
}