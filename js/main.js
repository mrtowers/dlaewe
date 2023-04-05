"use strict";
const input = document.getElementById("inp");
const output = document.getElementById("out");
function exec() {
    const names = input.value.split("\n");
    //triming
    for (let i in names) {
        names[i] = names[i].trim();
    }
    names.sort((a, b) => {
        return a.localeCompare(b);
    });
    output.value = names.join("\n");
}
