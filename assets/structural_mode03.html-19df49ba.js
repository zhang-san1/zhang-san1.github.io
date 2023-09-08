import{_ as p,W as t,X as e,Z as n,a0 as o,a1 as c,Y as s,C as l,$ as i}from"./framework-6447176f.js";const u="/assets/装饰者模式-使用前-0996a4b4.png",k="/assets/装饰者模式-140bf3ac.png",d="/assets/装饰者模式-jdk源码-8bdef075.png",r={},v=s('<h1 id="装饰者模式" tabindex="-1"><a class="header-anchor" href="#装饰者模式" aria-hidden="true">#</a> 装饰者模式</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>我们先来看一个快餐店的例子。</p><p>快餐店有炒面、炒饭这些快餐，可以额外附加鸡蛋、火腿、培根这些配菜，当然加配菜需要额外加钱，每个配菜的价钱通常不太一样，那么计算总价就会显得比较麻烦。</p><img src="'+u+'" style="zoom:80%;"><p>使用继承的方式存在的问题：</p><ul><li><p>扩展性不好</p><p>如果要再加一种配料（火腿肠），我们就会发现需要给FriedRice和FriedNoodles分别定义一个子类。如果要新增一个快餐品类（炒河粉）的话，就需要定义更多的子类。</p></li><li><p>产生过多的子类</p></li></ul><p><strong>定义：</strong></p><p>​ 指在不改变现有对象结构的情况下，动态地给该对象增加一些职责（即增加其额外功能）的模式。</p><h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构" aria-hidden="true">#</a> 结构</h2><p>装饰（Decorator）模式中的角色：</p><ul><li>抽象构件（Component）角色 ：定义一个抽象接口以规范准备接收附加责任的对象。</li><li>具体构件（Concrete Component）角色 ：实现抽象构件，通过装饰角色为其添加一些职责。</li><li>抽象装饰（Decorator）角色 ： 继承或实现抽象构件，并包含具体构件的实例，可以通过其子类扩展具体构件的功能。</li><li>具体装饰（ConcreteDecorator）角色 ：实现抽象装饰的相关方法，并给具体构件对象添加附加的责任。</li></ul><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2><p>我们使用装饰者模式对快餐店案例进行改进，体会装饰者模式的精髓。</p><p>类图如下：</p><img src="'+k+`" style="zoom:75%;"><p>代码如下：</p><p>FastFood:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//快餐接口</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">FastFood</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> price<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> desc<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">FastFood</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">FastFood</span><span class="token punctuation">(</span><span class="token keyword">float</span> price<span class="token punctuation">,</span> <span class="token class-name">String</span> desc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>desc <span class="token operator">=</span> desc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token keyword">float</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> desc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDesc</span><span class="token punctuation">(</span><span class="token class-name">String</span> desc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>desc <span class="token operator">=</span> desc<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">float</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//获取价格</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FriedRice:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//炒饭</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FriedRice</span> <span class="token keyword">extends</span> <span class="token class-name">FastFood</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">FriedRice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&quot;炒饭&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FriedNoodles:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//炒面</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FriedNoodles</span> <span class="token keyword">extends</span> <span class="token class-name">FastFood</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">FriedNoodles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token string">&quot;炒面&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Garnish:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//配料类</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Garnish</span> <span class="token keyword">extends</span> <span class="token class-name">FastFood</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">FastFood</span> fastFood<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">FastFood</span> <span class="token function">getFastFood</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> fastFood<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setFastFood</span><span class="token punctuation">(</span><span class="token class-name">FastFood</span> fastFood<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>fastFood <span class="token operator">=</span> fastFood<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Garnish</span><span class="token punctuation">(</span><span class="token class-name">FastFood</span> fastFood<span class="token punctuation">,</span> <span class="token keyword">float</span> price<span class="token punctuation">,</span> <span class="token class-name">String</span> desc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>price<span class="token punctuation">,</span>desc<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>fastFood <span class="token operator">=</span> fastFood<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Egg:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//鸡蛋配料</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Egg</span> <span class="token keyword">extends</span> <span class="token class-name">Garnish</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Egg</span><span class="token punctuation">(</span><span class="token class-name">FastFood</span> fastFood<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>fastFood<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&quot;鸡蛋&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">getFastFood</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">getFastFood</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Bacon:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//培根配料</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Bacon</span> <span class="token keyword">extends</span> <span class="token class-name">Garnish</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Bacon</span><span class="token punctuation">(</span><span class="token class-name">FastFood</span> fastFood<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">super</span><span class="token punctuation">(</span>fastFood<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;培根&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">getFastFood</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">getFastFood</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Client:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//测试类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//点一份炒饭</span>
        <span class="token class-name">FastFood</span> food <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FriedRice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//花费的价格</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>food<span class="token punctuation">.</span><span class="token function">getDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> food<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;========&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//点一份加鸡蛋的炒饭</span>
        <span class="token class-name">FastFood</span> food1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FriedRice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        food1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Egg</span><span class="token punctuation">(</span>food1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//花费的价格</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>food1<span class="token punctuation">.</span><span class="token function">getDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> food1<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;========&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//点一份加培根的炒面</span>
        <span class="token class-name">FastFood</span> food2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FriedNoodles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        food2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bacon</span><span class="token punctuation">(</span>food2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//花费的价格</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>food2<span class="token punctuation">.</span><span class="token function">getDesc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> food2<span class="token punctuation">.</span><span class="token function">cost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>好处：</strong></p><ul><li>装饰者模式可以带来比继承更加灵活性的扩展功能，使用更加方便，可以通过组合不同的装饰者对象来获取具有不同行为状态的多样化的结果。装饰者模式比继承更具良好的扩展性，完美的遵循开闭原则，继承是静态的附加责任，装饰者则是动态的附加责任。</li><li>装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。</li></ul><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h2><ul><li><p>当不能采用继承的方式对系统进行扩充或者采用继承不利于系统扩展和维护时。</p><p>不能采用继承的情况主要有两类：</p><ul><li>第一类是系统中存在大量独立的扩展，为支持每一种组合将产生大量的子类，使得子类数目呈爆炸性增长；</li><li>第二类是因为类定义不能继承（如final类）</li></ul></li><li><p>在不影响其他对象的情况下，以动态、透明的方式给单个对象添加职责。</p></li><li><p>当对象的功能要求可以动态地添加，也可以再动态地撤销时。</p></li></ul><h2 id="jdk源码解析" tabindex="-1"><a class="header-anchor" href="#jdk源码解析" aria-hidden="true">#</a> JDK源码解析</h2><p>IO流中的包装类使用到了装饰者模式。BufferedInputStream，BufferedOutputStream，BufferedReader，BufferedWriter。</p><p>我们以BufferedWriter举例来说明，先看看如何使用BufferedWriter</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
        <span class="token comment">//创建BufferedWriter对象</span>
        <span class="token comment">//创建FileWriter对象</span>
        <span class="token class-name">FileWriter</span> fw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\a.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BufferedWriter</span> bw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedWriter</span><span class="token punctuation">(</span>fw<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//写数据</span>
        bw<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;hello Buffered&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        bw<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用起来感觉确实像是装饰者模式，接下来看它们的结构：</p><img src="`+d+'" style="zoom:80%;">',41),m=n("p",null,"​ BufferedWriter使用装饰者模式对Writer子实现类进行了增强，添加了缓冲区，提高了写数据的效率。",-1),b=s('<h2 id="代理和装饰者的区别" tabindex="-1"><a class="header-anchor" href="#代理和装饰者的区别" aria-hidden="true">#</a> 代理和装饰者的区别</h2><p>静态代理和装饰者模式的区别：</p><ul><li>相同点： <ul><li>都要实现与目标类相同的业务接口</li><li>在两个类中都要声明目标对象</li><li>都可以在不修改目标类的前提下增强目标方法</li></ul></li><li>不同点： <ul><li>目的不同 装饰者是为了增强目标对象 静态代理是为了保护和隐藏目标对象</li><li>获取目标对象构建的地方不同 装饰者是由外界传递进来，可以通过构造方法传递 静态代理是在代理类内部创建，以此来隐藏目标对象</li></ul></li></ul>',3);function f(w,y){const a=l("font");return t(),e("div",null,[v,n("blockquote",null,[o(a,{color:"red"},{default:c(()=>[i("小结：")]),_:1}),m]),b])}const h=p(r,[["render",f],["__file","structural_mode03.html.vue"]]);export{h as default};
