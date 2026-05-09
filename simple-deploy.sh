#!/bin/bash

# 最简单的部署脚本 - 专门用于 OpenCloudOS
set -e

echo "=========================================="
echo "  🚀 Tripsy 简单部署脚本"
echo "=========================================="

# 1. 安装 Node.js
echo "📦 安装 Node.js 24..."
curl -fsSL https://rpm.nodesource.com/setup_24.x | bash -
yum install -y nodejs

# 2. 安装 pnpm
echo "📦 安装 pnpm..."
npm install -g pnpm@9

# 3. 安装 PM2
echo "📦 安装 PM2..."
npm install -g pm2

# 4. 安装 Nginx
echo "📦 安装 Nginx..."
yum install -y nginx

# 5. 进入项目目录
cd /root/tripsy

# 6. 安装依赖
echo "📦 安装项目依赖..."
pnpm install

# 7. 构建项目
echo "🔨 构建项目..."
pnpm run build

# 8. 用 PM2 启动
echo "🚀 启动应用..."
pm2 start npm --name "tripsy" -- start

# 9. 保存 PM2 配置
pm2 save
pm2 startup

# 10. 配置 Nginx
echo "🔧 配置 Nginx..."
cat > /etc/nginx/conf.d/tripsy.conf << 'EOF'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# 11. 启动 Nginx
echo "🚀 启动 Nginx..."
systemctl start nginx
systemctl enable nginx

echo ""
echo "=========================================="
echo "  ✅ 部署完成！"
echo "=========================================="
echo ""
echo "🌐 访问地址：http://$(curl -s ifconfig.me)"
echo ""
echo "📋 有用的命令："
echo "   查看状态: pm2 status"
echo "   查看日志: pm2 logs tripsy"
echo "   重启应用: pm2 restart tripsy"
echo ""
