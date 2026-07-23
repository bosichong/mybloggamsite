export const siteInfo = {
  title: '我的博客',
  subtitle: '一个互联网游民的博客成长之路',
  description: '一款关于独立博客经营的模拟经营游戏',
};

export const navItems = [
  { href: '/', label: '首页', icon: '★' },
  { href: '/download', label: '下载', icon: '⬇' },
  { href: '/sponsor', label: '赞助', icon: '♥' },
  { href: '/circle', label: '圈子', icon: '✦' },
];

export const features = [
  { icon: '✎', title: '多样博文', desc: '生活日记、技术分享、文学创作、艺术作品，每种类型都有独特魅力' },
  { icon: '⚡', title: '技能系统', desc: '提升写作、技术、文学、编程、绘画等能力，解锁更多高级内容' },
  { icon: '🛠', title: '网站维护', desc: 'SEO优化、安全维护、页面美化，确保博客稳定运行' },
  { icon: '📚', title: '学习成长', desc: '自学编程、阅读名著、练习绘画，不断提升个人能力' },
  { icon: '🎮', title: '休闲娱乐', desc: '合理安排休息和娱乐，保持良好的创作状态' },
  { icon: '📊', title: '数据统计', desc: '详细的访问量、收入等数据统计，了解博客运营状况' },
];

export const chapters = [
  { title: '博客萌芽', years: '2002-2005', level: 20, desc: '故事始于2001年的一封神秘邮件，免费域名和主机，从此踏上博客之路。从零开始，在互联网的浪潮中寻找自己的声音。' },
  { title: '博客黄金时代', years: '2005-2010', level: 40, desc: '中文博客的黄金年代。建立友情链接，加入博客联盟，参与优秀博客大奖赛，在这个百家争鸣的时代书写精彩。' },
  { title: '博客转型', years: '2010-2015', level: 60, desc: '移动互联网浪潮来袭。从极客前沿到深度技术，从文学创作到哲学批判，不断探索内容的边界。' },
  { title: '博客挑战', years: '2015-2020', level: 80, desc: '内容创作者的时代。出版书籍，发起开源项目，IP授权合作，在激烈竞争中坚守初心。' },
  { title: '博客重生', years: '2020-2025', level: 100, desc: '回到最初的起点。涉足游戏开发，参与奖项评选，完成从博主到创作者的完整蜕变。' },
];

export const bilibili = {
  bvid: 'BV1CQJ56YEye',
  title: '复古像素游戏：我的博客正在制作中……',
  desc: '这是我的第一款独立开发的游戏，是一款模拟运营维护独立博客的游戏。',
  url: 'https://www.bilibili.com/video/BV1CQJ56YEye',
};

export const qqGroup = {
  number: '217840699',
  message: '欢迎加入讨论',
};

export const platforms = [
  { name: 'Windows', icon: '🪟', status: '开发中', note: '预计暑假发布试玩版本', class: 'is-warning' },
  { name: 'macOS', icon: '🍎', status: '开发中', note: '预计暑假发布试玩版本', class: 'is-warning' },
  { name: 'Linux', icon: '🐧', status: '开发中', note: '预计暑假发布试玩版本', class: 'is-warning' },
];

export const specs = [
  { label: '操作系统', value: 'Windows 7+ / macOS 10.13+ / Linux' },
  { label: '处理器', value: '双核 2.0 GHz 以上' },
  { label: '内存', value: '2 GB RAM' },
  { label: '显卡', value: '支持 OpenGL 3.3 / Vulkan 1.0' },
  { label: '存储', value: '约 200 MB 可用空间' },
  { label: '引擎', value: 'Godot 4.7' },
];

export const sponsorMethods = [
  {
    icon: '♥',
    title: '爱发电',
    desc: '通过爱发电平台赞助，支持独立游戏开发。你的每一份支持都是继续前行的动力。',
    link: '#',
    status: '即将开通',
    btnClass: 'is-warning',
    disabled: true,
  },
  {
    icon: '☕',
    title: '请喝咖啡',
    desc: '如果我的游戏给你带来了快乐，不妨请我喝杯咖啡。每一杯咖啡都是温暖的鼓励。',
    link: 'https://www.suiyan.cc/assets/images/zs.jpg',
    status: '扫码赞赏',
    btnClass: 'is-success',
    disabled: false,
    qrcode: 'https://www.suiyan.cc/assets/images/zs.jpg',
  },
  {
    icon: '📺',
    title: 'B站充电',
    desc: '在 Bilibili 为我充电，支持独立游戏开发。每一个充电都是前进的动力。',
    link: 'https://space.bilibili.com/275991552',
    status: '前往充电',
    btnClass: 'is-primary',
    disabled: false,
  },
  {
    icon: '★',
    title: 'GitHub Star',
    desc: '在 GitHub 上给项目点个 Star，这是最简单也最有力的支持方式。',
    link: 'https://github.com/bosichong/MyBlogGame',
    status: '立即前往',
    btnClass: 'is-primary',
    disabled: false,
  },
];

export const sponsorTiers = [
  { key: 'hao', name: '壕赞助', amount: '随意', color: 'is-error' },
  { key: 'dacan', name: '大餐赞助', amount: '¥ 88', color: 'is-warning' },
  { key: 'naicha', name: '奶茶赞助', amount: '¥ 18', color: 'is-primary' },
  { key: 'kafei', name: '咖啡赞助', amount: '¥ 6', color: 'is-success' },
];

export const sponsorsByTier: Record<string, { name: string; role: string; desc: string; url?: string; amount?: string }[]> = {
  hao: [],
  dacan: [],
  naicha: [
    { name: 'liWanr', role: '赞助者', desc: '期待ing，尽快开发，加油！', url: 'https://liWanr.com', amount: '¥ 20' },
    { name: '15', role: '赞助者', desc: '很有意思，加油', url: '#', amount: '¥ 15' },
  ],
  kafei: [],
  other: [
    { name: 'bosichong', role: '开发者 / 独立游戏人', desc: '游戏制作人，独立博客爱好者' },
  ],
};

export const sponsorRecords = [
  {
    amount: '¥1.00',
    from: 'Vind🌙',
    message: '最低金额，不要介意哈，加油[加油]',
    blog: 'https://vind.ink/',
    time: '2026-07-23 17:25:14',
  },
  {
    amount: '¥15.00',
    from: '15',
    message: '很有意思，加油',
    blog: '#',
    time: '2026-07-19 09:37:55',
  },
  {
    amount: '¥20.00',
    from: '不叫李宛',
    message: 'slogan输不全，差评',
    blog: 'https://liwanr.com/',
    time: '2026-07-17 16:48:20',
  },
];

export const blogAggregators = [
  { name: '博友圈', url: 'https://www.boyouquan.com/', desc: '博客人的朋友圈，将一个个散落在各处的孤岛连接成一片广袤无垠的新大陆！' },
  { name: '十年之约', url: 'https://www.foreverblog.cn/', desc: '一个人的寂寞，一群人的狂欢。汇聚坚持写作十年的独立博主。' },
  { name: 'BlogFinder', url: 'https://bf.zzxworld.com/', desc: '聚合优秀的个人博客，发掘优质的个人博客文章和内容。' },
  { name: '好站网', url: 'https://haozhan.wang/', desc: '发现好站，展示好站，收录优质中文独立网站。' },
  { name: 'BlogsClub', url: 'https://www.blogsclub.org/apply.html?inviteCode=8f2cd654', desc: '致力于为每一位博主提供展示自我、互动交流的绝佳平台。' },
  { name: '有个站', url: 'https://www.ygz.ink', desc: '收录优质中文独立博客，探索网络世界的个性表达与深度思考。' },
  { name: '若梦博客', url: 'https://www.rmbk.cc', desc: '每一个博客都是精神的驿站，我们不同行，但彼此照亮。' },
  { name: '博客大联盟', url: 'https://bo.ke/', desc: '发现值得反复阅读的独立博客，连接每一个独立思考的灵魂。' },
  { name: '你来啦！', url: 'https://nilai.la/', desc: '博客站长聚合平台 · 在地图上发现每一个独立博客' },
];

export const extraBloggers = [
  { blog: 'liWanr', author: 'liWanr', type: '综合', lv: 1, url: 'https://liWanr.com' },
  { blog: '一望成欢🍀', author: '一望成欢🍀', type: '综合', lv: 1, url: 'https://wanqingcheng.cn' },
  { blog: '姓王者的博客', author: '姓王者', type: '综合', lv: 1, url: 'https://xingwangzhe.fun/' },
  { blog: '秋风于渭水', author: '去年夏天', type: '综合', lv: 1, url: 'https://www.tjsky.net' },
  { blog: '热衷于的博客', author: '热衷于', type: '综合', lv: 1, url: 'https://zooyoo.top/' },
  { blog: '爱娃子', author: '爱娃子', type: '综合', lv: 1, url: 'https://www.aiwazi.com/' },
  { blog: '瓦匠不舟', author: '瓦匠', type: '综合', lv: 1, url: 'https://airy.ink' },
  { blog: '云白的地球online', author: 'deepwhitex', type: '综合', lv: 1, url: 'https://deepwhitex.com' },
  { blog: 'Mayx的博客', author: 'Mayx', type: '综合', lv: 1, url: 'https://mabbs.github.io' },
  { blog: '宗宗酱', author: '宗宗酱', type: '综合', lv: 1, url: 'https://ygz.ink' },
  { blog: '荒野菲克', author: '菲克', type: '综合', lv: 1, url: 'https://ficor.net' },
  { blog: '海上的宫殿', author: 'Soha', type: '综合', lv: 1, url: 'https://soha.moe/' },
  { blog: '黄鼠狼的树洞', author: '小黄', type: '综合', lv: 1, url: 'https://blog.weasel6.cn/' },
  { blog: '允赫先森\'s Blog', author: '允赫先森', type: '综合', lv: 1, url: 'https://www.3v.hk' },
  { blog: '崔话记', author: '崔话记', type: '综合', lv: 1, url: 'https://cuixiping.com/' },
  { blog: "Liang's Blog", author: 'Liang', type: '综合', lv: 1, url: 'https://in-x.cc' },
  { blog: '风·墨', author: 'Vind', type: '综合', lv: 1, url: 'https://Vind.ink' },
];
