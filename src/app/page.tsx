

export default function Home() {
  console.log(process.env.API_KEY);
  // const apikey = process.env.API_KEY
  // const browser = process.env.NEXT_PUBLIC_BROWSER_VARIABLE
  // const runtime = process.env.RUNTIME_VARIABLE
  //const name2 = env('API_KEY');
  return (
    <main className='container'>
      <h1>Home1</h1>
      <h1>apikey: {process.env.API_KEY}</h1>
      <h1>BROWSER_VARIABLE: {process.env.NEXT_PUBLIC_BROWSER_VARIABLE}</h1>
      <h1>RUNTIME_VARIABLE: {process.env.RUNTIME_VARIABLE}</h1>
    </main>
  );
}
