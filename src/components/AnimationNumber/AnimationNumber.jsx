import { useState, useEffect } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';

// Tohle je vlastní funkce (hook), která umí animovat číslo z hodnoty "start" do hodnoty "target"
export const useAnimatedCount = (start = 0, target) => {
  // Vytvoříme si proměnnou, která umí plynule měnit hodnotu (to je useMotionValue)
  const count = useMotionValue(start);

  // Chceme zobrazovat celé číslo, proto zaokrouhlíme hodnotu, kterou "count" má
  const rounded = useTransform(count, (latest) => Math.round(latest));

  // Místo, kde budeme ukládat aktuální hodnotu, kterou chceme zobrazit na stránce
  const [displayValue, setDisplayValue] = useState(start);

  useEffect(() => {
    // Nastavíme startovní hodnotu (pro jistotu, že začneme od správného čísla)
    count.set(start);

    // Spustíme animaci, která plynule změní "count" ze startu do targetu během 1 sekundy
    const controls = animate(count, target, { duration: 1 });

    // Když se hodnota zaokrouhlená změní, uložíme ji do našeho stavu, aby se zobrazila na stránce
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest);
    });

    // Když se komponenta přestane používat, animaci zastavíme a odhlásíme se od posluchače změn
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [start, target]); // Tohle říká Reactu, že když se změní start nebo target, animaci spustíme znovu

  // Vracíme aktuální hodnotu, kterou můžeme zobrazit v komponentě
  return displayValue;
};
