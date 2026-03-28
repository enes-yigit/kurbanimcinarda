"use client";

import React, { useState } from 'react';

export interface AccordionItemData {
  id: number;
  title: string;
  subtitle?: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[420px] rounded-3xl overflow-hidden cursor-pointer flex-shrink-0
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[380px]' : 'w-[62px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Caption */}
      <div
        className={`
          absolute transition-all duration-500 ease-in-out text-white
          ${isActive
            ? 'bottom-6 left-6 right-6 opacity-100'
            : 'bottom-20 left-1/2 -translate-x-1/2 opacity-80 whitespace-nowrap'}
        `}
        style={!isActive ? { writingMode: 'vertical-rl', transform: 'translateX(-50%) rotate(180deg)' } : {}}
      >
        <p className={`font-bold leading-tight ${isActive ? 'text-[18px]' : 'text-[13px]'}`}>
          {item.title}
        </p>
        {isActive && item.subtitle && (
          <p className="text-[13px] text-white/70 mt-1 font-medium">{item.subtitle}</p>
        )}
      </div>
    </div>
  );
};

interface InteractiveImageAccordionProps {
  items: AccordionItemData[];
  defaultIndex?: number;
}

export function InteractiveImageAccordion({ items, defaultIndex = 0 }: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="w-full">
      {/* Masaüstü: accordion */}
      <div className="hidden md:flex flex-row items-center gap-2.5">
        {items.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Mobil: aktif görseli tam genişlik göster, altında küçük thumbnails */}
      <div className="md:hidden w-full">
        <div className="relative w-full h-[280px] rounded-3xl overflow-hidden">
          <img
            src={items[activeIndex].imageUrl}
            alt={items[activeIndex].title}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-5 left-5 text-white">
            <p className="text-[17px] font-bold">{items[activeIndex].title}</p>
            {items[activeIndex].subtitle && (
              <p className="text-[13px] text-white/75 mt-0.5">{items[activeIndex].subtitle}</p>
            )}
          </div>
        </div>
        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 relative h-[64px] w-[88px] rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                index === activeIndex ? 'border-orange-500 opacity-100' : 'border-transparent opacity-60'
              }`}
            >
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
