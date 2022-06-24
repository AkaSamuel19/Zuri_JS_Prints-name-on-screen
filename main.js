// Write a javascript code that prints out your name, height, and country on the screen
const info = document.querySelector('.info');

// Declearing the data
const data = `
    <h1> My Details </h1>

    <div class='name'><b>Name:</b> Akande Samuel</div>
    <div class='height'><b>Height:</b> 6'1</div>
    <div class='country'><b>Country:</b> Nigeria</div>
`
// Outputting the data
info.innerHTML = data