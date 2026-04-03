const pageMeta = {
  home: {
    title: "首页",
    eyebrow: "HOME",
    text: "这里先保留空白页。后续可以把首页概览、快捷操作和状态信息补进来。"
  },
  proxy: {
    title: "代理",
    eyebrow: "PROXY",
    text: "代理页目前还是占位状态，后面可以接入节点、策略组和代理规则。"
  },
  subscription: {
    title: "订阅",
    eyebrow: "SUBSCRIPTION",
    text: "订阅页暂时留白，后续可以放入订阅管理、更新和分组逻辑。"
  },
  connection: {
    title: "连接",
    eyebrow: "CONNECTION",
    text: "连接页暂时留白，后续可以补连接详情、历史记录和延迟状态。"
  },
  rules: {
    title: "规则",
    eyebrow: "RULES",
    text: "规则页暂时留白，后面可以放规则列表、匹配顺序和编辑入口。"
  },
  logs: {
    title: "日志",
    eyebrow: "LOGS",
    text: "日志页暂时留白，后面可以接控制台输出、过滤器和导出功能。"
  },
  test: {
    title: "测试",
    eyebrow: "TEST",
    text: "测试页暂时留白，后面可以加入连通性测试、测速和诊断工具。"
  },
  settings: {
    title: "设置",
    eyebrow: "SETTINGS",
    text: "当前页面是设置总览，左侧导航仅切换视图，后续功能可以继续往这里补。"
  }
};

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("app-ready");

  const navItems = Array.from(document.querySelectorAll(".nav-item[data-page]"));
  const pageTitle = document.getElementById("page-title");
  const settingsPage = document.getElementById("settings-page");
  const placeholderPage = document.getElementById("placeholder-page");
  const placeholderEyebrow = document.getElementById("placeholder-eyebrow");
  const placeholderTitle = document.getElementById("placeholder-title");
  const placeholderText = document.getElementById("placeholder-text");

  const activatePage = (pageKey) => {
    const meta = pageMeta[pageKey] ?? pageMeta.settings;
    const isSettings = pageKey === "settings";

    navItems.forEach((item) => {
      const active = item.dataset.page === pageKey;
      item.classList.toggle("is-active", active);
      if (active) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });

    pageTitle.textContent = meta.title;
    document.title = `Clash Verge Mock - ${meta.title}`;

    settingsPage.hidden = !isSettings;
    placeholderPage.hidden = isSettings;

    if (!isSettings) {
      placeholderEyebrow.textContent = meta.eyebrow;
      placeholderTitle.textContent = meta.title;
      placeholderText.textContent = meta.text;
    }
  };

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      activatePage(item.dataset.page);
    });
  });

  activatePage("settings");
});
