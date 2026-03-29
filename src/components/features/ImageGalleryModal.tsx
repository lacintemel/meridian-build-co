"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryModalProps {
  images: GalleryImage[];
}

export default function ImageGalleryModal({ images }: ImageGalleryModalProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="relative h-40 md:h-56 overflow-hidden rounded-lg group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-obsidian)]/40 to-transparent group-hover:from-[var(--color-obsidian)]/20 transition-all duration-300" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[var(--color-obsidian)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-obsidian)]/95 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Image */}
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />

              {/* Caption */}
              {selectedImage.caption && (
                <p className="mt-4 text-center text-sm text-[var(--color-silver)]">
                  {selectedImage.caption}
                </p>
              )}

              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 text-[var(--color-gold)] hover:text-[var(--color-platinum)] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <motion.button
                    onClick={() =>
                      setSelectedIndex(
                        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-gold)] hover:text-[var(--color-platinum)] transition-colors"
                    whileHover={{ scale: 1.1, x: -4 }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </motion.button>

                  <motion.button
                    onClick={() =>
                      setSelectedIndex(
                        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-gold)] hover:text-[var(--color-platinum)] transition-colors"
                    whileHover={{ scale: 1.1, x: 4 }}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.button>

                  {/* Counter */}
                  <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-sm text-[var(--color-silver)]">
                    {selectedIndex + 1} / {images.length}
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
