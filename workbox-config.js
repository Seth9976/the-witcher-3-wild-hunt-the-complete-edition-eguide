module.exports = {
	globDirectory: '.',
	// 1. 【预缓存白名单】只缓存核心文件，确保网站能“秒开”
    // 注意：这里去掉了 **/*.html，只保留根目录的 index.html
	globPatterns: [
		'index.html',
		'manifest.json',
		'static/css/**/*.css',
		'static/js/**/*.js',
        'static/images/icon-*.png'
	],
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
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
    // 防止大文件（如意外包含的视频）卡死缓存
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, 

	// 2. 【运行时缓存策略】核心优化部分
	runtimeCaching: [
        // 策略 A: 攻略内容页面 (HTML)
        // 使用 "StaleWhileRevalidate" 策略：
        // 含义：用户访问时，立即返回缓存（速度极快），同时在后台去网络拉取最新版更新缓存。
        // 如果没网，就直接用缓存。
		{
			urlPattern: /\/html\/.*\.html$/,
			handler: 'StaleWhileRevalidate',
			options: {
				cacheName: 'guide-content-cache',
				expiration: {
					maxEntries: 200, // 最多缓存200个最近访问的攻略页，避免占用手机过多空间
					maxAgeSeconds: 30 * 24 * 60 * 60, // 30天过期
				},
			},
		},
        // 策略 B: 图片资源
        // 使用 "CacheFirst" 策略：
        // 含义：图片一般不常改动，优先读缓存。缓存里没有才去网络下。节省流量。
		{
			urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
			handler: 'CacheFirst',
			options: {
				cacheName: 'guide-images-cache',
				expiration: {
					maxEntries: 500, // 最多缓存500张图片
					maxAgeSeconds: 60 * 24 * 60 * 60, // 60天过期
				},
			},
		},
        // 策略 C: 其他外部资源 (如 Google Fonts, CDN 等)
		{
			urlPattern: ({url}) => url.origin !== self.location.origin,
			handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'external-resources',
            }
		}
	]
};
