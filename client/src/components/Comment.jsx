import React from 'react';

export default function Comment() {
    return (
        <div className="p-3 flex gap-2">
            <img
                className="w-12 h-12 rounded-full"
                src="https://firebasestorage.googleapis.com/v0/b/meta-99997.appspot.com/o/17112487070570106_hinh-nen-4k-may-tinh32.jpg?alt=media&token=48409e32-f6a1-4d33-b161-27e1acaa933c"
                alt=""
            />
            <div className="w-full rounded-lg p-2 bg-gray-200">
                <h1>Phan Ba Nhat</h1>
                <span className="text-hint text-sm">Comment moi nhat</span>
            </div>
        </div>
    );
}
