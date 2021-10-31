export default class trueditor {
    edit: any;
    session: any;

    cursorPos: number = 0;
    lines: any = [0];

    constructor(edit: any, session: any) {
        this.edit = edit;
        this.session = session;
    }
}