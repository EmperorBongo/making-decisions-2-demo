let name = "Link"
let leftHand = null
let rightHand = null
let backpack = []

backpack.push("Stick") // adds to the end of array
backpack.push("Pot Lid")
backpack.push("Bow")
backpack.push("food")

console.log(backpack)

let weapon = backpack.shift()// removes from the beginng
let shield = backpack.shift()

leftHand = shield
rightHand = weapon

console.log(`${name}, with a ${leftHand} and ${rightHand}, he left the village and is off to saveHyrule with nothing but ${backpack.length}
 items on his person.`)

 rightHand = null

 backpack.unshift("Sword") // add at the beginning of the array
 rightHand = "Spear"

 console.log(backpack)

 backpack.splice(2, 1, "Crumbs")// allows for complex interaction
 // index, # WE WANT TO REMOVE, ADD TO ARRAY
 console.log(backpack)

 backpack.splice(0, 1, "Mastersword")
 console.log(backpack)

 leftHand = "Shield of Hyrule"

 for(let i = 0; i < 3; i++){
    backpack.push("Food")
 }

 console.log(backpack)

 rightHand = backpack.shift()

 console.log(backpack)
 console.log(rightHand)

 for(let i = 0; i < backpack.length; i++){
    if(backpack[i] === 'Food'){
        console.log(`${name} found some food! He ate it.`)
        backpack.splice(i, 1, "Crumbs")
    } else{
        console.log(`${name} ignored the ${backpack[i]}`)
    }
 }

 console.log(backpack)

 for(let i = 0; i < backpack.length; i++){
    if(backpack[i] === "Crumbs"){
        console.log(`${name} Cleaned out the Crumbs!!`)
        backpack.splice(i, 1, "Roses")
        i--
    }
 }

 console.log(backpack)

 let gift = backpack.pop// pop removes the last item in a array

 console.log(`${name} defeated the monster, and gave princess zelda ${gift}`)