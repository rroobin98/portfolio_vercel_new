import Link from "next/link";

export default function CVPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-3xl bg-white p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">My CV</h1>
        <div className="flex justify-center">
          <a href="cv_robin.pdf" download>
            <img
              src="cv.PNG"
              alt="CV"
              className="w-80 h-auto cursor-pointer"
            />
          </a>
        </div>
        <div className="mt-6 text-center">
          <Link href="/">Go back</Link>
        </div>
      </div>
    </div>
  );
}
