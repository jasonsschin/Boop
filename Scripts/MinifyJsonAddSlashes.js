/**
    {
        "api":1,
        "name":"Minify JSON & Add Slashes",
        "description":"Minify & Escapes your JSON.",
        "author":"teamwampa",
        "icon":"quote",
        "tags":"add,slashes,escapinput.text = JSON.stringify(JSON.parse(input.text));
**/

function main(input) {

    // Minify json
    input.text = JSON.stringify(JSON.parse(input.text));

    // Escape text
    input.text = (input.text + '')
        .replace(/[\\"']/g, '\\$&')
        .replace(/\u0000/g, '\\0')
}