import { useEffect, useState } from "react";

export default function About() {
  const [cvData, setCVData] = useState({
    name: "Robin Lundström",
    email: "rroobin98@hotmail.com",
    phone: "0702474764",
    education: "Frontend developer",
    experience: "Wise IT",
  });

  function getCVData() {
    fetch("http://localhost:3000/api/cv")
      .then((response) => response.json())
      .then((data) => setCVData(data));
  }

  useEffect(() => {
    getCVData();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-3xl bg-white p-8 shadow-md rounded-md">
        <h1 className="text-3xl font-bold mb-4">Name: {cvData.name}</h1>
        <p className="text-lg">Email: {cvData.email}</p>
        <p className="text-lg">Phone: {cvData.phone}</p>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <p className="text-lg">{cvData.education}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Experience</h2>
          <p className="text-lg">{cvData.experience}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">About Me</h2>
          <p>
            Mitt namn är Robin Lundström, jag brinner för webbutveckling och att lära mig nya tekniker inom just webb. Har sedan jag började webb & applikations linjen på gymnasiet år 2015 hållt på med att koda olika projekt och utforskat olika webbspråk. Har studerat på IT-högskolan i Göteborg inom webbutveckling och haft ett flertal jobb inom lager under tiden som studierna.
          </p>
          <p>
            På grund av pandemin som blev som värst under dessa två år försvann också många möjligheter att starta min webbkarriär. Under tiden fick jag jobb på H&M lager där jag idag jobbar som lagerarbetare.
          </p>
          <p>
            Trots detta har inte mitt driv för kodning ändrats, snarare blivit ännu mer motiverad att hålla mina kunskaper inom kodning och webbuppdaterade. Jag satsar på att hela tiden utvecklas och bli en bättre kodare för framtida projekt och andra möjligheter.
          </p>
        </div>
      </div>
    </div>
  );
}
