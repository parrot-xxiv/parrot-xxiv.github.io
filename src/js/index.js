import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// fix this future self, maybe i dont really need gsap for this
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Sections and corresponding links/spans
  const sections = ["about", "experiences", "projects"];
  const links = sections.map((section) => document.querySelector(`a[href="#${section}"]`));
  const spans = sections.map((section) => document.querySelector(`span[data-target="${section}"]`));

  // Helper function to update classes
  function updateActiveClasses(activeIndex) {
    links.forEach((link, index) => {
      // Remove active classes from all links
      link.classList.remove("text-white", "font-semibold");
      // Add active class to the current link
      if (index === activeIndex) {
        link.classList.add("text-white", "font-semibold");
      }
    });

    spans.forEach((span, index) => {
      // Remove width classes from all spans
      span.classList.remove("w-10", "w-4");
      // Add the correct width class to the active span
      span.classList.add(index === activeIndex ? "w-10" : "w-4");
    });
  }

  // Initial state (start at section 1)
  updateActiveClasses(0);

  // ScrollTrigger logic
  ScrollTrigger.create({
    onUpdate: (e) => {
      const progress = e.progress;

      if (progress <= 0.33) {
        updateActiveClasses(0); // section 1
      } else if (progress <= 0.66) {
        updateActiveClasses(1); // section 2
      } else {
        updateActiveClasses(2); // section 3
      }
    },
  });

  //
  // document.querySelector('.bg-slate-900').classList.remove('bg-slate-900');

  // Create the scene, camera, and renderer
  const scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x0f172a);
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // const renderer = new THREE.WebGLRenderer({ antialias: true });

  // Create renderer with alpha for transparency
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x0f172a, 1);
  document.body.appendChild(renderer.domElement);

  // Apply Tailwind classes (or similar) to position the canvas if desired
  // renderer.domElement.classList.add("fixed", "inset-0", "-z-10");

  // Set initial opacity to 0, then trigger a fade-in
  renderer.domElement.style.opacity = 0;
  // Force reflow so the transition applies
  renderer.domElement.getBoundingClientRect();
  renderer.domElement.style.transition = "opacity 2s ease-in-out";
  renderer.domElement.style.opacity = 1;

  // Create a group for the particles
  const particleGroup = new THREE.Group();
  scene.add(particleGroup);

  // Create a particle system with BufferGeometry
  const particlesCount = 1000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    // Spread particles within a 20 unit cube centered at origin
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

  // Adjust renderer size on window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

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
});
