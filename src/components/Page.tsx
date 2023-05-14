import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';

export default function Page({children}: {children: React.ReactNode}) {
  return (
    <div className="px-4">
      <Header />
      <Sidebar />
      <main>
        <div className="w-full md:w-3/4 md:max-w-[815px] mx-auto pb-14 md:pb-0">
          {children}
        </div>
      </main>
    </div>
  );
}
