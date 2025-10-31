"use client";
import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState } from 'react';
import './Stack.css';

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 300, height: 300 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
        { id: 1, img: "/carousel/6E39C97E-70C8-47C9-AD07-62A7632FB4F9.jpeg.jpg" },
        { id: 2, img: "/carousel/367A8900-99C2-45B4-9447-5565867A8AB9.jpeg.jpg" },
        { id: 3, img: "/carousel/A0A31AA0-7A51-4E6D-8314-ADE3148ADA0F.jpeg.jpg" },
        { id: 4, img: "/carousel/C10538C7-C6AF-442D-A9F7-F41C9351FA91.jpeg.jpg" },
        { id: 5, img: "/carousel/IMG_1688.jpeg.jpg" },
        { id: 6, img: "/carousel/IMG_2337.jpeg.jpg" },
        { id: 7, img: "/carousel/IMG_2986.jpeg.jpg" },
        { id: 8, img: "/carousel/IMG_2987.jpeg.jpg" },
        { id: 9, img: "/carousel/IMG_3323.jpeg.jpg" },
        { id: 10, img: "/carousel/IMG_3326.jpeg.jpg" },
        { id: 11, img: "/carousel/IMG_3558.jpeg.jpg" },
        { id: 12, img: "/carousel/IMG_4032.jpeg.jpg" },
        { id: 13, img: "/carousel/IMG_4060.jpeg.jpg" },
        { id: 14, img: "/carousel/IMG_4390.jpeg.jpg" },
        { id: 15, img: "/carousel/IMG_4394.jpeg.jpg" }
      ]
  );

  const sendToBack = id => {
    setCards(prev => {
      const newCards = [...prev];
      const index = newCards.findIndex(card => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="stack-container mx-auto relative mb-6 h-[400px] w-[300px]"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        const imgSrc = typeof card.img === 'string' ? card.img : card.img?.src || '';

        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              className="card"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: '90% 90%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height
              }}
            >
              <img src={imgSrc} alt={`card-${card.id}`} className="card-image w-full h-auto" />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
