import { App, MarkdownPostProcessorContext, MarkdownRenderer } from "obsidian";
import TabsCodeBlock, { TabsSettings } from "src/main";

export class TabsBottomCodeView {
	CodeBlockContent: string;
	plugin: TabsCodeBlock;
	app: App;
	settings: TabsSettings;
	source: string;
	el: HTMLElement;
	ctx: MarkdownPostProcessorContext;
	constructor(
		CodeBlockContent: string,
		app: App,
		plugin: TabsCodeBlock,
		settings: TabsSettings,
		source: string,
		el: HTMLElement,
		ctx: MarkdownPostProcessorContext
	) {
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
		const div = document.createElement("div");
		div.className = "TabsCodeBlock-tabs";
		const elems: HTMLButtonElement[] = [];
		const contend = document.createElement("div");
		const box = document.createElement("div");
		box.className = "TabsCodeBlock TabsCodeBlock-buns";
		contend.style.display = "flex";
		contend.style.flexDirection = "column";
		if (this.CodeBlockContent.split("\n")[1]) {
			const pattern = /`(.*?)`/g;
			let match;
			const buttonNameArry = [];
			while (
				(match = pattern.exec(this.CodeBlockContent.split("\n")[1])) !==
				null
			) {
				buttonNameArry.push(match[1]);
			}
			const pagesLines: HTMLDivElement[] = [];
			for (let j = 0; j < buttonNameArry.length; j++) {
				elems[j] = document.createElement("button");
				elems[j].textContent = buttonNameArry[j];
				elems[j].className = "TabsCodeBlock-tabs-buttonName";
				if (j === 0) elems[j].classList.add("active");
				elems[j].addEventListener("click", () => {
					for (let i = 0; i < elems.length; i++) {
						elems[i].classList.remove("active");
					}
					elems[j].classList.add("active");
					for (let i = 0; i < pagesLines.length; i++) {
						if (i === j) {
							pagesLines[i].style.display = "block";
						} else {
							pagesLines[i].style.display = "none";
						}
					}
				});
				box.appendChild(elems[j]);
			}
			const allLinesAfterFirst = this.CodeBlockContent.split("\n")
				.slice(2)
				.join("\n");
			let separator = "===";
			if (this.CodeBlockContent.split("\n")[2]) {
				if (this.CodeBlockContent.split("\n")[2] == "@@@") {
					separator = "@@@";
				} else if (this.CodeBlockContent.split("\n")[2] == "---") {
					separator = "---";
				} else if (this.CodeBlockContent.split("\n")[2] == "~~~") {
					separator = "~~~";
				}
			}
			const regex = new RegExp(`\\s*${separator}\\s*`);
			const paragraphs = allLinesAfterFirst.split(regex);
			for (let i = 0; i < paragraphs.length; i++) {
				if (i >= 1) {
					const pagesLine = document.createElement("div");
					if (i >= 2) {
						pagesLine.style.display = "none";
					}
					pagesLine.className = "TabsCodeBlock-tabs-pages";
                    const selfLink = this.ctx.sourcePath.split('/').pop()?.replace(/\.md$/, "") ?? "";
					if (paragraphs[i].includes(`![[${selfLink}]]`)) {
						// 显示警告或跳过
						pagesLine.innerText = "⚠️ 检测到自引用，已阻止渲染";
					} else {
						await MarkdownRenderer.render(
							this.app,
							paragraphs[i],
							pagesLine,
							this.ctx.sourcePath,
							this.plugin
						);
					}
					contend.appendChild(pagesLine);
					pagesLines.push(pagesLine); //
				}
			}
			div.appendChild(contend);
		}
		div.appendChild(box);

		this.el.appendChild(div);
	}
}
