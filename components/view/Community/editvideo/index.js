'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EditVideoPage() {
  const router = useRouter();

  // When user visits /edit-video, redirect to /edit-video/details
  useEffect(() => {
    router.replace('/edit-video/details');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-700">
      <div className="text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mx-auto mb-3"></div>
        <p className="text-lg font-medium">Loading Video Details...</p>
      </div>
    </div>
  );
}
