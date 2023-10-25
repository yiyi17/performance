# 页面体验

- 页面体验相关指标有哪些？
- 有哪些技术优化方案？

## 页面体验指标

### 常用指标
- TTFB
- FP
- FCP
- DOMContentLoaded
- Load

### 其他值得分析的指标

- DNS
- TCP
- 连接复用率：当 DNS 和 TCP 都为 0 的时候，可能是因为这一次请求直接复用了已经存在的 TCP 连接


## 页面性能相关性
[页面性能相关性分析](./correlation.md)


## 常用工具
- Chrome DevTools Performance 主要用于日常开发过程中分析运行时的性能表现。
- Lighthouse 用来生成网页的性能评测报告。
- WebPageTest 用来进行整体的网站质量评估、一站式性能评估。


## 参考网站

- [webPageTest](https://www.webpagetest.org/)
- [webPageTest 中文文档](https://github.com/pwstrick/WebPagetest-Docs)
- [web.dev](https://web.dev/)