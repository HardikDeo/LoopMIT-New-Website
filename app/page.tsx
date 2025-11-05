'use client'
import TeamCarousel from '@/components/TeamCarousel';
// Import React hooks for state management and DOM manipulation
import { Suspense, useEffect, useRef, useState } from 'react';
// Import GSAP for animations and ScrollTrigger for scroll-based animations
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Import Lucide React icons for UI elements
import { Menu, Code, Zap, Users, Github, Linkedin, Mail, ArrowRight, X, Play } from 'lucide-react';
// Import custom UI components
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WavyBackground } from '@/components/ui/wavy-background';
import { Carousel } from '@/components/ui/apple-cards-carousel';
import { CarouselItem } from '@/components/ui/carousel';
import { AppleCardsCarousel } from '@/components/ui/cards_carousel';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';
import { Navbar1 } from '@/components/ui/navbar/Navbar';
import AlumniCarousel from '@/components/AlumniCarousel';
import { CoverDemo } from '@/components/ui/speed';
import Sponsors from '@/components/ui/sponsors';
// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
import Footer from '@/components/ui/footer';
import Preloader from '@/components/ui/Preloader';
import Footer1 from '@/components/mvpblocks/footer-4col';

export default function Home() {
  // Refs for DOM elements to target with GSAP animations
  const heroRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);
  const projectsRef = useRef(null);
  const alumniRef = useRef(null);
  // State for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effect to handle video autoplay on component mount
  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Video autoplay failed:', error);
      });
    }
  }, []);

  // Main GSAP animation setup effect
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navigation logo animation - slides in from left
      gsap.from('.nav-logo', {
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Navigation items animation - staggered fade in from top
      gsap.from('.nav-item', {
        opacity: 0,
        y: -20,
        stagger: 0.1,
        duration: 0.6,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Hero title animation - large slide up with fade
      gsap.from('.hero-title', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: 0.5,
        ease: 'power3.out',
      });

      // Hero subtitle animation - slide up with fade
      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      });

      // Hero call-to-action buttons animation - slide up with fade
      gsap.from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.1,
        ease: 'power3.out',
      });

      // Feature cards animation - triggered when scrolling to features section
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      });

      // About content animation - slides in from left
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -60,
        duration: 1.2,
        ease: 'power3.out',
      });

      // About image animation - slides in from right
      gsap.from('.about-image', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: 60,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Project cards animation - triggered when scrolling to projects section
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      });

      // Team member cards animation - scale up with bounce effect
      gsap.from('.team-member', {
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        duration: 0.9,
        ease: 'back.out(1.7)',
      });

      gsap.utils.toArray('.stat-number').forEach((element: any) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
          },
          textContent: 0,
          duration: 2,
          ease: 'power1.inOut',
          snap: { textContent: 1 },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
    
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
 
      {/* Navigation Bar - Fixed at top with backdrop blur */}
      <Navbar1/>

      {/* Hero Section - Full screen with video background */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Video background container */}
        <div className="absolute inset-0 z-0">
        <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Video Background - Auto-playing looped video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        onError={(e) => {
          console.error('Video failed to load:', e);
        }}
        onLoadStart={() => {
          console.log('Video started loading');
        }}
        onCanPlay={() => {
          console.log('Video can play');
        }}
      >
        <source
          src="/videos/hyperloop_video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <LayoutTextFlip />
          
        </div>
      </section>
 {/* About Section - Information about Loopmit */}
 <section id="about" ref={aboutRef} className="py-32 px-6 ">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="about-content">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 mx auto">About <CoverDemo/> </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                Founded in 2019, Loop MIT is the official Hyperloop Student Project Team of MIT, Manipal. Comprising a dynamic group of passionate and skilled students, we are committed to revolutionizing transportation by contributing to the development of Hyperloop, the fifth mode of transportation. With a strong emphasis on sustainability, speed, and safety, we strive to design and innovate high-speed, energy-efficient mobility solutions that push the boundaries of modern engineering. Our team is dedicated to pioneering advancements in magnetic levitation, vacuum tube technology, and aerodynamic optimization to make futuristic transportation a reality.
                </p>
                <p>
                Our commitment and technical prowess have earned us recognition at prestigious international competitions. In both 2022 and 2023, we successfully cleared the first rounds of the highly competitive European Hyperloop Week (EHW), where teams from across the globe showcase cutting-edge Hyperloop technology. These achievements reflect our team's dedication to research, innovation, and excellence in Hyperloop development. Competing on a global stage has provided us with invaluable experience, helping us refine our designs and push technological boundaries.
                </p>
                <p>
                A major milestone in our journey came in 2025, when we successfully completed our first prototype and participated in the GHC competition, held at IIT Madras in February 2025. Our hard work and innovation were recognized as we won the Best Demonstration Award and the Best Mechanical Award, further solidifying our position as one of India's leading student-led Hyperloop research teams. With each step forward, we continue to challenge the limits of engineering and technology, striving to create a more sustainable and efficient future for transportation.
                </p>
              </div>
            </div>
          
            <div className="about-image">
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-gray-800">
                <img
                  src="/pictures/GHC_images/img_3.JPG"
                  alt="Loopmit Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      
      </section>
      
      {/* achievements Section - What We Do */}
      <div  id ="achievements" className="justify-center items-center">
            <AppleCardsCarousel/>
          </div>
          

          
      {/* Team Section - Meet the team members */}
      <section id="team" ref={teamRef} className="py-32 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto">
          
          <div className="text-center mb-16"> 
        </div>
          <TeamCarousel />
        </div>
      </section>
      {/* Alumni Section - Meet the alumni members */}
      <section id="alumni" ref={alumniRef} className="py-32 px-6 bg-[#0a0a0a]">
        <div className="container mx-auto">
          
          <div className="text-center mb-16"> 
        </div>
          <AlumniCarousel />
        </div>
      </section>

      {/* Contact Section - Get in touch */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111111] border-t border-gray-800/50">
        <Sponsors/>
      </section>

      {/* Footer - Site links and information */}
      <footer className="py-12 px-6 border-t border-gray-800/50 bg-[#0a0a0a]">
        <Footer1/>
      </footer>
    </div>
    </>
  );
}
