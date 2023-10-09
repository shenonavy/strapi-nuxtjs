import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const GetResult = async () => {
      await fetch("http://localhost:1337/api/movies", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.data);
        });
    };
    GetResult();
  }, []);

  return (
    <main className={`min-h-screen ${inter.className}`}>
      <div className="pt-6 px-24">
        <ul>
          {movies.length > 0 ? (
            movies.map((movie: any, index) => (
              <li key={index}>{movie.attributes.movieText}</li>
            ))
          ) : (
            <div>no data</div>
          )}
        </ul>
      </div>
    </main>
  );
}
