import { sectiondetails, sectiongames } from "./games.js";
// to hide site
let hide = document.getElementById("rong");
hide.addEventListener("click", function () {
  console.log("hi");
  sectiondetails.classList.replace("d-block", "d-none");
  sectiongames.classList.replace("d-none", "d-block");
});

export class details {
  constructor(id) {
    this.id = id;
    this.getdetails(this.id);
  }

  //    api details
  async getdetails(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "2fbada581cmsh5065a89a005c2e8p11c956jsna18236791753",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let api = await fetch(
      `https:free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    let response = await api.json();
    console.log(response);
    this.displlaydetails(response);
  }
  // to display id about game
  async displlaydetails(info) {
    let site = info.freetogame_profile_url;

    let sitetwo = JSON.stringify(site);
    console.log(sitetwo);
    let box = "";
    box = `
           <div class="col-md-5 align-self-baseline">
                  <div>
                    <h2>Details Game</h2>
                    <img src="${info.thumbnail}" class="w-100" alt="" />
                  </div>
                </div>
                <div class="boxdetails col-md-7 mt-5 align-self-center">
                  <div>
                    <h5 class="mb-3">Title:<span>${info.title}</span></h5>
                    <h5 class="mb-3">Category:<span>${info.genre}</span></h5>
                    <h5 class="mb-3">Platform:<span>${info.platform}</span></h5>
                    <h5>Status:<span>${info.status}</span></h5>
                    <p class="f8">${info.description}

                    </p>
                    <button sit = ${sitetwo}  id="showgame">show game</button>
                  </div>
        `;
    document.getElementById("detailsbox").innerHTML = box;

    let show = document.getElementById("showgame");
    show.addEventListener("click", function (e) {
      let HttP = e.target;
      console.log(HttP.getAttribute("sit"));
      window.open(HttP.getAttribute("sit"), "_self");
    });
  }
}
