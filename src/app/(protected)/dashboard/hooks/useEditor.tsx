'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { type Editor } from '@toast-ui/editor';

const useEditor = (value: string) => {
    const { theme } = useTheme();
    const editorRef = useRef<Editor | null>(null);
    const [editorInstance, setEditorInstance] = useState<Editor | null>(null);
    const [editorTheme, setEditorTheme] = useState<'light' | 'dark'>('light');
    const [isEditedContent, setIsEditedContent] = useState(value);
    // Handle theme changes after hydration
    useEffect(() => {
        if (theme === 'system') {
            // If the theme is 'system', use the user's system preference
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
            setEditorTheme(systemTheme); // Set editor theme based on system preference
        } else if (theme === 'dark' || theme === 'light') {
            // If the theme is not 'system', directly use it
            setEditorTheme(theme);
        }
    }, [theme]);

    // Update the editor content when the `value` prop changes
    useEffect(() => {
        setIsEditedContent(value);
    }, [value]);
    // Lazy-load the editor to avoid blocking the main thread in production
    useEffect(() => {
        if (!editorInstance) {
            const initializeEditor = async () => {
                const { Editor } = await import('@toast-ui/editor');
                const instance = new Editor({
                    el: editorRef.current! as unknown as HTMLElement,
                    initialValue: isEditedContent || 'Your result will appear here',
                    initialEditType: 'wysiwyg',
                    theme: editorTheme,
                    height: '400px',
                    useCommandShortcut: true,
                });

                instance.on('change', () => {
                    const markdown = instance.getMarkdown();
                    if (markdown !== isEditedContent) {
                        setIsEditedContent(markdown ?? '');
                    }
                });

                setEditorInstance(instance);
            };

            void initializeEditor();
        }
    }, [editorInstance, editorTheme, isEditedContent]);

    useEffect(() => {
        if (editorInstance && typeof editorInstance.setMarkdown === 'function') {
            // Only set if the new content is different
            const currentMarkdown = editorInstance.getMarkdown();
            if (currentMarkdown !== isEditedContent) {
                editorInstance.setMarkdown(isEditedContent);
            }
        }
    }, [isEditedContent, editorInstance]);

    return {
        editorRef,
        isEditedContent,
    };
};

export default useEditor;
