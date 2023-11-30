
import { App, MarkdownPostProcessorContext } from "obsidian";
import TabsCodeBlock, { DEFAULT_SETTINGS, TabsSettings } from "../main";
import { TabsCodeView } from "./view/tabsCodeView";
import { TabsBottomCodeView } from "./view/tabsBottomCodeView";
import { FourQuadrantCodeView } from "./view/fourQuadrantCodeView";

export class CodeFenceProcessor {
    plugin: TabsCodeBlock;
    app: App
    settings: TabsSettings;
    constructor(app: App, plugin: TabsCodeBlock, settings: TabsSettings) {
        this.app = app;
        this.plugin = plugin;
        this.settings = settings;
        this.loadSettings()
        this.plugin.registerMarkdownCodeBlockProcessor('minitabs', this.TabsCodeBlockProcessor.bind(this));
    }


    async TabsCodeBlockProcessor(
        source: string,
        el: HTMLElement,
        ctx: MarkdownPostProcessorContext
    ): Promise<void> {

        // 第一步:处理'source'，这是代码块里面的字符
        const CodeBlockContentResult = source.trim();
        const lines = CodeBlockContentResult.split('\n');
        const CodeBlockContent = lines.filter(line => {
            // 去除前后空格
            const trimmedLine = line.trim();
            // 不是以'//'开头
            return !trimmedLine.startsWith('//');
        }).join('\n');
        // console.log(CodeBlockContent);

        //使用trim()函数来移除字符串两端的空格。
        if (CodeBlockContent.split("\n")[0].trim() === "tabs") {
            new TabsCodeView(CodeBlockContent, this.app, this.plugin, this.settings, source, el, ctx);
        }
        if (CodeBlockContent.split("\n")[0].trim() === "tabsBottom") {
            new TabsBottomCodeView(CodeBlockContent, this.app, this.plugin, this.settings, source, el, ctx);
        }
        if (CodeBlockContent.split("\n")[0].trim() === "fourQuadrant") {
            new FourQuadrantCodeView(CodeBlockContent, this.app, this.plugin, this.settings, source, el, ctx);
        }
    }

    // 加载已保存的文件信息
    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.plugin.loadData());
    }
    //保存用户在插件的设置页面调整的信息。
    async saveSettings() {
        await this.plugin.saveData(this.settings);
    }
}



