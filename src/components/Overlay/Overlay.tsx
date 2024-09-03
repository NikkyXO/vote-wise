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
    <div className="fixed inset-0 z-50 flex  justify-center bg-black bg-opacity-60 w-full h-full">
      {children}
    </div>
  );
};

export default Overlay;
