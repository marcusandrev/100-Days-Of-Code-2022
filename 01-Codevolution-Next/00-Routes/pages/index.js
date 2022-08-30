import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.replace('/product');
    // you can also use router.push here
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>

      <Link href='/product'>
        <a>Products</a>
      </Link>

      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;
