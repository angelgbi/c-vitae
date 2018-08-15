
export default {
	head () {
		return {
			title: this.name,
			meta: [
			{hid: 'description', name: 'description', content: this.content}
			]
		}
	},
	data () {
		return {
			name: 'test page',
			content: 'About our company Nuxt.js 2'
		}
	}
}