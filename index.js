// Write your solution here!
const cats=["Milo","Otis","Garfield"];

function logcats(cats) {
    console.log("Cats: ",cats);
}

function destructivelyAppendCat() {
    cats.push("Ralph");
    console.log("Cats:",cats);
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
    console.log("Cats:",cats);
}

function destructivelyRemoveLastCat(){
    cats.pop();
    console.log("Cats:",cats);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    console.log("Cats:",cats);
}

function appendCat(){
    cats.push("Broom");
    console.log("Cats: ",cats);
}

function prependCat(){
    cats.unshift("Arnold");
    console.log("Cats: ",cats);
}

function removeLastCat(){
    cats.pop();
    console.log("Cats: ",cats);
}

function removeFirstCat(){
    cats.shift();
    console.log("Cats: ",cats);
}



