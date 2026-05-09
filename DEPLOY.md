# Tripsy 旅游网站 - 上线部署指南

## 项目概述
Tripsy 是一个全球定制旅游网站，支持 AI 旅游规划师、会员系统、管理后台等完整功能。

## 技术栈
- **框架**: Next.js 16 (App Router)
- **核心**: React 19 + TypeScript 5
- **UI组件**: shadcn/ui + Tailwind CSS 4
- **包管理器**: pnpm

---

## 部署前准备

### 1. 环境变量配置

在项目根目录创建 `.env.production` 文件：

```bash
# 网站基础配置
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Tripsy

# Supabase 数据库配置（可选，如果使用）
SUPABASE_URL=your-supabase-project-url
SUPABASE_ANON_KEY=your-supabase-anon-key

# 对象存储配置（可选，如果使用）
S3_ACCESS_KEY_ID=your-access-key
S3_SECRET_ACCESS_KEY=your-secret-key
S3_REGION=your-region
S3_BUCKET=your-bucket-name

# Coze AI 配置（可选，如果使用）
COZE_API_KEY=your-coze-api-key
COZE_BOT_ID=your-bot-id
```

### 2. 域名准备
- 购买并注册域名（推荐使用 .com、.cn 等）
- 配置 DNS 解析，将域名指向你的服务器或 CDN

### 3. 服务器准备（可选，自行部署时需要）
如果选择自行部署服务器：
- **推荐配置**: 2核4G内存，50G SSD
- **操作系统**: Ubuntu 22.04 LTS
- **Node.js版本**: 24.x
- **端口要求**: 5000

---

## 部署方式一：使用 Coze 平台部署（推荐）

### 步骤 1: 代码托管
1. 将代码推送到 Git 仓库（GitHub / GitLab / Gitee）
2. 确保仓库包含以下文件：
   - `package.json`
   - `pnpm-lock.yaml`
   - `.coze` 配置文件
   - 完整的源代码

### 步骤 2: Coze 平台部署
1. 登录 [Coze 平台](https://www.coze.cn)（中国地区使用 coze.cn）
2. 创建新项目或导入现有项目
3. 连接你的 Git 仓库
4. 配置环境变量（在 Coze 平台设置中）
5. 点击部署按钮
6. 等待部署完成，获取访问域名

### 优点
- ✅ 一键部署，无需运维
- ✅ 自动 HTTPS
- ✅ 全球 CDN 加速
- ✅ 自动扩缩容
- ✅ 内置监控和日志

---

## 部署方式二：Docker 部署

### 1. 创建 Dockerfile
在项目根目录创建 `Dockerfile`：

```dockerfile
# 构建阶段
FROM node:24-alpine AS builder
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm@9

# 复制依赖文件
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 复制源代码
COPY . .

# 构建应用
RUN pnpm run build

# 生产阶段
FROM node:24-alpine AS runner
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm@9

# 复制构建产物
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# 设置环境变量
ENV NODE_ENV=production
ENV PORT=5000

# 暴露端口
EXPOSE 5000

# 启动应用
CMD ["node", "server.js"]
```

### 2. 创建 docker-compose.yml
```yaml
version: '3.8'
services:
  tripsy:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://your-domain.com
    restart: always
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:5000"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### 3. 构建和运行
```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f
```

---

## 部署方式三：Vercel 部署

### 1. 连接仓库
1. 登录 [Vercel](https://vercel.com)
2. 导入你的 Git 仓库
3. 配置项目设置

### 2. 配置环境变量
在 Vercel 项目设置中添加所有必需的环境变量。

### 3. 部署
- 推送到 main 分支自动触发部署
- 或手动点击部署按钮

---

## 部署方式四：传统服务器部署（Nginx + PM2）

### 1. 服务器环境准备
```bash
# 更新系统
sudo apt update && sudo apt upgrade -y

# 安装 Node.js 24
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt install -y nodejs

# 安装 pnpm
npm install -g pnpm@9

# 安装 Nginx
sudo apt install -y nginx

# 安装 PM2
npm install -g pm2
```

### 2. 上传代码
```bash
# 在服务器上克隆代码
git clone your-repo-url /var/www/tripsy
cd /var/www/tripsy

# 安装依赖
pnpm install

# 构建项目
pnpm run build
```

### 3. 配置 PM2
创建 `ecosystem.config.js`：
```javascript
module.exports = {
  apps: [{
    name: 'tripsy',
    script: './scripts/start.sh',
    cwd: '/var/www/tripsy',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    }
  }]
}
```

启动应用：
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 4. 配置 Nginx
创建 `/etc/nginx/sites-available/tripsy`：
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # 日志配置
    access_log /var/log/nginx/tripsy-access.log;
    error_log /var/log/nginx/tripsy-error.log;

    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/javascript application/json;

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 代理到 Next.js
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
# 创建软链接
sudo ln -s /etc/nginx/sites-available/tripsy /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

### 5. 配置 HTTPS（使用 Let's Encrypt）
```bash
# 安装 Certbot
sudo apt install -y certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# 自动续期
sudo certbot renew --dry-run
```

---

## 部署后检查清单

### 1. 功能检查
- [ ] 首页正常加载
- [ ] 所有页面路由正常
- [ ] 图片资源正确加载
- [ ] 表单提交正常
- [ ] 会员登录功能正常
- [ ] 管理后台可访问
- [ ] 移动端响应式正常

### 2. 性能检查
- [ ] Lighthouse 得分 > 90
- [ ] 页面加载时间 < 3秒
- [ ] 图片已优化
- [ ] 静态资源已缓存

### 3. 安全检查
- [ ] HTTPS 已启用
- [ ] 环境变量未泄露
- [ ] 敏感接口已保护
- [ ] XSS/CSRF 防护已配置

### 4. SEO 检查
- [ ] 页面标题和 meta 描述正确
- [ ] robots.txt 存在
- [ ] sitemap.xml 已生成
- [ ] 结构化数据已添加

---

## 监控和维护

### 1. 日志管理
- **应用日志**: 查看 PM2 日志 `pm2 logs tripsy`
- **Nginx 日志**: `/var/log/nginx/`
- **错误监控**: 集成 Sentry 或类似服务

### 2. 性能监控
- 使用 New Relic 或 Datadog
- 监控服务器资源使用情况
- 设置告警阈值

### 3. 备份策略
- 数据库定期备份
- 用户上传文件备份
- 配置文件版本控制

### 4. 更新部署
```bash
# 拉取最新代码
git pull origin main

# 安装依赖
pnpm install

# 构建
pnpm run build

# 重启应用
pm2 restart tripsy
```

---

## 常见问题

### Q: 部署后页面空白怎么办？
A: 检查浏览器控制台错误，确认环境变量配置正确，检查构建日志。

### Q: 如何配置自定义域名？
A: 在 DNS 提供商处添加 CNAME 或 A 记录，指向你的部署地址。

### Q: 图片加载失败？
A: 检查对象存储配置，确认图片 URL 可访问，检查 CORS 配置。

### Q: 会员登录不工作？
A: 检查认证配置，确认 Cookie 域名设置正确，检查 HTTPS 配置。

---

## 联系支持
如有部署问题，请联系技术支持团队。

---

**祝您部署顺利！** 🚀
