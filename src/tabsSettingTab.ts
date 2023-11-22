
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
        containerEl.createEl("p", { text: "minitabs" });
        containerEl.createEl("p", { text: "复制代码块到你的笔记页面。" });
        const a = containerEl.createEl("a", {
            text: "GitHub仓库：https://github.com/ssjy1919/Obsidian-minitabs",
            href: "https://github.com/ssjy1919/Obsidian-minitabs"
        });
        a.style.fontSize = "12px";
        a.className = "external-link"; // 添加 class

        // 为HTML添加一个自定义类名 方便对HTML进行额外操作，
        containerEl.addClass('check-Synchronization-tips');
        containerEl.createEl("hr");

        containerEl.createEl("h3", { text: "tabs一共四种分割线分别是 ===、--- 、~~~ 和 @@@ 。" });
        
        containerEl.createEl("p", { text: "可以根据不同的分割线使相互嵌套tabs" });
        containerEl.createEl("hr");
        containerEl.createEl("h3", { text: "按钮在上面 ↑" });
        const pres = containerEl.createEl("pre", { text: '````minitabs\n//按钮在上面\ntabs\n//按钮名字,要多少个写多少个\n`按钮1` `按钮2` `可以一直写下去……` \n===\n第一个按钮对应的页面\n===\n按钮二对应的页面\n===\n按钮三对应的页面\n````' });
        pres.style.padding = '10px';
        pres.style.fontSize="0.7em"
        pres.style.border = '1px solid #000000';
        pres.style.color = '#ff0000';
        const buttons = containerEl.createEl("button", { text: "复制" });
        buttons.addEventListener("click", function () {
            if (pres.textContent !== null) {
                navigator.clipboard.writeText(pres.textContent).then(function () {
                    new Notice('复制成功！');
                }, function (err) {
                    new Notice('复制失败: ', err);
                });
            }
        });
        containerEl.createEl("hr");
        containerEl.createEl("h3", { text: "按钮在下面 ↓" });
        const press = containerEl.createEl("pre", { text: '````minitabs\n//按钮在下面\ntabsBottom\n//按钮名字,要多少个写多少个\n`按钮1` `按钮2` `可以一直写下去……` \n===\n第一个按钮对应的页面\n===\n按钮二对应的页面\n===\n按钮三对应的页面\n````' });
        press.style.padding = '10px';
        press.style.fontSize="0.7em"
        press.style.border = '1px solid #000000';
        press.style.color = '#ff0000';
        const buttonss = containerEl.createEl("button", { text: "复制" });
        buttonss.addEventListener("click", function () {
            if (press.textContent !== null) {
                navigator.clipboard.writeText(press.textContent).then(function () {
                    new Notice('复制成功！');
                }, function (err) {
                    new Notice('复制失败: ', err);
                });
            }
        });
        containerEl.createEl("hr");
        containerEl.createEl("h3", { text: "四象限" });
        const pressf = containerEl.createEl("pre", { text: '````minitabs\nfourQuadrant\n---\n### 不紧急但重要⭐⭐⭐\n- [ ] 呆呆\n---\n### 紧急且重要⭐⭐⭐⭐\n- [ ] 呆呆\n---\n### 不紧急不重要⭐\n- [ ] 呆呆\n---\n### 紧急不重要⭐⭐\n- [ ] 呆呆\n````' });
        pressf.style.padding = '10px';
        pressf.style.fontSize="0.7em"
        pressf.style.border = '1px solid #000000';
        pressf.style.color = '#ff0000';
        const buttonssf = containerEl.createEl("button", { text: "复制" });
        buttonssf.addEventListener("click", function () {
            if (pressf.textContent !== null) {
                navigator.clipboard.writeText(pressf.textContent).then(function () {
                    new Notice('复制成功！');
                }, function (err) {
                    new Notice('复制失败: ', err);
                });
            }
        });
        containerEl.createEl("hr");

    }
}


