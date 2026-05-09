# 🚀 Coze 平台快速部署指南

## 5分钟快速上手指南

### 前置条件
- ✅ 项目代码已准备好（当前状态）
- ✅ 有 Coze 平台账号
- ✅ 有 Git 仓库（GitHub/GitLab/Gitee）

---

## 步骤一：将代码推送到 Git 仓库

### 1.1 初始化 Git（如果还没有）
```bash
cd /workspace/projects

# 检查当前 git 状态
git status

# 如果还没有 git 仓库，初始化
git init
git add .
git commit -m "Initial commit: Tripsy 全球定制旅游网站"
```

### 1.2 连接远程仓库
```bash
# 在 GitHub/GitLab/Gitee 创建新仓库
# 然后添加远程仓库地址
git remote add origin https://github.com/your-username/tripsy.git

# 推送到 main 分支
git branch -M main
git push -u origin main
```

---

## 步骤二：登录 Coze 平台

1. 访问 [Coze 官网](https://www.coze.com)
2. 注册/登录你的 Coze 账号
3. 进入工作台

---

## 步骤三：创建新项目

### 3.1 导入项目
1. 点击"新建项目"或"导入项目"
2. 选择"从 Git 仓库导入"
3. 授权 Coze 访问你的 Git 仓库
4. 选择刚才推送的 `tripsy` 仓库
5. 选择 `main` 分支

### 3.2 配置项目设置
```
项目名称: Tripsy - 全球定制旅游网站
项目描述: AI驱动的全球私人定制旅游平台，支持智能行程规划、会员系统、管理后台
```

---

## 步骤四：配置环境变量

在 Coze 项目设置中找到"环境变量"或"变量配置"，添加以下变量：

### 必需配置
```bash
# 网站基础配置
NEXT_PUBLIC_SITE_URL=https://your-coze-subdomain.coze.app
NEXT_PUBLIC_SITE_NAME=Tripsy

# Node.js 环境
NODE_ENV=production
```

### 可选配置（根据需要添加）
```bash
# 如果使用 Supabase 数据库
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-key

# 如果使用 Coze AI
COZE_API_KEY=your-coze-api-key
COZE_BOT_ID=your-bot-id
```

**注意**：
- 将 `your-coze-subdomain` 替换为你的实际子域名
- 敏感信息（如 API Key）不要提交到 Git 仓库

---

## 步骤五：部署项目

### 5.1 触发部署
1. 在 Coze 项目页面找到"部署"按钮
2. 点击"立即部署"或"开始部署"
3. 等待部署完成（通常需要 2-5 分钟）

### 5.2 监控部署过程
部署过程中你可以看到：
- ✅ 代码拉取
- ✅ 依赖安装
- ✅ 项目构建
- ✅ 服务启动
- ✅ 健康检查

### 5.3 部署成功！
部署完成后，你会获得：
- 🎉 访问地址：`https://your-subdomain.coze.app`
- 📊 部署状态：运行中
- 📈 监控面板：实时查看性能和日志

---

## 步骤六：验证部署

### 6.1 基础功能检查
访问你的部署地址，检查：
- [ ] 首页正常加载
- [ ] 导航菜单正常工作
- [ ] 图片资源正确显示
- [ ] 点击"定制旅游"可以跳转
- [ ] 点击"热门目的地"可以跳转
- [ ] 点击"登录"可以跳转到登录页

### 6.2 会员功能检查
- [ ] 测试手机号登录（使用模拟数据）
- [ ] 测试微信登录（模拟）
- [ ] 登录后可以访问会员中心
- [ ] 会员中心功能正常

### 6.3 管理后台检查
- [ ] 访问 `/admin` 路径
- [ ] 管理后台可以正常打开
- [ ] 仪表盘数据正常显示

### 6.4 移动端检查
- [ ] 使用手机访问，响应式正常
- [ ] 触摸操作流畅

---

## 步骤七：绑定自定义域名（可选）

### 7.1 在 Coze 平台配置
1. 进入项目设置 → 域名管理
2. 点击"添加自定义域名"
3. 输入你的域名：`www.your-domain.com`

### 7.2 配置 DNS 解析
在你的域名注册商处添加 DNS 记录：

```
类型: CNAME
主机记录: www
记录值: your-coze-subdomain.coze.app
TTL: 600
```

### 7.3 验证域名
等待 DNS 生效（通常需要 5-30 分钟），然后在 Coze 平台验证域名。

### 7.4 启用 HTTPS
Coze 会自动为你配置免费的 SSL 证书！

---

## 高级配置

### 配置自动部署
在 Coze 项目设置中开启"自动部署"：
- 推送到 `main` 分支自动触发部署
- 可以配置部署前检查
- 支持部署回滚

### 配置监控告警
- 开启性能监控
- 设置错误告警
- 配置日志收集

### 配置团队协作
- 添加团队成员
- 配置权限管理
- 设置部署审批流程

---

## 常见问题排查

### Q: 部署失败怎么办？
A: 检查部署日志，常见原因：
- 环境变量配置错误
- 依赖安装失败
- 构建过程出错

### Q: 页面加载慢？
A: Coze 自动配置了 CDN，检查：
- 图片是否优化
- 是否开启了缓存
- 网络连接是否正常

### Q: 如何回滚到之前版本？
A: 在 Coze 部署历史中选择之前的版本，点击"回滚"。

### Q: 会员登录不工作？
A: 检查：
- 环境变量 `NEXT_PUBLIC_SITE_URL` 是否正确
- 是否使用 HTTPS
- Cookie 设置是否正确

---

## 恭喜！🎊

你已经成功将 Tripsy 旅游网站部署到 Coze 平台！

**下一步**：
- 📱 测试移动端体验
- 📊 查看监控数据
- 🔧 根据需要调整配置
- 🚀 开始推广你的网站！

---

## 需要帮助？

- 查看 Coze 官方文档：https://docs.coze.com
- 联系 Coze 技术支持
- 查看项目 README.md 和 DEPLOY.md 获取更多详细信息

---

**祝您使用愉快！** ✨
