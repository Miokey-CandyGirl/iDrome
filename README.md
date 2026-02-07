# DromAI

一款基于其他大模型API的AI产品，模仿DeepSeek风格，提供现代化、用户友好的聊天界面。

## 功能特性

- 🎨 现代化、响应式设计
- 💬 实时聊天界面
- 📱 支持桌面端、平板和移动端
- 🔄 对话管理（创建、切换、保存）
- ⚙️ 个性化设置（主题、字体大小等）
- 🔐 模拟用户认证
- 💾 本地数据存储
- 🌐 支持多种大模型API集成

## 技术栈

- **前端框架**: React + Vite
- **UI库**: Tailwind CSS
- **状态管理**: React Context API
- **数据存储**: LocalStorage (后期可支持Supabase)
- **API集成**: 支持多种大模型API

## 项目结构

```
DromAI/
├── src/
│   ├── components/
│   │   ├── ChatMessage.jsx        # 聊天消息组件
│   │   ├── ConversationList.jsx   # 对话列表组件
│   │   ├── ChatInput.jsx          # 输入框组件
│   │   ├── SettingsPanel.jsx      # 设置面板组件
│   │   └── AuthForm.jsx           # 登录/注册组件
│   ├── App.jsx                    # 主应用组件
│   ├── main.jsx                   # 应用入口
│   ├── App.css                    # 自定义样式
│   └── index.css                  # 全局样式
├── index.html                     # HTML入口
├── vite.config.js                 # Vite配置
├── tailwind.config.js             # Tailwind配置
├── postcss.config.js              # PostCSS配置
├── package.json                   # 项目依赖
└── README.md                      # 项目说明
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 使用说明

1. **登录/注册**: 首次访问时需要登录或注册账号（模拟认证）
2. **创建对话**: 点击左侧的"+ 新对话"按钮创建新对话
3. **发送消息**: 在输入框中输入消息并按Enter或点击发送按钮
4. **切换对话**: 在左侧对话列表中点击切换不同的对话
5. **调整设置**: 点击右上角的"设置"按钮调整主题、字体大小等

## 未来扩展

- [ ] 对接真实大模型API
- [ ] 支持文件上传与分析
- [ ] 添加语音输入/输出功能
- [ ] 实现对话分享功能
- [ ] 集成提示词模板库
- [ ] 对接Supabase等后端服务
- [ ] 添加用户认证系统
- [ ] 实现多用户协作功能

## 注意事项

- 当前版本使用LocalStorage存储数据，刷新页面后数据会保留
- AI回复为模拟回复，实际应用中需要调用真实的大模型API
- 主题设置支持浅色、深色和跟随系统三种模式

## 许可证

MIT
