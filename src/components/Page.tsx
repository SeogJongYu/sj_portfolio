import React, {useState} from 'react';

import Header from './Header';
import Sidebar from './Sidebar';

export default function Page({children}: {children: React.ReactNode}) {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className="px-4">
      <Header onMenuClick={() => setShowSidebar(!showSidebar)} />
      <Sidebar isActive={showSidebar} />
      <main>
        <div className="w-full md:w-3/4 md:max-w-[815px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
