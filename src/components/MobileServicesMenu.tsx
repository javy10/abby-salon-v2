
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileServicesMenuProps {
  categories: { id: string; name: string }[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const MobileServicesMenu: React.FC<MobileServicesMenuProps> = ({
  categories,
  selectedCategory,
  onCategorySelect
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="w-full flex items-center justify-between mb-4"
      >
        <span>Categorías de Servicios</span>
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-background border rounded-lg shadow-lg mb-6 max-h-60 overflow-y-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`w-full text-left px-4 py-3 border-b last:border-b-0 transition-colors ${
                selectedCategory === category.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileServicesMenu;
