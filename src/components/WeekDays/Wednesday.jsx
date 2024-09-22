import React from 'react';
import PaginationTable from '../PaginationTable/PaginationTable';

function Wednesday() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="flex-1">
        <PaginationTable apiUrl={`${import.meta.env.VITE_BACKEND_URL}/api/wednesday`}/>
      </div>
    </div>
  );
}

export default Wednesday;
