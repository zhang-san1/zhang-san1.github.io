import{_ as n,W as s,X as a,Y as e}from"./framework-6447176f.js";const p="/assets/4-33c3f93f.png",t="/assets/5-1a9ab898.png",o="/assets/8-7cf89aec.png",c="/assets/10-44c7236f.png",l="/assets/9-d784f61f.png",i="/assets/11-29045171.png",r={},u=e('<h1 id="drools快速入门" tabindex="-1"><a class="header-anchor" href="#drools快速入门" aria-hidden="true">#</a> Drools快速入门</h1><h2 id="什么是规则引擎" tabindex="-1"><a class="header-anchor" href="#什么是规则引擎" aria-hidden="true">#</a> 什么是规则引擎</h2><p>规则引擎，全称为业务规则管理系统，英文名为BRMS(即Business Rule Management System)。规则引擎的主要思想是将应用程序中的业务决策部分分离出来，并使用预定义的语义模块编写业务决策（业务规则），由用户或开发者在需要时进行配置、管理。</p><p>需要注意的是规则引擎并不是一个具体的技术框架，而是指的一类系统，即业务规则管理系统。目前市面上具体的规则引擎产品有：drools、VisualRules、iLog等。</p><p>规则引擎实现了将业务决策从应用程序代码中分离出来，接收数据输入，解释业务规则，并根据业务规则做出业务决策。规则引擎其实就是一个输入输出平台。</p><p>上面的申请信用卡业务场景使用规则引擎后效果如下：</p><p><img src="'+p+`" alt=""></p><p>系统中引入规则引擎后，业务规则不再以程序代码的形式驻留在系统中，取而代之的是处理规则的规则引擎，业务规则存储在规则库中，完全独立于程序。业务人员可以像管理数据一样对业务规则进行管理，比如查询、添加、更新、统计、提交业务规则等。业务规则被加载到规则引擎中供应用系统调用。</p><h2 id="使用规则引擎的优势" tabindex="-1"><a class="header-anchor" href="#使用规则引擎的优势" aria-hidden="true">#</a> 使用规则引擎的优势</h2><p>使用规则引擎的优势如下：</p><ul><li><p>1、业务规则与系统代码分离，实现业务规则的集中管理</p></li><li><p>2、在不重启服务的情况下可随时对业务规则进行扩展和维护</p></li><li><p>3、可以动态修改业务规则，从而快速响应需求变更</p></li><li><p>4、规则引擎是相对独立的，只关心业务规则，使得业务分析人员也可以参与编辑、维护系统的业务规则</p></li><li><p>5、减少了硬编码业务规则的成本和风险</p></li><li><p>6、使用规则引擎提供的规则编辑工具，使复杂的业务规则实现变得的简单</p></li></ul><h2 id="规则引擎应用场景" tabindex="-1"><a class="header-anchor" href="#规则引擎应用场景" aria-hidden="true">#</a> 规则引擎应用场景</h2><p>对于一些存在比较复杂的业务规则并且业务规则会频繁变动的系统比较适合使用规则引擎，如下：</p><ul><li><p>1、风险控制系统----风险贷款、风险评估</p></li><li><p>2、反欺诈项目----银行贷款、征信验证</p></li><li><p>3、决策平台系统----财务计算</p></li><li><p>4、促销平台系统----满减、打折、加价购</p></li></ul><h2 id="drools介绍" tabindex="-1"><a class="header-anchor" href="#drools介绍" aria-hidden="true">#</a> Drools介绍</h2><p>drools是一款由JBoss组织提供的基于Java语言开发的开源规则引擎，可以将复杂且多变的业务规则从硬编码中解放出来，以规则脚本的形式存放在文件或特定的存储介质中(例如存放在数据库中)，使得业务规则的变更不需要修改项目代码、重启服务器就可以在线上环境立即生效。</p><p>drools官网地址：https://drools.org/</p><p>drools源码下载地址：https://github.com/kiegroup/drools</p><p>在项目中使用drools时，即可以单独使用也可以整合spring使用。如果单独使用只需要导入如下maven坐标即可：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>drools<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>drools<span class="token operator">-</span>compiler<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">7.6</span><span class="token number">.0</span><span class="token punctuation">.</span>Final<span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们使用IDEA开发drools应用，IDEA中已经集成了drools插件。如果使用eclipse开发drools应用还需要单独安装drools插件。</p><p>drools API开发步骤如下： <img src="`+t+`" alt=""></p><h1 id="drools入门案例" tabindex="-1"><a class="header-anchor" href="#drools入门案例" aria-hidden="true">#</a> Drools入门案例</h1><p>本小节通过一个Drools入门案例来让大家初步了解Drools的使用方式、对Drools有一个整体概念。</p><h2 id="业务场景说明" tabindex="-1"><a class="header-anchor" href="#业务场景说明" aria-hidden="true">#</a> 业务场景说明</h2><p>业务场景：消费者在图书商城购买图书，下单后需要在支付页面显示订单优惠后的价格。具体优惠规则如下：</p><p>规则编号 规则名称 描述 1 规则一 所购图书总价在100元以下的没有优惠 2 规则二 所购图书总价在100到200元的优惠20元 3 规则三 所购图书总价在200到300元的优惠50元 4 规则四 所购图书总价在300元以上的优惠100元 现在需要根据上面的规则计算优惠后的价格。</p><h2 id="开发实现" tabindex="-1"><a class="header-anchor" href="#开发实现" aria-hidden="true">#</a> 开发实现</h2><p>第一步：创建maven工程drools_quickstart并导入drools相关maven坐标</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>org<span class="token punctuation">.</span>drools<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>drools<span class="token operator">-</span>compiler<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">7.18</span><span class="token number">.0</span><span class="token punctuation">.</span>Final<span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
<span class="token generics"><span class="token punctuation">&lt;</span>dependency<span class="token punctuation">&gt;</span></span>
    <span class="token generics"><span class="token punctuation">&lt;</span>groupId<span class="token punctuation">&gt;</span></span>junit<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>artifactId<span class="token punctuation">&gt;</span></span>junit<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">&gt;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span>version<span class="token punctuation">&gt;</span></span><span class="token number">4.13</span><span class="token number">.1</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：根据drools要求创建resources/META-INF/kmodule.xml配置文件</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">?</span>xml version<span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span> encoding<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span> <span class="token operator">?</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>kmodule xmlns<span class="token operator">=</span><span class="token string">&quot;http://www.drools.org/xsd/kmodule&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>
        name<span class="token operator">:</span>指定kbase的名称，可以任意，但是需要唯一
        packages<span class="token operator">:</span>指定规则文件的目录，需要根据实际情况填写，否则无法加载到规则文件
        <span class="token keyword">default</span><span class="token operator">:</span>指定当前kbase是否为默认
    <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>kbase name<span class="token operator">=</span><span class="token string">&quot;myKbase1&quot;</span> packages<span class="token operator">=</span><span class="token string">&quot;rules&quot;</span> <span class="token keyword">default</span><span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>
            name<span class="token operator">:</span>指定ksession名称，可以任意，但是需要唯一
            <span class="token keyword">default</span><span class="token operator">:</span>指定当前session是否为默认
        <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>ksession name<span class="token operator">=</span><span class="token string">&quot;ksession-rule&quot;</span> <span class="token keyword">default</span><span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>kbase<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>kmodule<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：上面配置文件的名称和位置都是固定写法，不能更改</p><p>第三步：创建实体类Order</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>drools<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>
​
<span class="token doc-comment comment">/**
 * 订单
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Order</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> originalPrice<span class="token punctuation">;</span><span class="token comment">//订单原始价格，即优惠前价格</span>
    <span class="token keyword">private</span> <span class="token class-name">Double</span> realPrice<span class="token punctuation">;</span><span class="token comment">//订单真实价格，即优惠后价格</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Order{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;originalPrice=&quot;</span> <span class="token operator">+</span> originalPrice <span class="token operator">+</span>
                <span class="token string">&quot;, realPrice=&quot;</span> <span class="token operator">+</span> realPrice <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Double</span> <span class="token function">getOriginalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> originalPrice<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setOriginalPrice</span><span class="token punctuation">(</span><span class="token class-name">Double</span> originalPrice<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>originalPrice <span class="token operator">=</span> originalPrice<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Double</span> <span class="token function">getRealPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> realPrice<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRealPrice</span><span class="token punctuation">(</span><span class="token class-name">Double</span> realPrice<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>realPrice <span class="token operator">=</span> realPrice<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第四步：创建规则文件resources/rules/bookDiscount.drl</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//图书优惠规则</span>
<span class="token keyword">package</span> <span class="token namespace">rules</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>drools<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Order</span>
<span class="token comment">//规则一：所购图书总价在100元以下的没有优惠</span>
rule <span class="token string">&quot;book_discount_1&quot;</span>
    when
        $order<span class="token operator">:</span><span class="token class-name">Order</span><span class="token punctuation">(</span>originalPrice <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span>
    then
        $order<span class="token punctuation">.</span><span class="token function">setRealPrice</span><span class="token punctuation">(</span>$order<span class="token punctuation">.</span><span class="token function">getOriginalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;成功匹配到规则一：所购图书总价在100元以下的没有优惠&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
​
<span class="token comment">//规则二：所购图书总价在100到200元的优惠20元</span>
rule <span class="token string">&quot;book_discount_2&quot;</span>
    when
        $order<span class="token operator">:</span><span class="token class-name">Order</span><span class="token punctuation">(</span>originalPrice <span class="token operator">&lt;</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> originalPrice <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span>
    then
        $order<span class="token punctuation">.</span><span class="token function">setRealPrice</span><span class="token punctuation">(</span>$order<span class="token punctuation">.</span><span class="token function">getOriginalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;成功匹配到规则二：所购图书总价在100到200元的优惠20元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
<span class="token comment">//规则三：所购图书总价在200到300元的优惠50元</span>
rule <span class="token string">&quot;book_discount_3&quot;</span>
    when
        $order<span class="token operator">:</span><span class="token class-name">Order</span><span class="token punctuation">(</span>originalPrice <span class="token operator">&lt;=</span> <span class="token number">300</span> <span class="token operator">&amp;&amp;</span> originalPrice <span class="token operator">&gt;=</span> <span class="token number">200</span><span class="token punctuation">)</span>
    then
        $order<span class="token punctuation">.</span><span class="token function">setRealPrice</span><span class="token punctuation">(</span>$order<span class="token punctuation">.</span><span class="token function">getOriginalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;成功匹配到规则三：所购图书总价在200到300元的优惠50元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
<span class="token comment">//规则四：所购图书总价在300元以上的优惠100元</span>
rule <span class="token string">&quot;book_discount_4&quot;</span>
    when
        $order<span class="token operator">:</span><span class="token class-name">Order</span><span class="token punctuation">(</span>originalPrice <span class="token operator">&gt;=</span> <span class="token number">300</span><span class="token punctuation">)</span>
    then
        $order<span class="token punctuation">.</span><span class="token function">setRealPrice</span><span class="token punctuation">(</span>$order<span class="token punctuation">.</span><span class="token function">getOriginalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;成功匹配到规则四：所购图书总价在300元以上的优惠100元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第五步：编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//会话对象，用于和规则引擎交互</span>
    <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
​
    <span class="token comment">//构造订单对象，设置原始价格，由规则引擎根据优惠规则计算优惠后的价格</span>
    <span class="token class-name">Order</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    order<span class="token punctuation">.</span><span class="token function">setOriginalPrice</span><span class="token punctuation">(</span><span class="token number">210D</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
​
    <span class="token comment">//将数据提供给规则引擎，规则引擎会根据提供的数据进行规则匹配</span>
    kieSession<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span>
​
    <span class="token comment">//激活规则引擎，如果规则匹配成功则执行规则</span>
    kieSession<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//关闭会话</span>
    kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
​
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;优惠前原始价格：&quot;</span> <span class="token operator">+</span> order<span class="token punctuation">.</span><span class="token function">getOriginalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
                       <span class="token string">&quot;，优惠后价格：&quot;</span> <span class="token operator">+</span> order<span class="token punctuation">.</span><span class="token function">getRealPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>成功匹配到规则三：所购图书总价在<span class="token number">200</span>到<span class="token number">300</span>元的优惠<span class="token number">50</span>元
优惠前原始价格：<span class="token number">210.0</span>，优惠后价格：<span class="token number">160.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的入门案例我们可以发现，使用drools规则引擎主要工作就是编写规则文件，在规则文件中定义跟业务相关的业务规则，例如本案例定义的就是图书优惠规则。规则定义好后就需要调用drools提供的API将数据提供给规则引擎进行规则模式匹配，规则引擎会执行匹配成功的规则并将计算的结果返回给我们。</p><p>可能大家会有疑问，就是我们虽然没有在代码中编写规则的判断逻辑，但是我们还是在规则文件中编写了业务规则，这跟在代码中编写规则有什么本质的区别呢？</p><p>我们前面其实已经提到，使用规则引擎时业务规则可以做到动态管理。业务人员可以像管理数据一样对业务规则进行管理，比如查询、添加、更新、统计、提交业务规则等。这样就可以做到在不重启服务的情况下调整业务规则。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><h3 id="规则引擎构成" tabindex="-1"><a class="header-anchor" href="#规则引擎构成" aria-hidden="true">#</a> 规则引擎构成</h3><p>drools规则引擎由以下三部分构成：</p><p>Working Memory（工作内存） Rule Base（规则库） Inference Engine（推理引擎） 其中Inference Engine（推理引擎）又包括：</p><p>Pattern Matcher（匹配器） Agenda(议程) Execution Engine（执行引擎） 如下图所示： <img src="`+o+'" alt=""></p><h3 id="相关概念说明" tabindex="-1"><a class="header-anchor" href="#相关概念说明" aria-hidden="true">#</a> 相关概念说明</h3><p>Working Memory：工作内存，drools规则引擎会从Working Memory中获取数据并和规则文件中定义的规则进行模式匹配，所以我们开发的应用程序只需要将我们的数据插入到Working Memory中即可，例如本案例中我们调用kieSession.insert(order)就是将order对象插入到了工作内存中。</p><p>Fact：事实，是指在drools 规则应用当中，将一个普通的JavaBean插入到Working Memory后的对象就是Fact对象，例如本案例中的Order对象就属于Fact对象。Fact对象是我们的应用和规则引擎进行数据交互的桥梁或通道。</p><p>Rule Base：规则库，我们在规则文件中定义的规则都会被加载到规则库中。</p><p>Pattern Matcher：匹配器，将Rule Base中的所有规则与Working Memory中的Fact对象进行模式匹配，匹配成功的规则将被激活并放入Agenda中。</p><p>Agenda：议程，用于存放通过匹配器进行模式匹配后被激活的规则。</p><p>Execution Engine：执行引擎，执行Agenda中被激活的规则。</p><h3 id="规则引擎执行过程" tabindex="-1"><a class="header-anchor" href="#规则引擎执行过程" aria-hidden="true">#</a> 规则引擎执行过程</h3><p><img src="'+c+'" alt=""></p><h3 id="kie介绍" tabindex="-1"><a class="header-anchor" href="#kie介绍" aria-hidden="true">#</a> KIE介绍</h3><p>我们在操作Drools时经常使用的API以及它们之间的关系如下图：</p><p><img src="'+l+'" alt=""></p><p>通过上面的核心API可以发现，大部分类名都是以Kie开头。Kie全称为Knowledge Is Everything，即&quot;知识就是一切&quot;的缩写，是Jboss一系列项目的总称。如下图所示，Kie的主要模块有OptaPlanner、Drools、UberFire、jBPM。</p><p><img src="'+i+'" alt=""></p><p>通过上图可以看到，Drools是整个KIE项目中的一个组件，Drools中还包括一个Drools-WB的模块，它是一个可视化的规则编辑器。</p>',64),d=[u];function k(v,m){return s(),a("div",null,d)}const g=n(r,[["render",k],["__file","drools02.html.vue"]]);export{g as default};