# 「如果没有你」可视化项目
#### 初衷
是根据用户的微博数据，分析某段关系／某个特定的时间会对微博中的情绪表达产生什么样的影响

旨在强调人与人之间的情感关系的宝贵。

#### 进展
可以实现的是，将含有全部信息的json文件导入，添加筛选条件，筛选出有用的字段和有效数据，并实时调用API获得其情感值，将其结果进行可视化。

其中实现「微博内容到情感值」的转换利用了腾讯文智的收费服务并使用了[DIYgod的Text2Emotion](https://github.com/DIYgod/Text2Emotion)项目中的API

[这个版本](https://github.com/AliceLeon/moody-data/tree/ee8d77466d91139530b2a2c53b71626996600ea3)是实时调用api的

实时调用会极大地延长等待时间。处于展示的目的，我将数据筛选并处理好，形成了一个可供展示的版本。

您可以[在此访问](https://aliceleon.github.io/moody-data/index.html)

![Moody.001](./Moody.001.png)

#### 如何读懂这张图？

- 将这个表想像成一个24小时的表盘，圆点所在的位置表明一天内的发博时间

- 圆点所在位置离中心的距离表明发微博的日期。
这张图里第一条微博（离中心最近的微博）发博时间是2011年，最后一条是2017年。其他微博
根据时间的从远到近，在图中离远点从近到远。

- 情绪值的范围是从0-1，其中越接近1，情绪越积极，越接近0 ，情绪越消极。

- 黄色的点代情绪值大于0.5的微博，越接近1黄点的半径越大，不透明度越高。

- 蓝色的点代情绪值小于0.5的微博，越接近0蓝点的半径越大，不透明度越高。

- 灰色的点代情绪值等于0.5的微博。

- 鼠标划过每个点的时候会在中心显示这条微博的内容。（字体原因导致微博显示不全；会重叠显示）

- 鼠标划过左边三个巨大的点的时候会显示相应颜色分类下的所有微博

#### 改进

1. 以上信息应该更加直观而不是靠文字说明来展示

2. 代码丑陋(-_-#)

3. P5.js帧动画的形式不太适合此类交互……可能会考虑换一个库或者换一种表现形式。

4. 另外筛选和对比的部分需要优化

5. 实现的功能不够多