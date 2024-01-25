
import React from 'react'

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
        <div className='h-full flex items-center justify-center bg-gray-50'>
            {children}
        </div>
    );
}

export default AuthLayout;
