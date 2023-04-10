const input = document.getElementById("inp") as HTMLTextAreaElement;
const output = document.getElementById("out") as HTMLTextAreaElement;

class Result <T> {
	value: T | null;

	constructor(value: T | null) {
		this.value = value;
	}

	unwrap(): T {
		return this.value!;
	}

	or(val: T): T {
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

function getZapis(): Result<string> {
	return new Result<string>(localStorage.getItem("zapis"));
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

	names.sort((a: string, b: string): number => {
		return a.localeCompare(b);
	});

	output.value = names.join("\n");
}