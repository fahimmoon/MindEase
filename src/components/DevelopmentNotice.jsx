import { motion } from 'framer-motion';

function DevelopmentNotice({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <span className="text-2xl mr-2">🚧</span>
            <h2 className="text-xl font-semibold text-gray-800">Development Notice</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>
        <p className="text-gray-600 mb-4">
          This website is currently under development. Some features may not work as expected.
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#2C7A61] text-white rounded-lg hover:bg-[#276954] transition-colors"
          >
            I understand
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default DevelopmentNotice;
