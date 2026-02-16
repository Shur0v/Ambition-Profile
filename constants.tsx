
import React from 'react';

export const COLORS = {
  primaryYellow: '#FBF4A1',
  darkText: '#1D312C',
  neutral: '#C4BCBB',
  purple: '#C28DBF',
  success: '#DBE8AB'
};

export const BrandMark: React.FC<{ className?: string, variant?: 'standard' | 'personality' }> = ({ className = "h-6 w-6", variant = 'standard' }) => (
  <div className={`grid grid-cols-2 gap-1.5 ${className}`}>
    <div className="w-full h-full rounded-full bg-primary"></div>
    <div className={`w-full h-full rounded-full ${variant === 'personality' ? 'bg-secondary' : 'bg-secondary'}`}></div>
    <div className={`w-full h-full rounded-full ${variant === 'personality' ? 'bg-accent' : 'bg-secondary'}`}></div>
    <div className={`w-full h-full rounded-full ${variant === 'personality' ? 'bg-neutral' : 'bg-secondary'}`}></div>
  </div>
);

export const BrandLogo: React.FC<{ className?: string }> = ({ className = "h-12" }) => (
  <div className={`flex flex-col items-start leading-none ${className} select-none`}>
    <div className="relative">
      <span className="text-3xl font-bold lowercase tracking-tighter text-secondary">ambition</span>
      <div className="absolute -bottom-1 left-0 w-full h-2 bg-primary -z-10 opacity-60"></div>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-3xl font-bold lowercase tracking-tighter text-secondary">profile</span>
      <BrandMark className="h-4 w-4" />
    </div>
  </div>
);

export const GIABadge: React.FC = () => (
  <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm transition hover:shadow-md">
    <img 
      src="https://globalinsuranceaccelerator.com/wp-content/uploads/2021/01/gia_logo_vertical_black-1.png" 
      alt="Global Insurance Accelerator" 
      className="h-8 grayscale contrast-125"
    />
    <div className="h-6 w-[1px] bg-gray-200"></div>
    <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
      Portfolio <br/>Company
    </div>
  </div>
);
