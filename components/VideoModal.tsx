"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-white/20 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-6"
          >
            <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl">
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
              <video className="w-full aspect-video" controls autoPlay loop playsInline>
                {/* Path corrected to root and filename matched to your file */}
                <source src="/metro-mita-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}