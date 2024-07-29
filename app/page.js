import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/blog">Go to blog page</Link>
      <Link href="/products">Go to products page</Link>
    </main>
  );
}
