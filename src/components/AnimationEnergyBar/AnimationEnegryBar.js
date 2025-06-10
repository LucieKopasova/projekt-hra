import { useRef } from 'react';
import { animate } from 'framer-motion';

export const useEnergyAnimation = (particleCount = 5) => {
  const particlesRef = useRef(null);
  const chargeRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMove = () => {
    if (!particlesRef.current || !chargeRef.current || !buttonRef.current)
      return; // kotroluje že jsou EnergyBar a příklady na místě

    particlesRef.current.innerHTML = ''; // Vyčistit předchozí částice

    // aktuální pozice prvku
    const sourceRect = chargeRef.current.getBoundingClientRect();
    const targetRect = buttonRef.current.getBoundingClientRect();

    //vytvoření prvku a jeho stylů
    for (let i = 0; i < particleCount; i++) {
      const particleEl = document.createElement('div');
      particleEl.style.position = 'absolute';
      particleEl.style.width = '30px';
      particleEl.style.height = '30px';
      particleEl.style.backgroundColor = 'var(--color-background_title)';
      particleEl.style.borderRadius = '50%';
      particleEl.style.opacity = '1';
      particleEl.style.transformOrigin = 'center';

      // Umístění na střed EnergyBaru
      const startX = sourceRect.left + sourceRect.width / 2 - 100;
      const startY = sourceRect.top + (sourceRect.height * 3) / 4;

      particleEl.style.left = `${startX}px`;
      particleEl.style.top = `${startY}px`;

      // výpočet toho kam mají častice dopadnout
      const endX = targetRect.left + targetRect.width / 2;
      const endY = targetRect.top + targetRect.height / 2;

      //trasa mezi startovní pozici a cílovou
      const deltaX = endX - startX;
      const deltaY = endY - startY;

      //zobrazení častice
      particlesRef.current.appendChild(particleEl);

      //animace z knihovny Framer-motion
      animate(
        particleEl,
        {
          x: deltaX,
          y: deltaY,
          opacity: 0,
          scale: 0.3,
        },
        {
          delay: i * 0.1,
          duration: 0.8,
          ease: 'easeInOut',
          onComplete: () => {
            particleEl.remove();
          },
        },
      );
    }
  };

  return {
    particlesRef,
    chargeRef,
    buttonRef,
    handleMove,
  };
};
