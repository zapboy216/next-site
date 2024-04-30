// app/components/ui/HamburgerMenu.tsx

'use client';

import { Menu, X } from 'lucide-react';

interface HamburgerMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggle }) => {
  return (
    <button
      className="block p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring lg:hidden"
      onClick={toggle}
      aria-label="Toggle navigation"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default HamburgerMenu;
