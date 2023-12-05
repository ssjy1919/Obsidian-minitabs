
import { Plugin } from 'obsidian';
import { SettingTab } from './tabsSettingTab';
import { CodeFenceProcessor } from './codeBlock/codeFenceProcessor';


export interface TabsSettings {
	markTime: string;
}

export const DEFAULT_SETTINGS: TabsSettings = {
	markTime: '1970-01-01 00:00:00',
};

export default class TabsPlugin extends Plugin {
	settings: TabsSettings;
	async onload() {
		await this.loadSettings();
		this.addSettingTab(new SettingTab(this.app, this));

		new CodeFenceProcessor(this.app, this, this.settings);
		
	}
	onunload() {

	}
	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}
	async saveSettings() {
		await this.saveData(this.settings);
	}
}