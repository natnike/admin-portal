

export default function Home() {
  console.log(process.env.API_KEY);
  const name = process.env.API_KEY
  //const name2 = env('API_KEY');
  return (
    <main className='container'>
      <h1>Home1</h1>
      <h1>{name} DD</h1>
    </main>
  );
}
