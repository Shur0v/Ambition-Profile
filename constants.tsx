
import React from 'react';

export const COLORS = {
  primaryYellow: '#FBF4A1',
  darkText: '#1D312C',
  neutral: '#C4BCBB',
  purple: '#C28DBF',
  success: '#DBE8AB'
};

export const BrandMark: React.FC<{ className?: string, variant?: 'standard' | 'personality' }> = ({ className = "h-6 w-6" }) => (
  <img
    src="/Logo mark.png"
    alt="Ambition Profile Mark"
    className={`${className} object-contain`}
  />
);

export const BrandLogo: React.FC<{ className?: string }> = ({ className = "h-32" }) => (
  <img
    src="/Main logo.png"
    alt="Ambition Profile"
    className={`${className} object-contain`}
  />
);

export const GIABadge: React.FC = () => (
  <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm transition hover:shadow-md">
    <img
      src="/Copy of GIA — Logo — Black.png"
      alt="Global Insurance Accelerator"
      className="h-8 w-auto object-contain"
    />
    <div className="h-6 w-[1px] bg-gray-200"></div>
    <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
      Portfolio <br />Company
    </div>
  </div>
);
