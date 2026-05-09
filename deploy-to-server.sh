#!/bin/bash

# ============================================
# Tripsy 一键部署脚本（腾讯云轻量应用服务器）
# ============================================

set -e

echo "=========================================="
echo "  🚀 Tripsy 一键部署脚本"
echo "=========================================="
echo ""

# 检查是否是 root 用户
if [ "$EUID" -ne 0 ]; then 
    echo "❌ 请使用 root 用户运行此脚本"
    echo "   使用命令: sudo $0"
    exit 1
fi

echo "📦 更新系统包..."
apt-get update -y

echo ""
echo "🔧 安装基础工具..."
apt-get install -y curl git nginx certbot python3-certbot-nginx

echo ""
echo "📦 安装 Node.js 24..."
curl -fsSL https://deb.nodesource.com/setup_24.x | bash -
apt-get install -y nodejs

echo ""
echo "📦 安装 pnpm..."
npm install -g pnpm@9

echo ""
echo "📦 安装 PM2..."
npm install -g pm2

echo ""
echo "=========================================="
echo "  📂 克隆项目代码"
echo "=========================================="
echo ""

cd /var/www
if [ -d "tripsy" ]; then
    echo "⚠️  tripsy 目录已存在，正在备份..."
    mv -f tripsy tripsy.backup.$(date +%Y%m%d%H%M%S)
fi

echo "🔄 正在克隆 GitHub 仓库..."
git clone https://github.com/pankka-728/tripsy.git
cd tripsy

echo ""
echo "📦 安装依赖..."
pnpm install

echo ""
echo "🏗️  构建项目..."
pnpm run build

echo ""
echo "=========================================="
echo "  🚀 启动应用"
echo "=========================================="
echo ""

# 停止旧的 PM2 进程（如果存在）
pm2 delete tripsy 2>/dev/null || true

echo "▶️  启动应用..."
pm2 start npm --name "tripsy" -- start

echo "💾 保存 PM2 配置..."
pm2 save
pm2 startup systemd -u root --hp /root | tail -n 1 > /tmp/pm2-startup.sh
chmod +x /tmp/pm2-startup.sh
/tmp/pm2-startup.sh

echo ""
echo "=========================================="
echo "  🌐 配置 Nginx"
echo "=========================================="
echo ""

# 配置 Nginx
cat > /etc/nginx/sites-available/tripsy << 'EOF'
server {
    listen 80;
    server_name _;

    client_max_body_size 20M;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# 启用 Nginx 配置
rm -f /etc/nginx/sites-enabled/default
ln -sf /etc/nginx/sites-available/tripsy /etc/nginx/sites-enabled/

echo "🔍 测试 Nginx 配置..."
nginx -t

echo "🔄 重启 Nginx..."
systemctl restart nginx
systemctl enable nginx

echo ""
echo "=========================================="
echo "  ✅ 部署完成！"
echo "=========================================="
echo ""
echo "🌐 访问地址：http://$(curl -s ifconfig.me)"
echo ""
echo "📋 有用的命令："
echo "   查看应用状态: pm2 status"
echo "   查看应用日志: pm2 logs tripsy"
echo "   重启应用:     pm2 restart tripsy"
echo "   停止应用:     pm2 stop tripsy"
echo "   查看 Nginx 状态: systemctl status nginx"
echo ""
echo "🔐 配置 HTTPS（需要域名）："
echo "   1. 把域名解析到服务器 IP"
echo "   2. 运行: certbot --nginx -d 你的域名.com"
echo ""
echo "🎉 Tripsy 部署成功！"
echo ""
