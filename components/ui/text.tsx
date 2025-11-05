"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
 
const words = `Innovating the future through technology and creativity. A student-driven initiative pushing boundaries.
`;
 
export function Text() {
  return <TextGenerateEffect words={words} />;
}