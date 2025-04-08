'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer with alpha for transparency
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0f172a, 1);
    document.body.appendChild(renderer.domElement);
    
    // Apply Tailwind classes to position the canvas
    renderer.domElement.classList.add("fixed", "inset-0", "-z-10");
    
    // Set initial opacity to 0, then trigger a fade-in
    renderer.domElement.style.opacity = '0';
    renderer.domElement.getBoundingClientRect(); // Force reflow
    renderer.domElement.style.transition = "opacity 2s ease-in-out";
    renderer.domElement.style.opacity = '1';
    
    // Create a group for the particles
    const particleGroup = new THREE.Group();
    scene.add(particleGroup);
    
    // Create a particle system with BufferGeometry
    const particlesCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Use a PointsMaterial to style the particles
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.005,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true
    });
    const particles = new THREE.Points(geometry, material);
    particleGroup.add(particles);
    
    // Variables to store mouse coordinates normalized to [-1, 1]
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    });
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    // Adjust renderer size on window resize
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      // Rotate the particle group in response to mouse movements
      particleGroup.rotation.y += (mouseX * 0.1 - particleGroup.rotation.y) * 0.05;
      particleGroup.rotation.x += (mouseY * 0.1 - particleGroup.rotation.x) * 0.05;
      // Add a subtle constant rotation for a floating effect
      particleGroup.rotation.z += 0.001;
      renderer.render(scene, camera);
    }
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={canvasRef}></div>;
}