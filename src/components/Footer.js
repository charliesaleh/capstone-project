import React from "react"

export default function Footer() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-dark text-muted">
        <section class="bg-dark">
          <div class="container text-center text-md-start mt-5 bg-dark">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h5 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>What is Anime
                </h5>
                <p>
                  Anime is Japanese animation. It is a unique phenomenon in the
                  history of world film. Anime is now one of the largest
                  entertainment industry in Japan. In the 20th century, Japanese
                  animation or anime superbly grow, it 's also popular with the
                  development of the comic Japanese, Manga.
                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h5 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Products
                </h5>
                <p>
                  <a href="/animebooks" class="text-reset">
                    Light Novels/ Mangas/ Manwhas
                  </a>
                </p>
                <p>
                  <a href="/animevideos" class="text-reset">
                    DVDs/ Blu-Rays
                  </a>
                </p>
                <p>
                  <a href="/animealbums" class="text-reset">
                    Albums
                  </a>
                </p>
                <p>
                  <a href="/animegames" class="text-reset">
                    Games
                  </a>
                </p>
                <p>
                  <a href="/animemerchandise" class="text-reset">
                    Merchandise
                  </a>
                </p>
                <p>
                  <a href="/animefigures" class="text-reset">
                    Figures
                  </a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h5 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Useful links
                </h5>
                <p>
                  <a href="https://www.crunchyroll.com/" class="text-reset">
                    Crunchyroll
                  </a>
                </p>
                <p>
                  <a href="https://www.funimation.com/" class="text-reset">
                    Funimation
                  </a>
                </p>
                <p>
                  <a href="https://vrv.co/" class="text-reset">
                    VRV
                  </a>
                </p>
                <p>
                  <a href="https://www.rightstufanime.com/" class="text-reset">
                    Rightstuf
                  </a>
                </p>
              </div>
              <div class="video ratio ratio-16x9" style={{ width: "41%" }}>
                <iframe
                  src="https://youtube.com/embed/V_MX0HiIgRQ"
                  title="YouTube video"
                  allowfullscreen="true"
                ></iframe>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </section>
      </footer>
    </div>
  )
}
