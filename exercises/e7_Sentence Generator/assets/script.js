//console.log('it works')

let nouns = ['apple','banana','orange'];
let verbs = ['hate','make','love']
let adjectives = ['nice','perfect','death']

//let item = arrayName [Math.floor(Math.random()*arrayName.length)];

//let noun = Math.floor(Math.random() * nouns.length)
let noun= nouns[Math.floor(Math.random()*adjectives.length)]
let verb = verbs[Math.floor(Math.random()*adjectives.length)]
let adjective = adjectives[Math.floor(Math.random()*adjectives.length)]

console. log(noun)
console. log(verb)

let sentence = `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`

console.log(sentence)