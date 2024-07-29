const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export class AppAreaColors {
	static DEFAULT_PROJECT_COLOR: string = "#FFD500";
	static FOODS_COLOR: string | undefined = "#A9C436";
	static CAMPUS_COLOR: string | undefined = "#D547B6";
	static HOUSING_COLOR: string | undefined = "#1AA378";
	static NEWS_COLOR: string | undefined = undefined;
}

export default {
	light: {
		text: '#000',
		background: '#fff',
		tint: tintColorLight,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorLight,
	},
	dark: {
		text: '#fff',
		background: '#000',
		tint: tintColorDark,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorDark,
	},
};
