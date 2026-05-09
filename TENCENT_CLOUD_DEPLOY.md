# 🚀 腾讯云轻量应用服务器部署指南

## 📋 前置准备

- ✅ 已购买腾讯云轻量应用服务器
- ✅ 服务器 IP 地址
- ✅ SSH 登录密码或密钥
- ✅ 操作系统：Ubuntu 22.04（推荐）

---

## 🚀 快速部署（3步搞定）

### 第一步：登录服务器

使用 SSH 登录你的服务器：

```bash
ssh root@你的服务器IP
# 例如：ssh root@123.45.67.89
```

输入密码后登录成功。

---

### 第二步：下载并运行部署脚本

在服务器上运行以下命令：

```bash
# 下载部署脚本
curl -o deploy.sh https://raw.githubusercontent.com/pankka-728/tripsy/main/deploy-to-server.sh

# 或者，如果上面的地址无法访问，手动复制脚本内容到服务器

# 给脚本添加执行权限
chmod +x deploy.sh

# 运行部署脚本
./deploy.sh
```

---

### 第三步：完成！

脚本运行完成后，你会看到：

```
✅ 部署完成！
🌐 访问地址：http://你的服务器IP
```

在浏览器中访问这个地址就可以看到你的网站了！

---

## 📝 手动部署（如果自动脚本有问题）

### 1. 更新系统

```bash
apt-get update -y
apt-get install -y curl git nginx
```

### 2. 安装 Node.js 24

```bash
curl -fsSL https://deb.nodesource.com/setup_24.x | bash -
apt-get install -y nodejs
npm install -g pnpm@9 pm2
```

### 3. 克隆项目

```bash
cd /var/www
git clone https://github.com/pankka-728/tripsy.git
cd tripsy
pnpm install
pnpm run build
```

### 4. 启动应用

```bash
pm2 start npm --name "tripsy" -- start
pm2 save
pm2 startup
```

### 5. 配置 Nginx

创建 `/etc/nginx/sites-available/tripsy`：

```nginx
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
```

启用配置：

```bash
rm -f /etc/nginx/sites-enabled/default
ln -sf /etc/nginx/sites-available/tripsy /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
systemctl enable nginx
```

---

## 🔧 常用命令

### PM2 应用管理

```bash
# 查看应用状态
pm2 status

# 查看应用日志
pm2 logs tripsy

# 重启应用
pm2 restart tripsy

# 停止应用
pm2 stop tripsy

# 删除应用
pm2 delete tripsy
```

### Nginx 管理

```bash
# 查看 Nginx 状态
systemctl status nginx

# 重启 Nginx
systemctl restart nginx

# 重新加载配置（不中断服务）
systemctl reload nginx

# 查看 Nginx 错误日志
tail -f /var/log/nginx/error.log
```

### 系统更新

```bash
# 更新代码
cd /var/www/tripsy
git pull
pnpm install
pnpm run build
pm2 restart tripsy
```

---

## 🔐 配置 HTTPS（需要域名）

### 1. 准备域名

- 购买一个域名（例如：tripsy.com）
- 在域名 DNS 管理中，添加 A 记录指向你的服务器 IP

### 2. 安装 Certbot

```bash
apt-get install -y certbot python3-certbot-nginx
```

### 3. 申请免费证书

```bash
certbot --nginx -d 你的域名.com
```

按照提示操作，Certbot 会自动配置 HTTPS！

### 4. 自动续期

Certbot 会自动设置定时任务续期证书，无需手动操作。

---

## 📊 监控和维护

### 查看资源使用

```bash
# 查看 CPU、内存使用
htop

# 查看磁盘使用
df -h

# 查看网络连接
netstat -tuln
```

### 查看日志

```bash
# 应用日志
pm2 logs tripsy

# Nginx 访问日志
tail -f /var/log/nginx/access.log

# Nginx 错误日志
tail -f /var/log/nginx/error.log

# 系统日志
tail -f /var/log/syslog
```

---

## 🚨 常见问题

### Q: 无法访问网站？

A: 检查以下几点：
1. 腾讯云防火墙是否开放了 80/443 端口
2. `pm2 status` 查看应用是否运行
3. `systemctl status nginx` 查看 Nginx 是否运行
4. `pm2 logs tripsy` 查看应用日志

### Q: 如何更新代码？

A:
```bash
cd /var/www/tripsy
git pull
pnpm install
pnpm run build
pm2 restart tripsy
```

### Q: 应用崩溃了怎么办？

A:
```bash
pm2 restart tripsy
pm2 logs tripsy  # 查看错误原因
```

---

## 📞 需要帮助？

如果遇到问题：
1. 查看日志文件
2. 检查腾讯云防火墙设置
3. 确保服务器有足够的内存（至少 2GB）

---

## 🎉 部署成功！

恭喜你！现在你有了一个运行在腾讯云轻量应用服务器上的 Tripsy 网站！

- 🌐 访问地址：http://你的服务器IP
- 📱 支持移动端访问
- 🔒 可以配置 HTTPS 加密访问

祝使用愉快！✨
