import { App, MarkdownPostProcessorContext, MarkdownRenderer } from "obsidian";
import TabsCodeBlock, { TabsSettings } from "src/main";

export class FourQuadrantCodeView {
    CodeBlockContent: string;
    plugin: TabsCodeBlock;
    app: App;
    settings: TabsSettings;
    source: string;
    el: HTMLElement;
    ctx: MarkdownPostProcessorContext;
    constructor(CodeBlockContent: string, app: App, plugin: TabsCodeBlock, settings: TabsSettings, source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
        this.app = app;
        this.plugin = plugin;
        this.settings = settings;
        this.CodeBlockContent = CodeBlockContent;
        this.source = source;
        this.el = el;
        this.ctx = ctx;
        this.onload();
    }
    async onload() {
        const div = document.createElement('div');
        div.className = 'fourQuadrant';
        let divItem = document.createElement('div');
        divItem.className = 'fourQuadrant-item';
        let count = 0;
        if (this.CodeBlockContent.split("\n")[1]) {
            const allLinesAfterFirst = this.CodeBlockContent.split("\n").slice(2).join("\n");
            let separator = "===";
            if (this.CodeBlockContent.split("\n")[1]) {
                if (this.CodeBlockContent.split("\n")[1] == "@@@") {
                    separator = "@@@";
                } else if (this.CodeBlockContent.split("\n")[1] == "---") {
                    separator = "---";
                } else if (this.CodeBlockContent.split("\n")[1] == "~~~") {
                    separator = "~~~";
                }
            }
            const regex = new RegExp(`\\s*${separator}\\s*`);
            const paragraphs = allLinesAfterFirst.split(regex);
            for (let i = 0; i < paragraphs.length; i++) {
                const pagesLine = document.createElement('div');
                pagesLine.className = "fourQuadrant-pages"
                await MarkdownRenderer.render(this.app, paragraphs[i], pagesLine, this.ctx.sourcePath, this.plugin);
                divItem.appendChild(pagesLine);
                count++;
                if (count % 2 === 0) {
                    div.appendChild(divItem);
                    divItem = document.createElement('div');
                    divItem.className = 'fourQuadrant-item';
                }
            }
            // 如果最后还有未满2个的divItem，也要加进去
            if (count % 2 !== 0) {
                div.appendChild(divItem);
            }
        }
        this.el.appendChild(div);

    }
}