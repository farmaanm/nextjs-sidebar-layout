'use client'

import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    return (
        <div className="flex flex-col w-full items-center justify-center p-6 md:p-10">

            <div className="w-full max-w-sm mt-10">
                <form className="flex flex-col space-y-4">
                    <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded" />
                    <input type="password" placeholder="Password" className="p-2 border border-gray-300 rounded" />
                    <button type="button" onClick={() => router.push('/dashboard')} className="p-2 bg-blue-500 text-white rounded">Sign In</button>
                </form>
            </div>
        </div>
    )
}
