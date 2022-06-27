import React from 'react';

// import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronogramas de aulas
      </span>
    </aside>
  );
};

export default Sidebar;
