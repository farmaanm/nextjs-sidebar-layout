'use client';

import React from 'react';

export default function Dashboard() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Card 1</h2>
                    <p>Content for card 1</p>
                </div>
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Card 2</h2>
                    <p>Content for card 2</p>
                </div>
                <div className="p-4 bg-white rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Card 3</h2>
                    <p>Content for card 3</p>
                </div>
            </div>
        </div>
    );
}
