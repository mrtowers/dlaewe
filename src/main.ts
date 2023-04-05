const input = document.getElementById("inp") as HTMLTextAreaElement;
const output = document.getElementById("out") as HTMLTextAreaElement;

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