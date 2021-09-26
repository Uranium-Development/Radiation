export class session {
	document: string = "";
	mode: string = "plainText";

	constructor(text: string, options: any) {
		this.document = text;
		this.mode = options.mode ? options.mode : "plainText";
	}
}
