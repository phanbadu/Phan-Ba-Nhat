import React from 'react';
import Header from '../components/Header';

export default function Users() {
    return (
        <div className="w-full h-full py-10 bg-slate-200 py-3xl">
            <div
                className="
                    container 
                    m-auto 
                    xl:max-w-7xl 
                    md:max-w-4xl 
                    sm:max-w-xl
                    max-w-sm
                "
            >
                <Header />
            </div>
        </div>
    );
}
