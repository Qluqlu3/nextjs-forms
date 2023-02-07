import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <Link href='/form' className='text-gray-800'>
          フォーム機能
        </Link>
      </div>
    </main>
  );
}
