function createShowPanel() {
  const main = document.querySelector("#shows-api-panel");

  const existsShowSearched = document.querySelector(".body_info");
  if (existsShowSearched) {
    existsShowSearched.remove();
  }

  const existsEpisodesByInfoPanel = document.querySelector(".episodes-by-season-info-panel")
  if(existsEpisodesByInfoPanel){
    existsEpisodesByInfoPanel.remove();
  }


  manageMain(main);
}

async function manageMain(main) {
  const url = "http://www.omdbapi.com/?t=";
  const show_to_be_searched = document.querySelector("#target_show");

  const show_name = show_to_be_searched.value.replaceAll(" ", "+");
  const response = await fetch(`${url}${show_name}&apikey=5c7e9213`);
  try {
    const result = await response.json();
    const show_main_info = createShowMainInfoPanel(result);
    fillSeasonByEpisodesInfo(result).then((res) => main.appendChild(res));
    main.appendChild(show_main_info);
  } catch (error) {
    console.error(error);
  }
}

function createShowMainInfoPanel(result) {
  const body_info_main = document.createElement("div");
  body_info_main.classList.add("body_info");

  const show_card = document.createElement("div");
  createPosterImage(show_card, result.Poster)
  show_card.classList.add("show_card");

  const show_info = fillShowInfo(result);

  body_info_main.appendChild(show_card);
  body_info_main.appendChild(show_info);

  return body_info_main;
}

function fillShowInfo(result) {
  const show_info = document.createElement("div");
  show_info.classList.add("show_info");

  const showPanelInfo = createShowInfo(
    result.Title,
    result.Year,
    result.Genre,
    result.Writer,
    result.Actors,
    result.Plot,
    result.imdbRating,
  );

  showPanelInfo.forEach((info) => {
    show_info.appendChild(info);
  });

  return show_info;
}

function createShowInfo(title, year, genre, writer, actors, plot, imdbrating) {
  const show_title = document.createElement("h1");
  const show_running_period = document.createElement("h3");
  const show_genres = document.createElement("label");
  const show_writers = document.createElement("label");
  const show_main_actors = document.createElement("label");
  const show_plot = document.createElement("p");
  const show_rating = document.createElement("label");

  show_title.textContent = title;
  show_running_period.textContent = year;
  show_genres.textContent = `Gênero(s): ${genre}`;
  show_writers.textContent = `Escritores: ${writer}`;
  show_main_actors.textContent = `Atores: ${actors}`;
  show_plot.textContent = `Sinopse: ${plot}`;
  show_rating.textContent = `Rating: ${imdbrating}/10`;

  return [
    show_title,
    show_running_period,
    show_genres,
    show_writers,
    show_main_actors,
    show_plot,
    show_rating,
  ];
}


async function fillSeasonByEpisodesInfo(result) {
  const panel = document.createElement("div");
  panel.classList.add("episodes-by-season-info-panel");

  const seasons = [];
  let maxEpisodes = 0;

  for (let i = 1; i <= parseInt(result.totalSeasons); i++) {
    const season_response = await fetch(
      `https://www.omdbapi.com/?i=${result.imdbID}&Season=${i}&apikey=5c7e9213`
    );

    const season_result = await season_response.json();

    seasons.push(season_result);

    maxEpisodes = Math.max(
      maxEpisodes,
      season_result.Episodes.length
    );
  }

  panel.style.gridTemplateColumns =
    `100px repeat(${maxEpisodes}, 1fr)`;

  const empty = document.createElement("div");
  empty.classList.add("grid-cell");
  panel.appendChild(empty);

  for (let ep = 1; ep <= maxEpisodes; ep++) {
    const header = document.createElement("div");
    header.classList.add("grid-cell");
    header.textContent = `EP${ep}`;
    panel.appendChild(header);
  }

  for (let seasonIndex = 0; seasonIndex < seasons.length; seasonIndex++) {
    const season = seasons[seasonIndex];

    const seasonLabel = document.createElement("div");
    seasonLabel.classList.add("grid-cell");
    seasonLabel.textContent = `S${seasonIndex + 1}`;

    panel.appendChild(seasonLabel);

    for (let ep = 0; ep < maxEpisodes; ep++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");

      if (ep < season.Episodes.length) {
        cell.innerHTML =
          `EP${ep + 1}<br>${season.Episodes[ep].imdbRating}/10`;
      }

      panel.appendChild(cell);
    }
  }

  return panel;
}

function createPosterImage(show_card, poster_img){
  const img = document.createElement("img")
  img.src = poster_img
  img.classList.add("poster_image")
  show_card.appendChild(img)
}