# 这是一个用于本地运行的Python脚本，用于批量修改HTML文件以支持PWA
import os

# 配置项目根目录名称，用于处理绝对路径（如果是GitHub Pages子目录部署，建议使用相对路径或指定仓库名）
# 这里的逻辑是计算每个HTML文件相对于根目录的深度，自动生成正确的相对路径
ROOT_DIR = "."

# 要插入的HTML代码模板
# 注意：我们使用相对路径前缀占位符 {prefix}
CODE_TO_INSERT = '''
<link rel="manifest" href="{prefix}manifest.json">
<meta name="theme-color" content="#8b0000">
<script>
    if ('serviceWorker' in navigator) {{
        window.addEventListener('load', () => {{
            navigator.serviceWorker.register('{prefix}sw.js').then(registration => {{
                console.log('SW registered:', registration);
            }}).catch(error => {{
                console.log('SW registration failed:', error);
            }});
        }});
    }}
</script>
'''

def update_html_files():
    for root, dirs, files in os.walk(ROOT_DIR):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                
                # 计算当前文件距离根目录的层级深度
                # 例如：./index.html 深度为0
                # ./html/bestiary/beasts.html 深度为2
                rel_path = os.path.relpath(root, ROOT_DIR)
                if rel_path == ".":
                    depth = 0
                else:
                    depth = len(rel_path.split(os.sep))
                
                # 生成回溯前缀，例如 "../../"
                prefix = "../" * depth if depth > 0 else "./"
                
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    # 检查是否已经添加过，避免重复
                    if "navigator.serviceWorker.register" in content:
                        print(f"跳过 (已存在): {file_path}")
                        continue
                        
                    # 在 </head> 标签前插入代码
                    if "</head>" in content:
                        new_content = content.replace(
                            "</head>", 
                            CODE_TO_INSERT.format(prefix=prefix) + "\n</head>"
                        )
                        
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(new_content)
                        print(f"已更新: {file_path}")
                    else:
                        print(f"警告: 找不到 </head> 标签: {file_path}")
                        
                except Exception as e:
                    print(f"处理出错 {file_path}: {e}")

if __name__ == "__main__":
    update_html_files()
