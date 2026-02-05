import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Placeholder photos - replace with actual photos
const placeholderPhotos = [
  { id: 1, src: '/photos/photo1.jpg', alt: 'Memory 1' },
  { id: 2, src: '/photos/photo2.jpg', alt: 'Memory 2' },
  { id: 3, src: '/photos/photo3.jpg', alt: 'Memory 3' },
  { id: 4, src: '/photos/photo4.jpg', alt: 'Memory 4' },
  { id: 5, src: '/photos/photo5.jpg', alt: 'Memory 5' },
  { id: 6, src: '/photos/photo6.jpg', alt: 'Memory 6' },
];

const PhotoCard = ({
  photo,
  index,
  onClick,
}: {
  photo: (typeof placeholderPhotos)[0];
  index: number;
  onClick: () => void;
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.03, zIndex: 10 }}
      className="relative aspect-square cursor-pointer group"
      onClick={onClick}
    >
      {/* Heart-shaped overlay frame */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        {!imageError ? (
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          // Placeholder when no image
          <div className="w-full h-full bg-gradient-to-br from-purple/30 to-pink/30 flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl block mb-2">📷</span>
              <span className="text-purple-light/60 text-sm">Add Photo</span>
            </div>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Border */}
        <div className="absolute inset-0 border-2 border-purple-light/30 rounded-2xl group-hover:border-pink/50 transition-colors duration-300" />

        {/* Corner hearts */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute top-2 right-2 text-xl opacity-80"
        >
          💜
        </motion.span>
      </div>
    </motion.div>
  );
};

const PhotoGallery = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [selectedPhoto, setSelectedPhoto] = useState<
    (typeof placeholderPhotos)[0] | null
  >(null);

  return (
    <section ref={ref} className="relative min-h-screen py-20 px-4 md:px-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="font-script text-4xl md:text-5xl lg:text-6xl text-gradient mb-4">
          Our Memories
        </h2>
        <p className="text-purple-light/70 text-lg md:text-xl mb-4">
          Moments that make my heart smile
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple to-pink mx-auto rounded-full" />
      </motion.div>

      {/* Photo grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {placeholderPhotos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            index={index}
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/95 backdrop-blur-md p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] rounded-2xl overflow-hidden border-2 border-purple-light/30"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-purple/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-pink/50 transition-colors"
              >
                ✕
              </button>

              {/* Heart decoration */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-3xl"
                >
                  💜
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default PhotoGallery;
