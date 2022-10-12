//-------------------- Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.
const hacker1 = "Justine"
// 1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`)
// 1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = "Justine"
// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`)


//---------------------- Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
    console.log(`${hacker1}, the driver, has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that ${hacker2}, the navigator, has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

//-------------------- Iteration 3: Loops*

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let hacker1Loop = []
for (letter in hacker1) {
    hacker1Loop += `${hacker1[letter].toUpperCase()}  `
}
console.log(hacker1Loop)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseHacker2Loop = []
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseHacker2Loop += hacker2[i]
}
console.log(reverseHacker2Loop)

// 3.3 Depending on the lexicographic order of the strings, print:
if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`)
} else {
    let maxHackerLength
    hacker1.length < hacker2.length ? maxHackerLength = hacker2.length : maxHackerLength = hacker1.length
    for (let i = 0; i < maxHackerLength; i++) {
        if (hacker1[i] === hacker2[i]) {
            continue
        } else {
            if ((hacker1[i]).localeCompare(hacker2[i]) < 0) {
                console.log(`The driver's name goes first.`)
                break
            } else {
                console.log(`Yo, the navigator goes first definitely.`)
                break
            }
        }
    }
}


//-------------------- Bonus 1*
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales velit odio, vitae tincidunt justo suscipit sed. Curabitur placerat tincidunt nibh ac ullamcorper. Vestibulum imperdiet eget dui quis commodo. Aenean scelerisque turpis lorem, nec maximus ex cursus id. Sed at sapien vel massa ullamcorper luctus in ut urna. Aliquam imperdiet, eros a gravida facilisis, nunc nisi gravida magna, ut ultrices orci ligula nec justo. Morbi eget porta lectus. Aenean ut elementum mauris. Sed tincidunt enim sed lorem malesuada interdum. Ut et faucibus enim. Sed eu interdum nulla, quis molestie ex. Sed et ligula nec justo congue faucibus. Donec eleifend pulvinar turpis ut sollicitudin.\nVivamus ornare orci id augue imperdiet interdum. Proin a eros sit amet felis egestas dapibus viverra et metus. Maecenas non massa placerat, ultricies mauris eget, blandit quam. Cras in ipsum sit amet ex pharetra vulputate. Phasellus sit amet sapien mauris. Aliquam ac tellus in est tempor congue nec non felis. Suspendisse in tincidunt leo. Ut non lorem maximus, consequat velit id, congue dui. Suspendisse potenti. In dapibus, arcu sit amet aliquam facilisis, nibh mauris vehicula lorem, in viverra dui diam a mi. Morbi congue nisl finibus diam dapibus, nec mattis sem ultricies. Sed aliquet pellentesque diam vel feugiat. Aliquam nisi massa, iaculis eu molestie id, volutpat sit amet quam. Suspendisse sagittis odio quis mauris mollis posuere. Pellentesque bibendum ipsum hendrerit nisi luctus, eget convallis dolor posuere.\nDonec dictum augue ac venenatis pellentesque. In ullamcorper risus vel diam elementum, non pharetra turpis mattis. Proin sodales augue lorem, sed sodales mi rutrum id. Vivamus porta eleifend nisl, a blandit neque sollicitudin ac. Vestibulum gravida lorem ac egestas scelerisque. Nunc in mattis risus, ut pretium libero. Aenean odio leo, accumsan nec urna nec, imperdiet egestas dui. In eu sagittis ligula. Aenean in felis orci. Pellentesque eu arcu eu ipsum hendrerit vehicula quis eget risus. Nam id orci leo. Aenean pellentesque semper lectus, faucibus hendrerit lacus. Nam volutpat felis ac massa scelerisque, vel vestibulum elit faucibus.`

// Count the number of words in the string
let words = lorem.replace(/\n/g, " ").split(" ")
let numOfWords = words.length
console.log(`This text contains ${numOfWords} words`)

// Count the number of times "et" appears
let numOfEt = 0
for (word of words) {
    if (word.toLowerCase() === "et") {
        numOfEt++
    }
}
console.log(`This text contains ${numOfEt} times the word "et"`)

//-------------------- Bonus 2*

// check if the value we assigned to this variable is a Palindrome
let phraseToCheck = "Was it a car or a cat I saw?"

let punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g; 
let simplifiedPhraseToCheck = phraseToCheck.replace(punctuation, "").replace(/ /g, "") // Eliminate punctuation and spaces
let simplifiedReversePhrase = ""
for (let i = simplifiedPhraseToCheck.length - 1; i >= 0; i--) { // Create reverse phrase from simplified phrase to check
    simplifiedReversePhrase += simplifiedPhraseToCheck[i]
}

if (simplifiedPhraseToCheck.toLowerCase() === simplifiedReversePhrase.toLowerCase()) { // Compare if both strings are stricly equal
    console.log(`"${phraseToCheck}" is a palindrome`)
} else {
    console.log(`"${phraseToCheck}" is not a palindrome`)
}
