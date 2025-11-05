// components/SubsystemSection.tsx
'use client';

import { useRef, useEffect } from 'react';
import { Subsystem } from '@/types/team';
import { gsap } from 'gsap';
import TeamCard from './TeamCard';

interface SubsystemSectionProps {
  subsystem: Subsystem;
  index: number;
}

export default function SubsystemSection({ subsystem, index }: SubsystemSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !gridRef.current) return;

    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;

    // Initial setup
    gsap.set([header, grid], { opacity: 0, y: 50 });

    // Staggered entrance animation
    const tl = gsap.timeline({
      delay: index * 0.3,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(header, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(grid, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1
    }, "-=0.4");
  }, [index]);

  return (
    <section ref={sectionRef} className="mb-20">
      {/* Subsystem Header */}
      <div ref={headerRef} className="text-center mb-12 opacity-0">
        <div className="inline-flex items-center gap-4 mb-4">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {subsystem.name}
          </h2>
          
        </div>
        
        
      </div>

      {/* Team Members Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto justify-items-center opacity-0"
      >
        {subsystem.members.map((member, memberIndex) => (
          <TeamCard
            key={member.id}
            member={member}
            index={memberIndex}
          />
        ))}
      </div>
    </section>
  );
}