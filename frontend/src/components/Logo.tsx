/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "h-9", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon: Stylized 'H' Logo */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto text-white fill-current transition-transform duration-300 hover:scale-105"
        aria-hidden="true"
      >
        {/* Left Stem with swoosh */}
        <path
          d="M22 10 
             C22 10, 26 22, 26 30 
             C26 38, 22 46, 22 55 
             C22 64, 26 72, 26 80 
             C26 88, 22 90, 22 90 
             L36 90 
             C36 90, 40 86, 40 76 
             C40 66, 36 58, 36 49 
             C36 40, 40 32, 40 22 
             C40 12, 36 10, 36 10 
             Z"
        />
        {/* Right Stem with swoosh */}
        <path
          d="M64 10 
             C64 10, 60 22, 60 30 
             C60 38, 64 46, 64 55 
             C64 64, 60 72, 60 80 
             C60 88, 64 90, 64 90 
             L78 90 
             C78 90, 74 86, 74 76 
             C74 66, 78 58, 78 49 
             C78 40, 74 32, 74 22 
             C74 12, 78 10, 78 10 
             Z"
        />
        {/* Smooth Bridge */}
        <path
          d="M34 50 
             C38 52, 44 54, 50 54 
             C56 54, 62 52, 66 50 
             C62 55, 56 57, 50 57 
             C44 57, 38 55, 34 50 
             Z"
        />
      </svg>

      {!iconOnly && (
        <>
          {/* Vertical Separator */}
          <div className="h-7 w-[1.5px] bg-slate-650/80 rounded" />
          
          {/* Brand Name Text: Hoffesoft */}
          <span 
            className="font-display text-xl font-light tracking-wide text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Hoffe<span className="font-normal text-slate-200">soft</span>
          </span>
        </>
      )}
    </div>
  );
}
