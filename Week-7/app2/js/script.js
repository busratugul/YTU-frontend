async function filmTurleriCek() {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjcwNjM2OWUyOTQ2NDgxMThiMTk5ZTBlY2Y4MmExYyIsInN1YiI6IjY1Y2YyYmU0ZmRmOGI3MDE0OTY3MDMwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7VqHjMyl4NgOLdUmkIHMN6JTsYwJRBFq49ylvEf4lFE",
        },
      };
  
      const sonuc = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=tr",
        options
      );
  
      const veri = await sonuc.json();
  
      return veri.genres
  
    } catch (hata) {
     console.error(hata.message);
    }
  }
  
  
  async function renderFilmTurleri() {
      const filmTurleri = await filmTurleriCek()
      const ulElemani = document.createElement("ul")
      
      filmTurleri.forEach(eleman => {
          const HTML = `<li>${eleman.name}</li>`
          ulElemani.insertAdjacentHTML("beforeend", HTML)
      });
  
      document.querySelector("#root").append(ulElemani)
  }
  
  
  renderFilmTurleri()
