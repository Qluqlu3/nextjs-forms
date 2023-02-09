export default function Home() {
  return (
    <main className='flex justify-center flex-col items-center p-8'>
      <h1 className='text-white text-7xl font-bold'>タイトル</h1>
      <div className='grid grid-cols-2 w-full mt-10'>
        <div className='flex items-center justify-center w-full text-5xl h-[100px] bg-blue-200'>①</div>
        <div className='flex items-center justify-center w-full h-[100px] text-5xl bg-blue-400'>②</div>
      </div>
    </main>
  );
}
