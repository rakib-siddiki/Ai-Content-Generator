declare module '@toast-ui/editor' {
    export interface EditorOptions {
        el: HTMLElement;
        initialValue: string;
        initialEditType: 'wysiwyg' | 'markdown';
        theme: 'light' | 'dark';
        height: string;
        useCommandShortcut: boolean;
    }

    export class Editor {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        on(arg0: string, arg1: () => void) {
            throw new Error('Method not implemented.');
        }
        constructor(options: EditorOptions);
        getValue(): string;
        setValue(value: string): void;
        getMarkdown(): string;
        setMarkdown(markdown: string): void;
    }
}
