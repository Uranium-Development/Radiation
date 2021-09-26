import { session } from './session';

export const edit = (element: string, options: any) => {
	var _id = element;
	var ele: HTMLElement | null = document.getElementById(_id);

	var val: string;
	if (ele) {
		val = ele.innerText;
		ele.innerHTML = "";
	}

	var ns: session = new session(options.text ? options.text : "", options);

}
