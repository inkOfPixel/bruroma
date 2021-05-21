import Link from "next/link";
import { DefaultLayout } from "@layouts";

export default function HomePage() {
  return (
    <DefaultLayout title="Bruroma">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </DefaultLayout>
  );
}
