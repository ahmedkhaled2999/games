export let sectiongames = document.getElementById("games");
export let sectiondetails = document.getElementById("details");
import { details } from "./details.js";

let catogry = document.querySelectorAll(".nav-link");

for (const x of catogry) {
  x.addEventListener("click", function () {
    let text = this.innerHTML;
    let catogry = new Games(text);
  });
}
catogry.forEach((valugam) => {
  valugam.addEventListener("click", () => {
    document.querySelector(".activ").classList.remove("activ");
    valugam.classList.add("activ");
  });
});

export class Games {
  constructor(text) {
    this.text = text;
    console.log(this.text);

    if (this.text == undefined) {
      this.getgames("mmorpg");
    } else {
      this.getgames(this.text);
    }
  }

  // // api games category
  async getgames(category) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "2fbada581cmsh5065a89a005c2e8p11c956jsna18236791753",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    let api = await fetch(
      `https:free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    let response = await api.json();
    console.log(response);
    this.display(response);
  }
  // //  to display datda inner html
  display(allgames) {
    console.log(allgames);
    let box = "";

    for (let i = 0; i < allgames.length; i++) {
      box += `
                <div  class="col-md-4">
                       <div   class="box p-3 hight shadow rounded-2">
                         <div>
                           <img
                             src="${allgames[i].thumbnail}"
                             class="w-100 rounded-2"
                             alt=""
                           />
                           <div
                             class="d-flex justify-content-between mt-3 text-white align-items-center mb-3"
                           >
                             <h5 class="fs-6">${allgames[i].title}</h5>
                             <span
                               class="f7 btn-info btn text-white text-uppercase fw-bold"
                               >free</span
                             >
                           </div>
                           <p class="f7">
                       ${allgames[i].short_description}
                           </p>
                           <div
                             class="border-top border-black d-flex justify-content-between p-1 align-items-center mt-auto"
                           >
                             <span  class="details text-uppercase">${allgames[i].genre}</span>
                             <span class="details text-uppercase">${allgames[i].platform})</span>
                           </div>
                         </div>
                       </div>
                     </div>`;
    }

    document.getElementById("boxgame").innerHTML = box;

    let allid = document.querySelectorAll(".box");
    for (let i = 0; i < allid.length; i++) {
      allid[i].addEventListener("click", function () {
        let iddetials = new details(allgames[i].id);
      });
    }
    for (let r = 0; r < allid.length; r++) {
      allid[r].addEventListener("click", function () {
        sectiongames.classList.replace("d-block", "d-none");
        sectiondetails.classList.replace("d-none", "d-block");
      });
    }
  }
}
