import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const F1Background = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

    // Create the "Red Particle / Starfield" effect
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 3000; // Increased density for "Premium" feel
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 12; // Spread them out
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.008,
      color: '#E10600', // Formula 1 Racing Red
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0008;
      particles.rotation.x += 0.0004;
      renderer.render(scene, camera);
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    }
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0e0e0e]" />;
};

export default F1Background;
