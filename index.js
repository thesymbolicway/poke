const pokemonCount = 250;
var pokedex = {}; //(1 : ("name" :"bulbasaur", "img" : url, "type": ["grass", "poison"], "desc" : "....." ) )

window.onload = async function() {
    // getPokemon(1);
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i);

// creating a div for the elements in the pokemon list and populate in the left box
//<div>id="1" class="pokemon-name">BULBASAUR</div> rep of what's happening below
//pokemon.id is getting set to i bc whn on.click on pokemon name going to get the info based on the id which is the number in our pokedex and populate the left side(pokeinfo box)
        let pokemon = document.createElement("div");

        pokemon.id = i;

// number -> turn into string + "." + pokedex[i][name].toUpperCase()
        pokemon.textContent = i.toString() + ". " + pokedex[i]["name"].toUpperCase();

//style class
        pokemon.classList.add("pokemon-name");

// on.click pokemon name populate the data in left side
        pokemon.addEventListener("click", updatePokemon);


        document.getElementById("pokemon-list").append(pokemon);

    }
    //adding bulbasours infoon.load bc he's the first pokemon
    document.getElementById("pokemon-description").textContent = pokedex[1]["description"];
    // console.log(pokedex);
}

async function getPokemon(num){
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    let res = await fetch(url);
    let pokemon = await res.json();
    // console.log(pokemon);

// returns array

    let pokemonName = pokemon["name"]
    let pokemonType = pokemon["types"]
    let pokemonImg = pokemon["sprites"]["front_default"]

res = await fetch(pokemon["species"]["url"])
let pokemonDescription = await res.json()

// console.log(pokemonDescription)

pokemonDescription = pokemonDescription["flavor_text_entries"][6]["flavor_text"]


//adding to pokedescription pokedex variable
pokedex[num] = {"name" : pokemonName, "img" : pokemonImg, "types" : pokemonType, "description" : pokemonDescription}


}
const voteLikes = document.getElementById("like-button")
const likesCount = document.getElementById("like-count")
const voteDislikes = document.getElementById("dislike-button")
const dislikesCount = document.getElementById("dislike-count")



// this refers to the name that was clicked
function updatePokemon() {
    document.getElementById("pokemon-img").src = pokedex[this.id]["img"];
    // let pokemonImage = document.getElementById("pokemon-img");
    // pokemonImage.src = pokedex[this.id]["img"];

//clear th previous types
    let typesDiv = document.getElementById("pokemon-types");
    while(typesDiv.firstChild) {
        typesDiv.firstChild.remove();
    }

// update types
    let types = pokedex[this.id]["types"];
    for (let i = 0; i < types.length; i++) {
        let type = document.createElement("span");
        type.textContent = types[i]["type"]["name"].toUpperCase();
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]); //adds background color and font color
        typesDiv.append(type)

    }
    //update description
    document.getElementById("pokemon-description").textContent = pokedex[this.id]["description"];
window.onload =
    function handleLikes() {
        votesLikes.addEventListener("click", () => {
            likesCount.textContent = parseInt(likesCount.textContent) + 1;

        })
handleLikes();
    }
window.onload =
    function handleDislikes() {
        dislikesCount.textContent = parseInt(dislikesCount.textContent) - 1;
    }
handleDislikes();
}

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});