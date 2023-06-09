import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="navbar">
        <ul className="flex gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/Projects">Projects</Link>
          </li>
          <li>
            <Link href="/cv">CV</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Component {...pageProps} />
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #f8f8f8;
          padding: 10px;
          z-index: 999;
        }
        
        .content {
          padding-top: 40px; /* Adjust this value to give space for the fixed navbar */
        }
      `}</style>
    </>
  );
}
