"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type OptimizedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export default function OptimizedImage({ src, alt, width, height, className = '' }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const placeholder = isLoading ? "scale-110 blur-sm" : "scale-100 blur-0";

  if (!isMounted) {
    return (
      <div
        className={`bg-slate-800 rounded ${className}`}
        style={{ aspectRatio: `${width} / ${height}` }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={() => setIsLoading(false)}
      unoptimized
      className={`
        ${className}
        object-cover object-center
        transition-all duration-700 ease-in-out
        ${placeholder}`}
    />
  );
}

