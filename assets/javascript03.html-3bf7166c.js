import{_ as t,W as n,X as s,Y as a}from"./framework-6447176f.js";const e="/assets/image-20210815194911914-5bda5797.png",o="/assets/1668794898891-8b3d0865.png",p="/assets/1668795435780-a27b9d72.png",i="/assets/1668796236628-70460610.png",l={},c=a('<h1 id="bom对象" tabindex="-1"><a class="header-anchor" href="#bom对象" aria-hidden="true">#</a> BOM对象</h1><p>BOM的全称是 Browser Object Model ，浏览器对象模型。</p><p>JavaScript将浏览器的各个组成部分封装成了对象。我们要操作浏览器的部分功能，可以通过操作BOM对象的相关属性或者函数来完成。</p><p>BOM中提供了如下5个对象：</p><table><thead><tr><th style="text-align:left;">对象名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><mark>Window</mark></td><td style="text-align:left;">浏览器窗口对象</td></tr><tr><td style="text-align:left;">Navigator</td><td style="text-align:left;">浏览器对象</td></tr><tr><td style="text-align:left;">Screen</td><td style="text-align:left;">屏幕对象</td></tr><tr><td style="text-align:left;">History</td><td style="text-align:left;">历史记录对象</td></tr><tr><td style="text-align:left;"><mark>Location</mark></td><td style="text-align:left;">地址栏对象</td></tr></tbody></table><p><img src="'+e+`" alt="20210815194911914"></p><h2 id="window对象" tabindex="-1"><a class="header-anchor" href="#window对象" aria-hidden="true">#</a> Window对象</h2><p>window对象提供了获取其他BOM对象的属性：</p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>history</td><td>用于获取history对象</td></tr><tr><td>location</td><td>用于获取location对象</td></tr><tr><td>Navigator</td><td>用于获取Navigator对象</td></tr><tr><td>Screen</td><td>用于获取Screen对象</td></tr></tbody></table><p>window也提供了一些常用的函数，如下表格所示：</p><table><thead><tr><th>函数</th><th>描述</th></tr></thead><tbody><tr><td>alert()</td><td>显示带有一段消息和一个确认按钮的警告框。</td></tr><tr><td>comfirm()</td><td>显示带有一段消息以及确认按钮和取消按钮的对话框。</td></tr><tr><td>setInterval()</td><td>按照指定的周期（以毫秒计）来调用函数或计算表达式。</td></tr><tr><td>setTimeout()</td><td>在指定的毫秒数后调用函数或计算表达式。</td></tr></tbody></table><ul><li><p><strong>confirm()函数</strong>：弹出确认框，并且提供用户2个按钮，分别是确认和取消。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&quot;您确认删除该记录吗?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+o+`" alt="1668794898891"></p></li><li><p><strong>setInterval(fn, 毫秒值)</strong>：定时器，用于周期性的执行某个功能，并且是<strong>循环执行</strong>。</p></li></ul><div class="hint-container note"><p class="hint-container-title">需要传递2个参数</p><p>fn: 函数，需要周期性执行的功能代码</p><p>毫秒值：间隔时间</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//定时器 -- setInterval -- 周期性的执行某一个函数</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     i<span class="token operator">++</span><span class="token punctuation">;</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;定时器执行了&quot;</span><span class="token operator">+</span>i<span class="token operator">+</span><span class="token string">&quot;次&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="1668795435780"></p><ul><li><p><strong>setTimeout(fn, 毫秒值)</strong> ：定时器，只会在一段时间后<strong>执行一次功能</strong>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//定时器 - setTimeout -- 延迟指定时间执行一次 </span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;JS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="location对象" tabindex="-1"><a class="header-anchor" href="#location对象" aria-hidden="true">#</a> Location对象</h2><p>location是指代浏览器的地址栏对象<br> 我们常用的是href属性，用于获取或者设置浏览器的地址信息，添加如下代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//获取浏览器地址栏信息</span>
<span class="token function">alert</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置浏览器地址栏信息</span>
location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&quot;https://www.itcast.cn&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+'" alt="1668796236628"></p>',20),r=[c];function d(u,k){return n(),s("div",null,r)}const m=t(l,[["render",d],["__file","javascript03.html.vue"]]);export{m as default};
