import type MarkdownIt from 'markdown-it';

export function activate() {
    return {
        extendMarkdownIt(md: MarkdownIt) {
            const taskLists = require('markdown-it-task-lists');
            md.use(taskLists, { enabled: false, label: true });
            return md;
        }
    };
}

export function deactivate() {}
