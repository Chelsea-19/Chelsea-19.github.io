# 主页优化与评审记录

评审日期：2026-10-03。基于仓库原有信息优化中英文十个页面，主题为 AI Agent / AI4Science 的探索与实践。

## 参考依据

- [Supervisor-Skills README](https://github.com/HKUSTDial/Supervisor-Skills)：借用研究问题、方法、表达、证据相互对应的评审方式。
- [Pre-Submission Reviewer](https://github.com/HKUSTDial/Supervisor-Skills/blob/main/skills/pre-submission-reviewer/SKILL.md)：发现应有具体位置、严重性和可执行修复。
- [Evidence discipline](https://github.com/HKUSTDial/Supervisor-Skills/blob/main/skills/paper-writer/references/evidence-discipline.md)：主张强度应匹配已有证据。
- [AI-tone guardrails](https://github.com/HKUSTDial/Supervisor-Skills/blob/main/skills/paper-polish/references/ai-tone-guardrails.md)：用具体对象与任务替代泛化的宣传措辞。
- [UI UX Pro Max Skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/blob/main/.claude/skills/ui-ux-pro-max/SKILL.md)：参考其个人主页、研究机构、学术排版和可用性规则，采用编辑排版与清晰网格；未照搬模板。

参考仓库提供评审与设计方法，不作为个人经历或研究成果来源。

## 已修复的内容问题

| 发现 | 修复 |
| --- | --- |
| 中文导航、作者与页脚姓名不一致 | 统一为 Jinglin (Felix) Liang / 梁敬林（Felix） |
| 学历、研究和实习被列为“荣誉” | 首页改为研究问题、代表工作、经历速览 |
| 项目、经历、成果页资料按钮指向 `#` | 移除空链接，保留原有演示与 GitHub 入口 |
| 未发表稿件的 BibTeX 使用错误作者 | 移除，继续明确标注稿件撰写中、综述开发中 |
| 两个 CV PDF 实际为 Placeholder | 保留原文件，将界面入口改为邮件索取简历 |
| 本科院校与专业仍为模板占位 | 从展示中移除；保留 NTU、Parexel、UMU 的已有信息 |
| 经历 metadata 列出正文没有的 SAS、McKinsey | 与正文统一 |
| 部分项目意义被写成尚未验证的效果 | 改为研究问题或探索重点，未新增准确率、效率或临床效果 |

独立内容评审对照原始源码，确认主要事实保留；稿件状态没有升级成已发表，项目演示没有包装成经过临床验证的产品。Evo 2 的标题明确研究物种，CarePilot 的英文范围与中文“糖尿病合并高血压”一致。

## 设计与交互

- 米白背景、墨色正文、单一深蓝强调色，细分隔线与 serif 标题。
- 使用原有照片；取消渐变、胶囊标签堆叠、表情图标和全卡片布局。
- SVG 图标与系统字体，无远程字体依赖。
- 深浅色主题、保存偏好、键盘跳转、可见焦点、菜单状态标签、Escape 关闭。
- 中英文对应页面切换，保留原路由与项目锚点。

## 验证

原项目为静态站点，无构建步骤。执行：

```sh
python3 scripts/check_site.py
node --check assets/js/main.js
git diff --check
```

静态检查覆盖十个页面的内部链接、项目锚点、资源存在性、唯一 ID、主标题和当前导航。

Playwright + Chromium 浏览器检查覆盖十个页面在 1440、1024、768、390、320 px 下的布局，共 50 个页面与宽度组合：无横向溢出、图片加载错误、HTTP 错误或 JavaScript 异常。交互检查包括手机导航、Escape 关闭、主题保存、语言切换及项目锚点在固定导航下的定位。

内容来源是原仓库。外部演示入口沿用原有地址，功能与可用性未进行独立验证；学生身份和预计学位时间也按原站保留，未根据当前日期推断毕业。

独立设计评审未发现影响交付的视觉问题。按其建议，手机主要说明文字统一为 16px、长正文限制为 72ch，并补上键盘打开菜单时自动聚焦导航。浏览器复测通过。常规文字最小对比度：浅色 5.27:1、深色 7.81:1；主按钮分别为 9.54:1、8.71:1，达到 WCAG AA。

## 最终预览

[桌面英文预览](preview-desktop.png) · [手机中文预览](preview-mobile.png)
