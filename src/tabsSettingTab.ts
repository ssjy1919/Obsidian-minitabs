
import { App, Notice, PluginSettingTab } from "obsidian";
import tabsCodeBlock from "./main";

// 定义设置选项卡类，继承自 PluginSettingTab 类
export class SettingTab extends PluginSettingTab {
    plugin: tabsCodeBlock;

    constructor(app: App, plugin: tabsCodeBlock) {
        super(app, plugin);
        this.plugin = plugin;
    }



    // 显示设置选项卡的内容
    display(): void {
        const { containerEl } = this;
        containerEl.empty();
        const aa = containerEl.createEl("a", {
            text: "更多知识管理访问 Obsidian 中文网：https://Obsidian.vip",
            href: "https://Obsidian.vip"
        });

        aa.addClass('elm-a');
        containerEl.createEl("p", { text: "使用方法：复制代码块到你的笔记页面。" });

        // 为HTML添加一个自定义类名 方便对HTML进行额外操作，
        containerEl.createEl("hr");

        containerEl.createEl("h3", { text: "tabs一共四种分割线分别是 ===、--- 、~~~ 和 @@@ 。" });
        
        containerEl.createEl("p", { text: "可以根据不同的分割线使相互嵌套tabs" });
        containerEl.createEl("hr");
        containerEl.createEl("h3", { text: "按钮在上面 ↑" });
        const pres = containerEl.createEl("pre", { text: '````minitabs\n//按钮在上面\ntabs\n`按钮1` `按钮2` `可以一直写下去……` \n===\n第一个按钮对应的页面\n===\n按钮二对应的页面\n===\n按钮三对应的页面\n````' });

        pres.addClass('elm-pres');
        const buttons = containerEl.createEl("button", { text: "copy" });
        buttons.addEventListener("click", function () {
            if (pres.textContent !== null) {
                navigator.clipboard.writeText(pres.textContent).then(function () {
                    new Notice('copy！');
                }, function (err) {
                    new Notice('err: copy', err);
                });
            }
        });
        containerEl.createEl("hr");
        containerEl.createEl("h3", { text: "按钮在下面 ↓" });
        const press = containerEl.createEl("pre", { text: '````minitabs\n//按钮在下面\ntabsBottom\n`按钮1` `按钮2` `可以一直写下去……` \n===\n第一个按钮对应的页面\n===\n按钮二对应的页面\n===\n按钮三对应的页面\n````' });
        press.addClass('elm-pres');
        const buttonss = containerEl.createEl("button", { text: "copy" });
        buttonss.addEventListener("click", function () {
            if (press.textContent !== null) {
                navigator.clipboard.writeText(press.textContent).then(function () {
                    new Notice('copy！');
                }, function (err) {
                    new Notice('err: copy', err);
                });
            }
        });
        containerEl.createEl("hr");
        containerEl.createEl("h3", { text: "四象限" });
        const pressf = containerEl.createEl("pre", { text: '````minitabs\nfourQuadrant\n---\n### 不紧急但重要⭐⭐⭐\n- [ ] 呆呆\n---\n### 紧急且重要⭐⭐⭐⭐\n- [ ] 呆呆\n---\n### 不紧急不重要⭐\n- [ ] 呆呆\n---\n### 紧急不重要⭐⭐\n- [ ] 呆呆\n````' });
        pressf.addClass('elm-pres');
        const buttonssf = containerEl.createEl("button", { text: "copy" });
        buttonssf.addEventListener("click", function () {
            if (pressf.textContent !== null) {
                navigator.clipboard.writeText(pressf.textContent).then(function () {
                    new Notice('copy！');
                }, function (err) {
                    new Notice('err: copy', err);
                });
            }
        });
        containerEl.createEl("hr");
        const a = containerEl.createEl("a", {
            text: "访问此插件的GitHub仓库：https://github.com/ssjy1919/Obsidian-minitabs",
            href: "https://github.com/ssjy1919/Obsidian-minitabs"
        });
        a.addClass('elm-a');
    }
}


