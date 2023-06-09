import Link from "next/link";

export default function Project() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-3xl bg-white p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        <ul className="list-disc pl-6">
          <li>
            <Link href="https://github.com/rroobin98/Quiz_Redux.git">Quizz</Link>
          </li>
          <li>
            <Link href="https://github.com/rroobin98/Todoapp-Redux.git">Todo</Link>
          </li>
          <li>
            <Link href="https://github.com/rroobin98/Radio_React.git">Radio</Link>
          </li>
          <li>
            <Link href="https://github.com/rroobin98/Component-library.git">Component</Link>
          </li>
        </ul>
        <div className="mt-6 text-center">
          <Link href="/">Go back</Link>
        </div>
      </div>
    </div>
  );
}
