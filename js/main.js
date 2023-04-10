"use strict";
const input = document.getElementById("inp");
const output = document.getElementById("out");
class Result {
    constructor(value) {
        this.value = value;
    }
    unwrap() {
        return this.value;
    }
    or(val) {
        if (this.value == null || undefined) {
            return val;
        }
        else {
            return this.value;
        }
    }
}
function clean() {
    input.value = "";
}
function getZapis() {
    return new Result(localStorage.getItem("zapis"));
}
input.value = getZapis().or("");
input.addEventListener("input", () => {
    localStorage.setItem("zapis", input.value);
    console.log("hi");
});
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
