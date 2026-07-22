# awesome-muse-video-prompts-and-skills
ImagineVid 品牌的 Muse Video 官方预览提示词、可播放案例与导演工作流资料仓库。

<directory>
data/ - 7 条可播放提示词、5 条官方预览案例、六类视频工作流与 13 语本地化覆盖层。
docs/ - 预览状态、分类规则、贡献规范、本地开发、翻译审计与 X 视频证据政策。
public/images/ - ImagineVid 自有仓库封面。
scripts/ - 数据校验、候选评分、Issue 同步与 14 语 README 生成。
.github/ - Issue 模板、标签与 GitHub Actions。
</directory>

<config>
package.json - Node 24 与 pnpm 的验证、测试和生成命令。
</config>

## 产品边界
- 目标远程为 `imagineVid/Awesome-muse-video-prompts-and-skills`。
- Muse Video 指 Meta 于 2026 年 7 月预览、尚待正式开放的视频生成模型；不得虚构版本号、开发者接口或普遍可用状态。
- 官方能力事实只使用 Meta 第一方资料；产品 CTA 指向真实存在的 `https://imaginevid.io/reference-video` 及已支持的语言路由，不得根据名称猜测站内路径。
- 当前公开案例来自 Meta 官方预览帖；同一官方帖可包含多个独立视频，但每条记录必须以媒体 URL 区分。

## 内容规则
- 每条视频案例必须保留完整镜头简报、规范来源、作者、直接播放 URL、输入模式和一个主要工作流。
- 英文是数据真源，13 个非英语 README 使用人工审核译文；生成页面同时保留英文原文以便核验。
- X 搜索只用于发现，原始响应与凭据不得进入 Git；静态图片不能作为视频案例证据。
- 模型限制必须如实保留，包括 Meta 已声明的音画同步和高速运动物理准确性不足。

## 发布闸门
- 运行 `pnpm run generate`、`pnpm test`、`pnpm run typecheck`；需要媒体级重复审计时运行 `pnpm run audit:duplicates`。
- README 是结构化数据的生成产物，数据、生成器与全部语言 README 必须同一次提交。

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
