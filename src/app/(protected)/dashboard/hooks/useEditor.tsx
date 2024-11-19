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
    useEffect(() => {
        setEditorTheme(theme === 'dark' ? 'dark' : 'light');
    }, [theme]);
    useEffect(() => {
        setIsEditedContent(value);
    }, [value]);
   useEffect(() => {
       let instance: Editor | null = null;

       const initializeEditor = async () => {
           const { Editor } = await import('@toast-ui/editor');
           instance = new Editor({
               el: editorRef?.current as unknown as HTMLElement,
               initialValue: isEditedContent || 'Your result will appear here',
               initialEditType: 'wysiwyg',
               theme: editorTheme,
               height: '400px',
               useCommandShortcut: true,
           });

           instance.on('change', () => {
               const markdown = instance?.getMarkdown();
               if (markdown !== isEditedContent) {
                   setIsEditedContent(markdown ?? '');
               }
           });

           setEditorInstance(instance);
       };

       void initializeEditor();

       return () => {
           // @ts-expect-error any
           // eslint-disable-next-line @typescript-eslint/no-unsafe-call
           instance?.destroy(); // Clean up previous instance on re-render
       };
   }, [editorTheme, isEditedContent]);


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