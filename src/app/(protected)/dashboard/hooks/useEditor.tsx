'use client';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { type Editor } from '@toast-ui/editor';

const useEditor = (value: string) => {
    const { theme } = useTheme();
    const editorRef = useRef<Editor | null>(null);
    const [editorInstance, setEditorInstance] = useState<Editor | null>(null);
    const [editorTheme, setEditorTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        setEditorTheme(theme === 'dark' ? 'dark' : 'light');
    }, [theme]);

    useEffect(() => {
        const initializeEditor = async () => {
            const { Editor } = await import('@toast-ui/editor');
            const instance = new Editor({
                el: editorRef?.current as unknown as HTMLElement,
                initialValue: 'Your result will appear here',
                initialEditType: 'wysiwyg',
                theme: editorTheme,
                height: '400px',
                useCommandShortcut: true,
            });
            setEditorInstance(instance);
        };
        void initializeEditor();
    }, [editorTheme]);

    useEffect(() => {
        if (editorInstance && typeof editorInstance.getMarkdown === 'function') {
            editorInstance.setMarkdown(value);
        }
    }, [value, editorInstance]);
    return {
        editorRef,
    };
};

export default useEditor;
