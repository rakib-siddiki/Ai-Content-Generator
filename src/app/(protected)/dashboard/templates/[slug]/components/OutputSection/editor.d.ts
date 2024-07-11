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
        constructor(options: EditorOptions);
        getValue(): string;
        setValue(value: string): void;
        getMarkdown(): string;
        setMarkdown(markdown: string): void;
    }
}
