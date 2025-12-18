// workbox-config.js
module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,js,png,jpg,jpeg,svg,gif,json}' // 包含 json 以缓存 manifest
	],
    // 忽略生成脚本本身、git目录、node_modules
	globIgnores: [
		'node_modules/**/*',
		'workbox-config.js',
		'update_html.py',
        'package.json',
        'package-lock.json',
		'.github/**/*',
        '.git/**/*'
	],
	swDest: 'sw.js',
    // 针对GitHub Pages的重要配置：忽略URL参数，防止缓存失效
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
    // 使用 GenerateSW 模式，自动生成简单的 Service Worker
    // 这种模式会自动预缓存所有匹配 globPatterns 的文件
    // 对于纯静态网站，这是最高效的模式
    runtimeCaching: [{
        // 对外部 CDN 资源（如果有）使用 StaleWhileRevalidate 策略
        urlPattern: ({url}) => url.origin !== self.location.origin,
        handler: 'StaleWhileRevalidate'
    }]
};
