// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}
function destructivelyRemoveFirstCat(){
   return cats.shift() 
}
function appendCat(name){
    let newArray=[...cats,name]
    return newArray
}
function prependCat(name){
    const name1=[name,...cats]
    return name1
}
function removeLastCat(){
    let remove=cats.slice(0,cats.length-1)
    return remove
}
function removeFirstCat(){
    let first=cats.slice(1)
    return first
}