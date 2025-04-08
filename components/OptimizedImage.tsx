'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function OptimizedImage({ src, alt, width, height, className }: { src: string, alt: string, height: number, width: number, className: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={`${className} bg-slate-800`} style={{ aspectRatio: `${width}/${height}` }}></div>;
  }

  return (
    <div className={`${className} overflow-hidden bg-slate-800`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setIsLoading(false)}
        className={isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"}
        unoptimized
      />
    </div>
  );
}
