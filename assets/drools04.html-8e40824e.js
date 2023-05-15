import{_ as n,W as s,X as a,Y as e}from"./framework-6447176f.js";const t={},p=e(`<h1 id="规则属性" tabindex="-1"><a class="header-anchor" href="#规则属性" aria-hidden="true">#</a> 规则属性</h1><p>前面我们已经知道了规则体的构成如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>rule <span class="token string">&quot;ruleName&quot;</span>
    attributes
    when
        <span class="token constant">LHS</span>
    then
        <span class="token constant">RHS</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本章节就是针对规则体的attributes属性部分进行讲解。Drools中提供的属性如下表(部分属性)：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>属性名	说明
salience	指定规则执行优先级
dialect	指定规则使用的语言类型，取值为java和mvel
enabled	指定规则是否启用
date<span class="token operator">-</span>effective	指定规则生效时间
date<span class="token operator">-</span>expires	指定规则失效时间
activation<span class="token operator">-</span>group	激活分组，具有相同分组名称的规则只能有一个规则触发
agenda<span class="token operator">-</span>group	议程分组，只有获取焦点的组中的规则才有可能触发
timer	定时器，指定规则触发的时间
auto<span class="token operator">-</span>focus	自动获取焦点，一般结合agenda<span class="token operator">-</span>group一起使用
no<span class="token operator">-</span>loop	防止死循环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enabled属性" tabindex="-1"><a class="header-anchor" href="#enabled属性" aria-hidden="true">#</a> enabled属性</h2><p>enabled属性对应的取值为true和false，默认值为true。</p><p>用于指定当前规则是否启用，如果设置的值为false则当前规则无论是否匹配成功都不会触发。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>rule <span class="token string">&quot;rule_comparison_notMemberOf&quot;</span>
    <span class="token comment">//指定当前规则不可用，当前规则无论是否匹配成功都不会执行</span>
    enabled <span class="token boolean">false</span>
    when
        <span class="token class-name">ComparisonOperatorEntity</span><span class="token punctuation">(</span>names not memberOf list<span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_comparison_notMemberOf触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dialect属性" tabindex="-1"><a class="header-anchor" href="#dialect属性" aria-hidden="true">#</a> dialect属性</h2><p>dialect属性用于指定当前规则使用的语言类型，取值为java和mvel，默认值为java。</p><p>注：mvel是一种基于java语法的表达式语言。</p><p>mvel像正则表达式一样，有直接支持集合、数组和字符串匹配的操作符。</p><p>mvel还提供了用来配置和构造字符串的模板语言。</p><p>mvel表达式内容包括属性表达式，布尔表达式，方法调用，变量赋值，函数定义等。</p><h2 id="salience属性" tabindex="-1"><a class="header-anchor" href="#salience属性" aria-hidden="true">#</a> salience属性</h2><p>salience属性用于指定规则的执行优先级，取值类型为Integer。数值越大越优先执行。每个规则都有一个默认的执行顺序，如果不设置salience属性，规则体的执行顺序为由上到下。</p><p>可以通过创建规则文件/resources/rules/salience.drl来测试salience属性，内容如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">rules</span>

rule <span class="token string">&quot;rule_1&quot;</span>
    when
        <span class="token function">eval</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_1触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_2&quot;</span>
    when
        <span class="token function">eval</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_2触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_3&quot;</span>
    when
        <span class="token function">eval</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_3触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test07</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>规则rule_1触发
规则rule_2触发
规则rule_3触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过控制台可以看到，由于以上三个规则没有设置salience属性，所以执行的顺序是按照规则文件中规则的顺序由上到下执行的。接下来我们修改一下文件内容：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">rules</span>

rule <span class="token string">&quot;rule_1&quot;</span>
    salience <span class="token number">9</span>
    when
        <span class="token function">eval</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_1触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_2&quot;</span>
    salience <span class="token number">10</span>
    when
        <span class="token function">eval</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_2触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_3&quot;</span>
    salience <span class="token number">8</span>
    when
        <span class="token function">eval</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_3触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次测试结果:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>规则rule_2触发
规则rule_1触发
规则rule_3触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过控制台可以看到，规则文件执行的顺序是按照我们设置的salience值由大到小顺序执行的。</p><p>建议在编写规则时使用salience属性明确指定执行优先级。</p><h2 id="no-loop属性" tabindex="-1"><a class="header-anchor" href="#no-loop属性" aria-hidden="true">#</a> no-loop属性</h2><p>no-loop属性用于防止死循环，当规则通过update之类的函数修改了Fact对象时，可能使当前规则再次被激活从而导致死循环。取值类型为Boolean，默认值为false。测试步骤如下：</p><p>第一步：编写规则文件/resource/rules/noloop.drl</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">rules</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>drools<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Student</span>
<span class="token comment">/*
    此规则文件用于测试no-loop属性
*/</span>
rule <span class="token string">&quot;rule_noloop&quot;</span>
    <span class="token comment">// no-loop true</span>
    when
        $student<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">==</span> <span class="token number">25</span><span class="token punctuation">)</span>
    then
        <span class="token function">update</span><span class="token punctuation">(</span>$student<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//注意此处执行update会导致当前规则重新被激活</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_noloop触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test08</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//将数据提供给规则引擎，规则引擎会根据提供的数据进行规则匹配，如果规则匹配成功则执行规则</span>
        kieSession<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>

        kieSession<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RuleNameEqualsAgendaFilter</span><span class="token punctuation">(</span><span class="token string">&quot;rule_noloop&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>规则rule_noloop触发
规则rule_noloop触发
规则rule_noloop触发
规则rule_noloop触发
规则rule_noloop触发
规则rule_noloop触发
规则rule_noloop触发
规则rule_noloop触发
规则rule_noloop触发
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置no-loop为true</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">rules</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>drools<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Student</span>
<span class="token comment">/*
    此规则文件用于测试no-loop属性
*/</span>
rule <span class="token string">&quot;rule_noloop&quot;</span>
    no<span class="token operator">-</span>loop <span class="token boolean">true</span>
    when
        $student<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">==</span> <span class="token number">25</span><span class="token punctuation">)</span>
    then
        <span class="token function">update</span><span class="token punctuation">(</span>$student<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//注意此处执行update会导致当前规则重新被激活</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_noloop触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次测试结果:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>规则rule_noloop触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过控制台可以看到，由于我们没有设置no-loop属性的值，所以发生了死循环。接下来设置no-loop的值为true再次测试则不会发生死循环。</p><h2 id="activation-group属性" tabindex="-1"><a class="header-anchor" href="#activation-group属性" aria-hidden="true">#</a> activation-group属性</h2><p>activation-group属性是指激活分组，取值为String类型。具有相同分组名称的规则只能有一个规则被触发。</p><p>第一步：编写规则文件/resources/rules/activationgroup.drl</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">rules</span>
<span class="token comment">/*
    此规则文件用于测试activation-group属性
*/</span>
rule <span class="token string">&quot;rule_activationgroup_1&quot;</span>
    activation<span class="token operator">-</span>group <span class="token string">&quot;mygroup&quot;</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_activationgroup_1触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_activationgroup_2&quot;</span>
    activation<span class="token operator">-</span>group <span class="token string">&quot;mygroup&quot;</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_activationgroup_2触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test09</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>规则rule_activationgroup_1触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过控制台可以发现，上面的两个规则因为属于同一个分组，所以只有一个触发了。同一个分组中的多个规则如果都能够匹配成功，具体哪一个最终能够被触发可以通过salience属性确定。</p><h2 id="agenda-group属性" tabindex="-1"><a class="header-anchor" href="#agenda-group属性" aria-hidden="true">#</a> agenda-group属性</h2><p>agenda-group属性为议程分组，属于另一种可控的规则执行方式。用户可以通过设置agenda-group来控制规则的执行，只有获取焦点的组中的规则才会被触发。</p><p>第一步：创建规则文件/resources/rules/agendagroup.drl</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">testagendagroup</span>
<span class="token comment">/*
    此规则文件用于测试agenda-group属性
*/</span>
rule <span class="token string">&quot;rule_agendagroup_1&quot;</span>
    agenda<span class="token operator">-</span>group <span class="token string">&quot;myagendagroup_1&quot;</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_agendagroup_1触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_agendagroup_2&quot;</span>
    agenda<span class="token operator">-</span>group <span class="token string">&quot;myagendagroup_1&quot;</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_agendagroup_2触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
<span class="token comment">//========================================================</span>
rule <span class="token string">&quot;rule_agendagroup_3&quot;</span>
    agenda<span class="token operator">-</span>group <span class="token string">&quot;myagendagroup_2&quot;</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_agendagroup_3触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_agendagroup_4&quot;</span>
    agenda<span class="token operator">-</span>group <span class="token string">&quot;myagendagroup_2&quot;</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_agendagroup_4触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test10</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置焦点，对应agenda-group分组中的规则才可能被触发</span>
        kieSession<span class="token punctuation">.</span><span class="token function">getAgenda</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAgendaGroup</span><span class="token punctuation">(</span><span class="token string">&quot;myagendagroup_1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>规则rule_agendagroup_1触发
规则rule_agendagroup_2触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过控制台可以看到，只有获取焦点的分组中的规则才会触发。与activation-group不同的是，activation-group定义的分组中只能够有一个规则可以被触发，而agenda-group分组中的多个规则都可以被触发。</p><h2 id="auto-focus属性" tabindex="-1"><a class="header-anchor" href="#auto-focus属性" aria-hidden="true">#</a> auto-focus属性</h2><p>auto-focus属性为自动获取焦点，取值类型为Boolean，默认值为false。一般结合agenda-group属性使用，当一个议程分组未获取焦点时，可以设置auto-focus属性来控制。</p><p>第一步：修改/resources/rules/agendagroup.drl文件内容如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">rules</span>

rule <span class="token string">&quot;rule_agendagroup_1&quot;</span>
    agenda<span class="token operator">-</span>group <span class="token string">&quot;myagendagroup_1&quot;</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_agendagroup_1触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_agendagroup_2&quot;</span>
    agenda<span class="token operator">-</span>group <span class="token string">&quot;myagendagroup_1&quot;</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_agendagroup_2触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
<span class="token comment">//========================================================</span>
rule <span class="token string">&quot;rule_agendagroup_3&quot;</span>
    agenda<span class="token operator">-</span>group <span class="token string">&quot;myagendagroup_2&quot;</span>
    auto<span class="token operator">-</span>focus <span class="token boolean">true</span> <span class="token comment">//自动获取焦点</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_agendagroup_3触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_agendagroup_4&quot;</span>
    agenda<span class="token operator">-</span>group <span class="token string">&quot;myagendagroup_2&quot;</span>
    auto<span class="token operator">-</span>focus <span class="token boolean">true</span> <span class="token comment">//自动获取焦点</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_agendagroup_4触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test10</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>规则rule_agendagroup_3触发
规则rule_agendagroup_4触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过控制台可以看到，设置auto-focus属性为true的规则都触发了。</p><h2 id="timer属性" tabindex="-1"><a class="header-anchor" href="#timer属性" aria-hidden="true">#</a> timer属性</h2><p>timer属性可以通过定时器的方式指定规则执行的时间，使用方式有两种：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>方式一：timer <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">:</span> <span class="token generics"><span class="token punctuation">&lt;</span>initial delay<span class="token punctuation">&gt;</span></span> <span class="token generics"><span class="token punctuation">&lt;</span>repeat interval<span class="token punctuation">&gt;</span></span><span class="token operator">?</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此种方式遵循java.util.Timer对象的使用方式，第一个参数表示几秒后执行，第二个参数表示每隔几秒执行一次，第二个参数为可选。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>方式二：<span class="token function">timer</span><span class="token punctuation">(</span>cron<span class="token operator">:</span> <span class="token generics"><span class="token punctuation">&lt;</span>cron expression<span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此种方式使用标准的unix cron表达式的使用方式来定义规则执行的时间。</p><p>第一步：创建规则文件/resources/rules/timer.drl</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">testtimer</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span>
<span class="token keyword">import</span> <span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span>
<span class="token comment">/*
    此规则文件用于测试timer属性
*/</span>

rule <span class="token string">&quot;rule_timer_1&quot;</span>
    timer <span class="token punctuation">(</span><span class="token number">5</span>s <span class="token number">2</span>s<span class="token punctuation">)</span> <span class="token comment">//含义：5秒后触发，然后每隔2秒触发一次</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_timer_1触发，触发时间为：&quot;</span> <span class="token operator">+</span> 
                         <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_timer_2&quot;</span>
    timer <span class="token punctuation">(</span>cron<span class="token operator">:</span><span class="token number">0</span><span class="token operator">/</span><span class="token number">1</span> <span class="token operator">*</span> <span class="token operator">*</span> <span class="token operator">*</span> <span class="token operator">*</span> <span class="token operator">?</span><span class="token punctuation">)</span> <span class="token comment">//含义：每隔1秒触发一次</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_timer_2触发，触发时间为：&quot;</span> <span class="token operator">+</span> 
                         <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test11</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>

        <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//启动规则引擎进行规则匹配，直到调用halt方法才结束规则引擎</span>
                kieSession<span class="token punctuation">.</span><span class="token function">fireUntilHalt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//结束规则引擎</span>
        kieSession<span class="token punctuation">.</span><span class="token function">halt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>规则rule_timer_2触发，触发时间为：<span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">11</span><span class="token operator">:</span><span class="token number">53</span><span class="token operator">:</span><span class="token number">57</span>
规则rule_timer_2触发，触发时间为：<span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">11</span><span class="token operator">:</span><span class="token number">53</span><span class="token operator">:</span><span class="token number">58</span>
规则rule_timer_2触发，触发时间为：<span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">11</span><span class="token operator">:</span><span class="token number">53</span><span class="token operator">:</span><span class="token number">59</span>
规则rule_timer_2触发，触发时间为：<span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">11</span><span class="token operator">:</span><span class="token number">54</span><span class="token operator">:</span><span class="token number">00</span>
规则rule_timer_2触发，触发时间为：<span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">11</span><span class="token operator">:</span><span class="token number">54</span><span class="token operator">:</span><span class="token number">01</span>
规则rule_timer_1触发，触发时间为：<span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">11</span><span class="token operator">:</span><span class="token number">54</span><span class="token operator">:</span><span class="token number">01</span>
规则rule_timer_2触发，触发时间为：<span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">11</span><span class="token operator">:</span><span class="token number">54</span><span class="token operator">:</span><span class="token number">02</span>
规则rule_timer_2触发，触发时间为：<span class="token number">2023</span><span class="token operator">-</span><span class="token number">04</span><span class="token operator">-</span><span class="token number">28</span> <span class="token number">11</span><span class="token operator">:</span><span class="token number">54</span><span class="token operator">:</span><span class="token number">03</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：单元测试的代码和以前的有所不同，因为我们规则文件中使用到了timer进行定时执行，需要程序能够持续一段时间才能够看到定时器触发的效果。</p><h2 id="date-effective属性" tabindex="-1"><a class="header-anchor" href="#date-effective属性" aria-hidden="true">#</a> date-effective属性</h2><p>date-effective属性用于指定规则的生效时间，即只有当前系统时间大于等于设置的时间或者日期规则才有可能触发。默认日期格式为：dd-MMM-yyyy。用户也可以自定义日期格式。</p><p>第一步：编写规则文件/resources/rules/dateeffective.drl</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">rules</span>
<span class="token comment">/*
    此规则文件用于测试date-effective属性
*/</span>
rule <span class="token string">&quot;rule_dateeffective_1&quot;</span>
    date<span class="token operator">-</span>effective <span class="token string">&quot;2023-10-01 10:00&quot;</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_dateeffective_1触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test12</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//设置日期格式</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;drools.dateformat&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;yyyy-MM-dd HH:mm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：上面的代码需要设置日期格式，否则我们在规则文件中写的日期格式和默认的日期格式不匹配程序会报错。</p><h2 id="date-expires属性" tabindex="-1"><a class="header-anchor" href="#date-expires属性" aria-hidden="true">#</a> date-expires属性</h2><p>date-expires属性用于指定规则的失效时间，即只有当前系统时间小于设置的时间或者日期规则才有可能触发。默认日期格式为：dd-MMM-yyyy。用户也可以自定义日期格式。</p><p>第一步：编写规则文件/resource/rules/dateexpires.drl</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">rules</span>
<span class="token comment">/*
    此规则文件用于测试date-expires属性
*/</span>
rule <span class="token string">&quot;rule_dateexpires_1&quot;</span>
    date<span class="token operator">-</span>expires <span class="token string">&quot;2023-10-01 10:00&quot;</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_dateexpires_1触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test13</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;drools.dateformat&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;yyyy-MM-dd HH:mm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：上面的代码需要设置日期格式，否则我们在规则文件中写的日期格式和默认的日期格式不匹配程序会报错。</p>`,96),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","drools04.html.vue"]]);export{r as default};
