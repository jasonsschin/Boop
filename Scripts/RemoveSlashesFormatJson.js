/**
    {
        "api":1,
        "name":"Remove Slashes & Format JSON",
        "description":"Removes slashes, cleans and format JSON documents.",
        "author":"teamwampa",
        "icon":"quote",
        "tags":"add,slashes,escape,json,prettify,clean,indent"
    }
**/

function main(input) {

    try {


        // remove slashes
        input.text = (input.text + '')
            .replace(/\\(.?)/g, function (s, n1) {
                switch (n1) {
                    case '\\':
                        return '\\'
                    case '0':
                        return '\u0000'
                    case '':
                        return ''
                    default:
                        return n1
                }
            });

        // format json
        input.text = JSON.stringify(JSON.parse(input.text), null, 2);

    }
    catch (error) {
        state.postError("Invalid JSON")
    }

}

