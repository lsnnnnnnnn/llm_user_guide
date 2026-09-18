# 尚宸智能体知识库用户指南

面向公司同事的 AnythingLLM / Finance Skills 使用指南，包含：

- Query 文档问答与 `@agent` 数据查询入口；
- 日线、CSV、单证券 Quant 文字与图表、财报与基本面、历史阈值查询的用法；
- 可复制的自然语言提问示例；
- 已可用及暂未开放能力的清晰边界；
- 常见问题和下载说明。

站点是无依赖的静态 GitHub Pages 页面。源码不包含数据库凭据、业务数据、聊天记录或内部服务地址。

## 本地预览

```bash
python3 -m http.server 8000
```

然后打开 `http://127.0.0.1:8000/`。

## 发布

推送到 `main` 后，仓库内的 GitHub Actions 会将根目录静态文件发布到 GitHub Pages。首次使用时，仓库 Settings → Pages 的 Source 需要选择 **GitHub Actions**。
