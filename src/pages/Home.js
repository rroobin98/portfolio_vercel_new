import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-3xl bg-white p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
        <ul className="list-disc pl-6">
          <li className="text-lg">
            <Link href="/about">About</Link>
          </li>
          <li className="text-lg">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="text-lg">
            <Link href="/cv">CV</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
