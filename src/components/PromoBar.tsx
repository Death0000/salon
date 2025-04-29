
import { X } from 'lucide-react';

interface PromoBarProps {
  onClose: () => void;
}

const PromoBar = ({ onClose }: PromoBarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-accent text-white px-4 py-2 flex justify-between items-center">
      <div className="hidden sm:block w-8"></div>
      <p className="text-center text-xs sm:text-sm font-medium flex-1 truncate px-2">
        Special Offer: 20% off on all haircuts this week! Use code: AZURE20
      </p>
      <button
        onClick={onClose}
        className="flex-shrink-0 text-white hover:text-white/80 transition-colors duration-200"
        aria-label="Close promotion"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default PromoBar;
