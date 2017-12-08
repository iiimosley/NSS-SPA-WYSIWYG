// Create an array of objects that represents famous people
// Create a text input in your DOM.
// then create a container in your DOM.
// Create a DOM element for each of the objects inside the container
// Style your person elements however you like.
// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter /return key when typing in the input field, then the content of the input field should immediately be blank.

let actors = [
    {
        name: "Toshiro Mifune",
        origin: "Japan",
        bio: "Frequent collaborator with Akira Kurosawa. Famous for roles in Jadaigeki & Film Noir genres",
        img: "img/mifune.jpg",
        lifespan: {
            birth: 1920,
            death: 1997
            }
    },
    {
        name: "Juliette Binoche",
        origin: "France",
        bio: "Internationally renowned; acclaimed for work with Michael Haneke & several art-house films",
        img: "img/juliette.jpg",
        lifespan: {
            birth: 1964,
            death: "present"
        }
    },
    {
        name: "Matti Pellonpää",
        origin: "Finland",
        bio: "Consistent work with Aki Kaurismaki. Known for bohemian lifestyle seamlessly integrated into his roles",
        img: "img/matti.jpg",
        lifespan: {
            birth: 1951,
            death: 1995
        }
    },
    {
        name: "Jeanne Moreau",
        origin: "France",
        bio: "Predominant figure of the French New Wave Cinema. Iconic actress of the 1950s French Cinema",
        img: "img/jeanne.jpg",
        lifespan: {
            birth: 1928,
            death: 2017
        }
    }
];

let output = document.getElementById("actorWrap");

for (a = 0; a < actors.length; a++) {
    output.innerHTML += `<div class="actorCard">
                <h3>${actors[a].name} (${actors[a].origin})</h3>
                <section>
                <img src="${actors[a].img}"></img>
                <p>${actors[a].bio}</p>
                </section>
                <footer>${actors[a].lifespan.birth} - ${actors[a].lifespan.death}</footer>
                </div>`;
            };
            
let card = document.querySelectorAll(".actorCard");
let input = document.getElementById("search")

for (i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function(event) {
        removeClass();
        event.currentTarget.classList.add("dotted");
        focusReplace();
    });
};

function removeClass() {
    card.forEach(function (x){
        x.classList.remove("dotted");
    });
};

function focusReplace() {
    input.focus();
    input.addEventListener("input", function(){
        document.querySelector(".dotted section p").innerHTML = input.value;
    });
    input.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            input.value = "";
            //attempt to reestablish original bio to actors div
            // console.log(actors[event.currentTarget]);
            // document.querySelector(".dotted section p").innerHTML = actors[i].bio;
        }
    });
};


// card[i].classList.remove("dotted");
// event.currentTarget.classList.toggle("dotted");
// input.focus();
            

            
            
            