const strings = ['Green Neutral Aesthetic Streetwear Vibes', 'green shoes', 'heels', 'red hair secrets']



const results = strings.filter(string => {
    return string.toLowerCase().indexOf('ee') > -1
})

console.log(results)