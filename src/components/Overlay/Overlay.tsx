// components/Overlay.tsx
import React from 'react';

interface OverlayProps {
  showOverlay: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({
  showOverlay,
  onClose,
  children,
}) => {
  if (!showOverlay) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 w-full h-full border-2">
      {children}
    </div>
  );
};

export default Overlay;
