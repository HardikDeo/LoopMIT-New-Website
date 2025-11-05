// components/TeamCard.tsx
'use client';

import { useRef, useEffect } from 'react';
import { TeamMember } from '@/types/team';
import { gsap } from 'gsap';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const linkedinRef = useRef<HTMLAnchorElement>(null);
  const frontImageRef = useRef<HTMLDivElement>(null);
  const backImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !frontRef.current || !backRef.current) return;

    const card = cardRef.current;
    const front = frontRef.current;
    const back = backRef.current;
    const linkedin = linkedinRef.current;
    const frontImage = frontImageRef.current;
    const backImage = backImageRef.current;

    // Initial setup
    gsap.set(back, { rotationY: -180, opacity: 0 });
    gsap.set(card, { opacity: 0, y: 30 });
    gsap.set(frontImage, { scale: 1.1 });
    gsap.set(backImage, { scale: 1.1 });

    // Entrance animation
    const entranceTl = gsap.timeline({
      delay: index * 0.15
    });
    
    entranceTl.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }).to([frontImage, backImage], {
      scale: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.6");

    const handleMouseEnter = () => {
      const tl = gsap.timeline();
      
      tl.to(card, {
        scale: 1.05,
        y: -5,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(front, {
        rotationY: 180,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, 0)
      .to(back, {
        rotationY: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut"
      }, 0)
      .to(frontImage, {
        scale: 1.15,
        duration: 0.8,
        ease: "power2.out"
      }, 0)
      .to(backImage, {
        scale: 1.05,
        duration: 0.8,
        ease: "power2.out"
      }, 0)
      .fromTo(linkedin, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        "-=0.3"
      );
    };

    const handleMouseLeave = () => {
      const tl = gsap.timeline();
      
      tl.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(back, {
        rotationY: -180,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut"
      }, 0)
      .to(front, {
        rotationY: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut"
      }, 0)
      .to([frontImage, backImage], {
        scale: 1.1,
        duration: 0.8,
        ease: "power2.out"
      }, 0);
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="team-card cursor-pointer opacity-0 w-full max-w-sm"
    >
      <div className="card-inner relative w-full h-96 perspective-1000">
        {/* Front of Card with Image Background */}
        <div
          ref={frontRef}
          className="card-face absolute inset-0 rounded-2xl shadow-2xl overflow-hidden backface-hidden flex flex-col justify-end border-2 border-white/20"
        >
          {/* Background Image */}
          <div
            ref={frontImageRef}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${member.image})` }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2 text-white">
              {member.name}
            </h3>
            <p className="text-blue-300 font-semibold text-lg mb-4">
              {member.position}
            </p>
            
          </div>
        </div>

        {/* Back of Card with Image Background */}
        <div
          ref={backRef}
          className="card-face absolute inset-0 rounded-2xl shadow-2xl overflow-hidden backface-hidden flex flex-col justify-between p-6 border-2 border-white/20"
        >
          {/* Background Image */}
          <div
            ref={backImageRef}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${member.image})` }}
          />
          
          {/* Darker Overlay for Better Readability */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
          
          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              {member.name}
            </h3>
            <p className="text-white/90 leading-relaxed text-center text-sm line-clamp-5">
              {member.description}
            </p>
          </div>
          
          {/* LinkedIn Button */}
          <div className="relative z-10 flex justify-between items-center">
            <a
              ref={linkedinRef}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition-all duration-300 opacity-0 hover:scale-105 hover:shadow-xl border border-blue-400/30"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="text-white font-medium text-sm">Connect</span>
            </a>
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
}