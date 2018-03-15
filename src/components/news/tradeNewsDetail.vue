<template>
    <div id="tradeNewsDetail" class="module_right">
      <div class="module_right_title"><span>行业新闻</span>
        <div class="module_positon"><a href="javascript:void(0)" @click="$goRoute('/')">首页</a><font>&gt;</font><a href="javascript:void(0)" @click="$goRoute('/news/tradeNews')">新闻中心</a><font>&gt;</font><i>行业新闻</i></div></div>


      <div class="module_cont" style="font-size:16px; line-height:30px;">
        <div class="module_cont_title"><span>{{detailTitle}}</span><font>{{detailDate}}</font></div>
        <div v-html="detailDesc"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'tradeNewsDetail',
  data() {
    return {
      detailTitle: '',
      detailDate: '',
      detailDesc: '',
      list: [
        { id: 10, title: '定制版网站年代——论如何建设精美实用的网站', releaseTime: '2018-02-01', desc: '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很多站长在进行网站建设的时候，内心偶尔也会感叹，怎么别人家的网站就做的那么精美呢？一个精美又实用的网站真的很吸晴，可以极大地提高用户体验度和停留时间，那么如何才能建设出这样一个“高颜值”的网站呢？<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个网站的颜值，其实就是指网站首页设计效果，在网站首页设计上，走过一段漫长的摸索过程。最早的网站设计，因为技术的欠缺，设计的很简单，当时的网速和服务器的大小质量根本无法承载太多的程序。随着网站技术的成熟，以及互联网的快速发展，网站首页设计开始变得华丽起来，有的网站追求主色调，有的网站为了高大上，还开启了动画效果，不过，随着搜索引擎技术的崛起，以及营销型网站的出现，为了迎合搜索引擎收录习惯、为了让用户快速打开网站，网站首页设计从颜值又归于素朴，甚至被搜索引擎绑架。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;互联网的发展是日新月异的，在经历了SEO野蛮成长之后，搜索引擎为了用户体验，开始打击哪些只为了流量而设计的网站，最少是那些存在作弊嫌疑的网站。这让一度吃香的模板网站开始转向定制网站年代，现在的互联网网速、各种云服务器的大量应用，网站设计又到了追求颜值的年代，当然，现在一个高颜值的网站需要满足这几点需求：<br>\n' +
        '<br>\n' +
        '<div style="text-align:center;"><img src="/static/images/news/2.jpg"  width="800" alt=""/></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>一、增加网站的展示功能</strong><br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高颜值都有一个痛性，那就是让别人不由得多看一眼。能引起别人瞩目的，一个是符合用户的视觉感受，另一个则是独特唯一的。对于高颜值的网站，不仅让用目标用户赏心悦目，对于网站设计爱好者来说，也会产生好感，他们会情不自禁的收藏网站，或者通过社交媒体把网站发给好友看，这种用户自发的传播，会无形中增加的网站的曝光度。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>二、了解搜索引擎</strong><br>\n' +
        '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;搜索引擎给网站带来的流量可以说是源源不断的，很多花了高价钱做了网站的企业因为没有顾及到搜索引擎的“体验”，结果变成了“鸡肋”。如何在顾及搜索引擎的基础上做好网站的颜值呢?<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;顾及搜索引擎的网站想要打造出高颜值，那么，就应该通晓搜索引擎的“习惯”，做好各个网站内链，同时也要通过色彩、架构、排版设计上巧妙搭配，对于那些不利于搜索引起访问的程序，尽量不用，或者放到内页中。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>三、注意用户体验度</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户体验是个宽广的概念，比如售后服务、和用户沟通、打开网站界面获得良好的视觉冲击……以网站为营销工具的企业，让网站的颜值符合“用户体验”，在整体架构上让用户觉得很舒心，原因主动继续浏览更多的内容，而在优化过程中，要让用户一下找到自己需要的内容和图片，需要达到色彩、架构、图片、标题完美的统一。也许这样说有一些过于抽象，评价一个网站颜值符合用户体验的标准就是访问网站的用户在页面的停留时间，停留时间越长则证明网站颜值符合用户体验。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;做一款定制版的网站，精美又实用，高颜值的网站是留住用户的第一步，定制版的网站不像模版网站一样呆板又功能不全，定制版能够利用企业专属的风格吸引住用户，能有更多的机会向用户展现网站的优势，增强网站魅力，提升营销效果与同行竞争力。\n</p>'},
        { id: 9, title: '作为SEO的基础，网站结构优化极为重要', releaseTime: '2018-01-06', desc: '<div style="text-align:center;"><img src="/static/images/news/1.jpg" width="500" height="388" alt=""/></div><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEO是指通过对网站进行站内优化和修复(网站Web结构调整、网站内容建设、网站代码优化和编码等)和站外优化，从而提高网站的网站关键词排名以及公司产品的曝光度。<br>\n' +
        '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEO包括很多方面，如关键词分析、网站结构优化、网站内容分析等。其中网站结构优化是SEO的基础，能正确表达网站的主要内容及其内容之间的层次关系。站在用户的角度考虑，能让用户获取信息更加清晰。争锋网络和大家一起来看看网站结构优化对SEO都有哪些影响?<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，我们从用户体验角度来说。网站要面向的重要对象始终是用户，合理清晰的网站结构能带来较好的用户体验，让用户浏览方便，更有助于留住客户。而且对于用户体验好的网站，也是搜索引擎喜欢的网站，用户在网站上的行为方式，有可能会被计入排名算法中。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其次，还要看增加网站的收录。简单清晰的网站结构会增加搜索引擎对网站的友好度，让搜索引擎抓取更多网站页面，从而增加网站的收录。如果网站的结构混乱，不仅让搜索引擎不喜欢，当搜索引擎在抓取的时候，很容易迷失方向，出现死循环。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第三，网站的内外链接同样重要。静态页面相对于动态页面来说，收录的比较好点。优化好网站结构也就是想让网站被搜索引擎收录的多，增加流量，最终达到高排名，高转化率的目的。网站权重的优化就是从各方面的细致角度看，用结构连接起外部和内部之间的关系，再利用网络结构优化指引搜索引擎。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网站结构优化是用结构连接起网站的主要内容，做成一个用户喜爱，搜索引擎喜爱的页面，让SEO能以很合理的方式进行，只有这样才能增加网站流量，最终带来盈利。</p>'},
        { id: 8, title: '四大网站建设中要注意的问题', releaseTime: '2017-12-03', desc: '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个网站的成功与否与建站前的网站规划有着极为重要的关系。在建立网站时应明确建设网站的目的，确定网站的功能，确定网站规模、投入费用，进行必要的市场分析等。只有详细的规划，才能避免在网站建设中出现的很多问题，使网站建设能顺利进行。今天杭州建站公司争锋网络就来给大家提个醒，聊聊在网站建设中要注意的几个问题。<br>\n' +
        '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>首先，重要讯息要放到醒目的位置，整个网站空间排序适当</strong><br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一个网站最重要的就是标题，标题就像路牌一样，用户在这个网站上逛来逛去，全靠它指路了。给人的第一印象是否能够马上注意到标题，标题要意义清晰、描述性强，把最吸引人的地方放在突出显眼的位置，然后再慢慢展开。或者说，把网站内的独特内容包裹成一个悬念，吸引人家注意。读者看一篇文章，前三段注意力最集中，如果这"寸土寸金"的前三段用不好，人家就要和您拜拜喽！<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;留出可调整的位置，用于满足临时性或短期营销活动的宣传需要。如，福州电信局12月11日举办的"福建省首届信息网络展示会"展览，需要在网页中放在最突出的位置。这就需要调整原有的结构，既让新的内容有突出的体现，还要不至于淹没其他重点。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在每屏中的文字与图形的布局既要考虑到重点的突出，还要给人以和谐的感觉。不能让图形淹没文字，也不能图形太少而让人觉得单调。视觉的吸引和诱惑力是不能低估的。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>第二，网站导航要清晰，容易查找</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所有的超链接应清晰无误地向读者标识出来，所有导航性质的设置，像图像按钮，都要有清晰的标识，让人看得明白，千万别光顾视觉效果的热闹的，而让人家不知东西南北。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;链接文本的颜色最好用约定俗成的：未访问的，蓝色；点击过的，紫色或栗色。如果你一定要别出心裁，链接的文本就要想着以什么方式加以突出，比如说加粗体，加字号，两侧加竖标，或者几者兼用。总之，文本链接一定要和页面的其他文字有所区分，给读者清楚的导向。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;清晰导航还要求：读者进入目的页的点击次数，不能超过三次。如果三次以上还找不到，人家可就没有耐心陪你玩了！<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>第三，网页内容上，注意色彩搭配，控制每个区域所展现信息量</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这就意味着，你必须花点心思来规划文字与背景颜色的搭配方案。注意不要使背景的颜色冲淡了文字的视觉效果，别用花里胡哨的色彩组合，让人看起你的网页来很费劲。一般来说，浅色背景下的深色文字为佳。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个原则也意味着，你最好别把文字的规格设得太小、也不能太大。文字太小，人家读起来难受；文字太大，或者文字视觉效果变化频繁，像是冲着人大喊大叫，看起来不舒服。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，最好让文本左对齐，而不是居中。按当代中文的阅读习惯，文本大都居左的。当然，标题一般应该居中，因为这符合读者的阅读习惯。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在内容上着笔尽量要细致，让人家能在最短的时间内，了解你想呈现给人家什么。给人家一幅清晰的画卷，别云山雾罩的。开门见山，直接了当。大家都知道，网友的耐心尤其少。你能提供的信息或许对他们有裨益，但如果要人家没完没了地翻下去才能找到，恐怕极少有人有这份耐心。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;立体规划内容，将所有部分按一定的构架各就其位、分别纳入不同层次的页面。注意先要把最重要的内容放到首页上，其他的依次就绪。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;然后，你就可以勾划页面蓝图、编HTML了。就文本内容的表现而言，记住尽量别让其一行文字的宽度，横跨整个屏幕。段落一多，这样子看起来很费劲，而且别人的浏览器还可能和你的差别很大。最好别超过屏幕宽度的一半。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>最后，网页页面越小越好，保证页面的访问速度</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有研究显示，如果一个网站页面的主体在７秒之内显现不出来，不管你的网站设计的多么的炫、内容多么丰富，访客会很快失去对该站的兴趣。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要限定页面的大小，就得从各个角度考虑节省。最大的一头是图像，有的好东西，只得割爱了。想想看，在创意表达、品牌形象、挣钱几个目标之中，哪个最重要？</p>'},
        { id: 7, title: '论如何利用网站“关于我们”有效提升企业形象', releaseTime: '2017-11-15', desc: '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;整个网站中最会影响到企业形象的就是导航栏的关于我们一栏了，试想，用户在想要了解更多企业信息的时候，首先想到的肯定就是去点击导航栏的关于我们或者是联系我们页，那么，这一页的设计就至关重要了。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网站建设对于这个页面的设计首先要想突出企业的个性化特点，展现独有的风格吸引住用户，并让他们快速记住你，页面可以从配色、图片、排版、动效等方面进行着手，实现别样的页面风格建设。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>一、网站风格配色</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不同的配色方案是风格体现最直接的一种方式，能够彰显企业性格，配色可以是大胆的亮色系，也可以是低调的冷暖系，还可以是悬殊较大的亮色与暗色相互结合等。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如下页面以经典黑白色搭配亮色系的黄色，让页面的介绍看起来非常锐利，突出点更加明显，用户浏览起来更加醒目，尤其利用黄色标记重点内容，能够引起用户的注意，整个网站页面富有质感。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，还有些活泼风格的配色方案，利用色彩营造出企业活泼的分为，渲染的是积极向上的企业形象，加上内容的解说，清晰地向用户传达了企业网站的主题。<br>\n' +
        '<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>二、个性化图片</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“关于我们”页面通常是用来介绍企业情况的板块，公司的规模，业务，架构等等都是给用户传达的重点信息，因此，可以采用个性化的团队头像来对企业的团队情况进行介绍，这样能让用户感觉更加真实亲切，譬如一个网站建设的公司，用户固然想清楚地了解到企业的设计师能力，建站水平等情况，那么通过对一些重点认为的介绍，则可满足用户需求。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>三、排版设计</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;排版设计也是对页面产生重要影响的因素之一，有些“关于我们”页面的排版过于混乱，用户在浏览时找不到重点信息，则会产生焦躁不安的情绪感，对于网站的用户体验造成不良影响，同时会降低用户对企业的信任感。反之，如果排版有序，细节上严格要求，那么则会带给用户愉悦感。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如下以对称效果为主要的排版风格，带给用户的第一印象则是整齐简洁。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>四、善于利用网站动效页面</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页面结合多媒体形式，尤其是网站建设中“关于我们”这个页面对企业的展示，通过动画的页面形式体现生动的效果，或者视频、影音等等，引导用户不由自主地走进你的企业，让人感觉更加真实。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网站建设做好“关于我们”页面就像是给企业的一身装束，能够让用户从力道外更多地了解到企业的情况，在一定程度上对企业有推销作用，同时能够更加直接地搭建起与用户之间沟通的桥梁，因此，当前这个页面亦受到越来越多企业的重视。</p>'},
        { id: 6, title: '做网站，首先要明白一个响应式的网站设计的优势', releaseTime: '2017-10-02', desc: '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 响应式网站设计是一种网络页面设计布局，其理念是：集中创建页面的图片排版大小，可以智能地根据用户行为以及使用的设备环境进行相对应的布局，即能够同时适应手机、平板以及PC端。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 大家都知道，如果你的网站没有响应式网页设计，那么很可能你就错过了很多潜在访客和顾客，而响应式网页设计可以帮助你获得更多的访问者。如果这种设计不能得以实现，那么它可能会妨碍你的业务，我们来了解一下一个响应式的网页设计会有什么好处。<br><br>\n' +
        '\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>１、能自适应移动端平台</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 据统计，中国六亿网络使用者中，利用移动端使用网络的用户已经超过百分之八十，超过了只使用PC端的用户。所以许多你当前的和潜在的用客很可能通过一个类型的移动设备或其他访问您的网站。响应式网页设计可以自动适应并且符合不同的屏幕尺寸。如果你的网页设计反应迟钝，它把文字缩小得太小、把图像扭曲，或者根本不适合屏幕的尺寸，这意味着它不会吸引太多的移动端访客。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>２、重点提升用户体验度</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 用户体验度可以说是影响一个网站流量的关键性因素了。响应式设计意味着没有重定向，没有重复的内容，没有尴尬的网站或网页引渡。在每一个页面上甚至可以节省了将近一半的时间。响应式设计可以将网站转化为一个在所有设备上具有一致的外观和感觉的作品，提供更好的用户体验，从而吸引更多的游客，并可能导致更高的转换率！<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>３、优化整合营销</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 每个企业都希望能够在他们的目标市场得到尽可能多的消费者。有了响应式设计，您可以将广告活动无缝整合到所有的媒介——从PC端到手机，从而达到更多的消费者，并吸引更多的来访者。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>４、需要新鲜高质量的设计</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 不及时更新你的旧网页设计是一种失去访客和错过新机会的一种方式。在您的网站采用先进的技术提高您的访客体验，让你的网站看起来棒极了，这是在帮助你获得更多的客户的一个重要步骤。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 相比润色业务和品牌的视觉表现，你的网页设计需要更多东西；它需要用任何媒介的潜在游客可以找到您的网站上，包括他们的笔记本电脑，手机，平板电脑和其他设备。如果你还没有实现的响应网页设计，那么现在就是实现的时候。它会帮助你获得更多的访问者，并帮助您维持业务增长。</p> '},
        { id: 5, title: '做好友情链接能对网站优化带来的影响', releaseTime: '2017-09-08', desc: '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;友情链接，是网站推广的一种重要手段，其操作形式是两个网站各自在自己的网站上放置对方网站的LOGO链接或锚文本链接，这样可以达到互相推广的目的。那么交换友情链接主要可以为网站优化带来哪些影响呢?<br>\n' +
        '<br>\n' +
        ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>一、网站的权重</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提升网站权重是交换友情链接最根本的目的，而且越是与权重高的网站交换友情链接，权重的传递作用越是明显。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>二、关键词的排名</strong><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般我们在做友情链接的时候，都会给对方提供一个锚文本，这个锚文本通常会是我们网站的一个关键词。友情链接是最好的外部链接之一，这个和我们去论坛，博客做签名的作用是一样的，目的就是为了提高这个关键词的排名。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>三、用户的体验度</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与同行业的网站交换友情链接，的确可以为网站访客带来良好的用户体验。自己网站没有的内容，引导用户从其它网站上获取，可以有效提升网站用户体验，这也就是为什么说与同行业的网站交换友情链接可以提升权重的原因之一。但是，这也可能会间接提升网站的跳出率。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>四、网站的流量</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们和相关性的网站交换友情链接，这样是会有流量进来的，只是通过这个途径来的流量会很少，但是这个也算是额外来的流量。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>五、网站的知名度</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提升网站知名度是个别案例，如果能让搜狐、网易、新浪、凤凰网等等这样的大型网站放上你网站的友情链接，对你网站知名度的提升是有很大的帮助的。</p>'},
        { id: 4, title: '“闪电算法”——一种新的百度算法', releaseTime: '2017-08-26', desc: '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017年10月初，“闪电算法”上线，移动搜索页面首屏加载时间将影响搜索排名。移动网页首屏在2秒之内完成打开的，在移动搜索下将获得提升页面评价优待，获得流量倾斜；同时，在移动搜索页面首屏加载非常慢（3秒及以上）的网页将会被打压。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;广大站长优化页面首屏加载时间，优化的技术建议包括但不限于: <br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>资源加载：</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、将同类型资源在服务器端压缩合并，减少网络请求次数和资源体积。 <br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、引用通用资源，充分利用浏览器缓存。 <br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、使用CDN加速，将用户的请求定向到最合适的缓存服务器上。 <br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、非首屏图片懒加载，将网络带宽留给首屏请求。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>页面渲染：</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、将CSS样式写在头部样式表中，减少由CSS文件网络请求造成的渲染阻塞。<br> \n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、将JavaScript放到文档末尾，或使用async方式加载，避免JS执行阻塞渲染。<br> \n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、对非文字元素（如图片，视频）指定宽高，避免浏览器重排重绘。<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;希望广大站长持续关注页面加载速度体验。视网站自身情况，参照建议自行优化页面，或使用通用的加速解决方案（如MIP），不断优化页面首屏加载时间。<br><br>\n' +
        '\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>“闪电算法”解读：</strong> <br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>公告内容</strong><br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017年10月初，“闪电算法”上线，移动搜索页面首屏加载时间将影响搜索排名。移动网页首屏在2秒之内完成打开的，在移动搜索下将获得提升页面评价优待，获得流量倾斜；同时，在移动搜索页面首屏加载非常慢（3秒及以上）的网页将会被打压。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>要点解读</strong><br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、闪电算法的意义 <br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;百度用户体验部研究表明，用户期望且能够接受的页面加载时间在3秒以内。若页面的加载时间过慢，用户就会失去耐心而选择离开，这对用户和站长来说都是一大损失。“闪电算法”不仅体现了百度移动搜索对于页面加载速度更加重视的决心，也体现了百度移动搜索希望站长能够站在和用户共赢的角度对网站进行优化的期待。<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、2秒之内完成打开 <br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;闪电算法首次明确，移动网页首屏在2秒之内完成打开的，在移动搜索下将获得提升页面评价优待，得到更多展现机会；同时，在移动搜索页面首屏加载非常慢（3秒及以上）的网页将会被打压。首屏加载完毕在2~3秒之内的页面，页面评价不升不降。<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、技术建议 <br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）“闪电算法”主要针对的是首屏的加载时间，因此建议将网络带宽留给首屏请求，以满足在不同网络情况下的加载速度和用户体验。 <br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2）“闪电算法”是百度移动友好标准的重要组成部分，页面浏览体验、资源或功能的易用性、页面是否符合移动端适配等，都影响移动用户体验的满意度。因此也在此提醒站长，建设网站的时候站在与用户共赢的角度，优化移动端的用户体验。<br> \n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3）使用通用加速方案（如MIP、AMP）对网页进行综合加速。比如，使用MIP可以将网页的加载速度提高30% ~ 80%，对部分试验站点的加速可以提高至85%，实现网页的瞬时到达。 <br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据百度的全网速度数据，一般非MIP页的首页加载时间约在3200毫秒左右，而使用MIP技术的网页，首页加载时间约为1640毫秒。 除此之外，MIP页面在搜索结果页以蓝色闪电图标进行标记，在用户体验上也与一般移动页有所区分。 <br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其实不仅是百度，各大搜索引擎对于移动网页的打开速度都越来越重视，并且将加载速度作为衡量网页移动友好度的重要标准。因此，再次建议站长重视移动端体验，打造用户与站点共赢的网络生态。 </p>'},
        { id: 3, title: '论网站建设中不同类型的网站以及如何做好一个网站', releaseTime: '2017-08-03', desc: '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们进行网站建设的目的都是为了充分展示企业形象以及业务和产品的推广，并从网络渠道上获得客户资源，促进客户转化率，达到营销效果。但是，很多企业在建站时都会迷茫，并不清楚达到目的的网站究竟要放哪些内容，事实上，根据用户行为习惯以及用户体验，网站放置的内容都有一定的标准，才不会背道而驰，而一般企业网站分为功能型和展示型网站。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>功能性网站：</strong>也要分不同的行业，最常见的是电商类的，用过在线电子商务网站的肯定都清楚，网站肯定包含用户系统，支付，订单，商品，购物车，后台管理等模块，同样交互也比较复杂。这种类型的网站，比较适合有直接客户面向消费者的一些的公司，可以快速的通过网站与客户建立联系与反馈。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>展示型网站：</strong>企业在网站建设的时候用的比较多的一种，网站建设有不同的价位，有些公司报的都很低，甚至几百块钱，这种都是模板网站，他们找一些模板，随便改改图片，换换logo，然后就交付给客户，小编遇到过太多这种客户因为使用模板网站而后期因为各种各种数据库或者是漏洞的问题以至于网站无法打开，同样企业也付出很多代价，一旦数据找不回，需要重新建设官网，浪费时间与经历。还有一种是定制型网站，需要乙方设计师与项目经理参与到甲方的需求对接中，用专业能力去设计网站的风格，同样，遇到一个工作几年经验丰富的老手来帮企业设计官网与刚毕业的实习生来设计，结果肯定是大相径庭，一般公司会根据设计师的等级来定价，还是那句一分钱一分货，只要满足自己的需求就好。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那么一个好的网站有哪些原则呢?<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先我们来讲一下设计，设计是什么，设是目标，计是方法是策略，我们设计的目标是什么，目的又是什么，解决方法解决方案又是什么样，一直贯穿到整体过程中，有时候产品经理说，按钮大一些，他想要真的是按钮变大吗?设计可能会觉得大的东西比较丑，产品经理是希望提高点击率，这时候我们不一定要去把按钮变大，或者在按钮旁边加上一些利益性的文案或者是标签也能达到同样的效果。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网站功能的易用，页面信息结构是否清楚以及设计模式是否合理，关系到一个网站的成败!<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;想成为一个优秀的网站，首先到做到以下几点：<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、品牌形象很重要，要将公司的印象快速的保留在用户脑海中。<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、关键词，在介绍信息时，要明确一个关键点，因为用户很难记住多个重点，所以要保留最关键的信息。<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、导航明确，一个好的网站，要让用户知道自己想看的东西在哪里，一目了然，不浪费用户在网站停留的每一秒时间。<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、展现的内容都要与网站主题相关，包括文案的选择，banner图的选择等等都要与品牌业务相关，塑造自身专业形象。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总之，不管是哪种类型的企业网站，有些内容并不可随意省略，否则这些无意举动可能挑战的就是用户体验感的好坏。要想网站做得更好，不妨花些心思在这些内容模块上，让其更加丰富有价值。'},
        { id: 2, title: '干货——略谈网站被黑客攻击的种类及其应对方法', releaseTime: '2017-07-15', desc: '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;做网站最头疼的就是遇到黑客的攻击，辛辛苦苦建的站，做了很久推广才提高的网站流量，结果说被攻击就被攻击。所以，站长们必须要知道几点关于如何应对网站被攻击，以及日常护养的方法。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>一、网页被篡改</strong><br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;攻击描述：针对网站程序漏洞，植入木马(webshell、跨站脚本攻击)，篡改网页，添加黑链或者嵌入非本站信息，甚至是创建大量目录网页。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;危害说明：网站信息被篡改，本站访客不信任，搜索引擎(百度为例)和安全平台(安全联盟为例)检测到你的网站被挂马，会在搜索结果提示安全风险，搜索引擎和浏览器都会拦截访问。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处理方法：首先进行程序设置，更换程序、更新补丁、修补漏洞、设置权限、经常备份；其次漏洞查杀，360网站检测、360主机卫士；然后申诉平台，安全联盟。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>二、数据库被攻击</strong><br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;攻击描述：SQL注入：通过把SQL命令插入到Web表单提交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;危害说明：数据库入侵，用户信息泄露，数据表被篡改，植入后门，数据库被篡改比网页文件被篡改危害大得多，因为网页都是通过数据库生成的。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处理方式：<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、在各种信息提交框处加验证<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、数据库防火墙<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、参见第二种处理方式<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>三、被恶意扫描</strong><br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;攻击描述：黑客为了攻击网站通过工具自动扫描漏洞。<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;危害说明：发现漏洞，进而攻击。<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;处理方式：首先，关闭闲置端口，修改默认端口；其次，参见第二种处理方式。</p>'},
        { id: 1, title: '做谷歌排名要知道的影响因素之——网站域名', releaseTime: '2017-07-01', desc: '<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大家都知道谷歌排名的影响因素非常多，每一个细节都可能导致网站排名有一个很大的浮动，所以为了保持或者提升网站的排名，我们必须了解并把握好其中的每一个因素。<br>\n' +
        '<br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;影响谷歌排名的域名因素主要包括以下10项内容：<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>第一，域名年龄</strong>，虽然，Matt Cutts曾在视频中提到“一个域名的年龄是一岁还是半岁之间的区别真的不是那么大!”但我们从这句话中也可以看出，谷歌的确是将域名年龄作为影响排名的因素的。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>第二，顶级域名中出现关键词因素</strong>，这个在做英文seo的时候非常重要。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>第三，以关键词开头的域名</strong>，什么意思?很简单，就是说你的关键词包在域名开头比在域名中间或结尾要好，当然比域名不包含关键词更要好上很多倍。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>第四，域名登记时长</strong>，这个也很好理解，谷歌认为一个提前支付数年使用期限的域名更加稳定，这是他们从数据分析中得出的结论，因为那些门域和用黑帽手法做的网站通常域名都不会长久，而权重高的网站域名使用权限通常都非常之长。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>第五，关键字出现在子域名中</strong>有利于提升网站的排名，这也是为什么二级博客站出现的原因。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>第六，域名历史</strong>，这是一个重要因素，如果一个域名反复更换所有者，会导致一个严重的问题，那就是谷歌会将所有指向该域名的链接判定为无效。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>第七，完全匹配域名</strong>，这个因素是双刃剑，对于高质量网站来说，这是优势，对于低质网站来说，这却并不意味是一件好事。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>第八，公开与隐藏whois</strong>，这条因素本身是不会影响谷歌排名的，但如果你网站的其他方面引起了谷歌的怀疑，谷歌会结合你是否隐藏了whois对你的网站进行处罚判定，如果网站其他方面存在说不清的问题，而你又恰好隐藏了whois谷歌会认为你的网站作弊。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>第九，受过惩罚的whois所有者</strong>，这个很悲催，如果你是做黑帽的，而且还被谷歌标记了，那它会审查你名下的所有网站。<br><br>\n' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>第十，国家顶级域名</strong>，这也是一把双刃剑，对于在特定地区，这样的网站会获得更好的排名，但是在全球的排名将会被限制。</p>'},
      ]
    }
  },
  created() {
    let self = this
    let id = self.$route.params.tradeNewsId
    for(let index in self.list) {
      let data = self.list[index]
      if(id == data.id){
        self.detailTitle = data.title
        self.detailDate = data.releaseTime
        self.detailDesc = data.desc
      }
    }
  }
}
</script>
