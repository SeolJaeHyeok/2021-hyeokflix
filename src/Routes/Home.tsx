import { useQuery } from "react-query";
import { getMovies } from "../api";

function Home() {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data);
  console.log(isLoading);
  return (
    <h1 style={{ backgroundColor: "whitesmoke", height: "200vh" }}>Home</h1>
  );
}

export default Home;
