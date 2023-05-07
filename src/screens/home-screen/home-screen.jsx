import React from "react";
import { requests } from "../../utils/requests";

import Navbar from "../../components/navbar/navbar.component";
import Banner from "../../components/banner/banner.component";
import Row from "../../components/row/row.component";
import "./home-screen.css";

function HomeScreen() {
  return (
    <div className="home-screen">
      <Navbar />

      <Banner />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries Movies" fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}

export default HomeScreen;
