import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-slate-100 p-5 rounded-xl shadow-2xl w-[80%] md:w-[50%] max-w-2xl relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-black">
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;