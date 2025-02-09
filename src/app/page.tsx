

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const name = process.env.NEXT_PUBLIC_API_URL
  //const name2 = env('API_KEY');
  return (
    <main className='container'>
      <h1>Home1</h1>
      <h1>{name} D1D</h1>
    </main>
  );
}
