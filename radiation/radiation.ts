import session from './session';
import editc, { editor } from './editor';
import trueditor from './trueditor';

export const edit = (element: string, options: any) => {
	var _id = element;
	var ele: HTMLElement | null = document.getElementById(_id);

	var val: string;
	if (ele) {
		val = ele.innerText;
		ele.innerHTML = "";
	}

	var ns: session = new session(options.text ? options.text : "", options);
	var ed: editc = new editc(ele!);

	var truedit: trueditor = new trueditor(ed, ns);

	
}
