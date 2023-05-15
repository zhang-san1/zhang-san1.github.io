import{_ as n,W as s,X as a,Y as e}from"./framework-6447176f.js";const t={},p=e(`<h1 id="drools基础语法" tabindex="-1"><a class="header-anchor" href="#drools基础语法" aria-hidden="true">#</a> Drools基础语法</h1><h2 id="规则文件构成" tabindex="-1"><a class="header-anchor" href="#规则文件构成" aria-hidden="true">#</a> 规则文件构成</h2><p>在使用Drools时非常重要的一个工作就是编写规则文件，通常规则文件的后缀为.drl。</p><p>drl是Drools Rule Language的缩写。在规则文件中编写具体的规则内容。</p><p>一套完整的规则文件内容构成如下:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>关键字 	描述 
<span class="token keyword">package</span>	包名，只限于逻辑上的管理，同一个包名下的查询或者函数可以直接调用
<span class="token keyword">import</span>	用于导入类或者静态方法
global	全局变量
function	自定义函数
query	查询
rule end	规则体
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Drools支持的规则文件，除了drl形式，还有Excel文件类型的。</p><h2 id="规则体语法结构" tabindex="-1"><a class="header-anchor" href="#规则体语法结构" aria-hidden="true">#</a> 规则体语法结构</h2><p>规则体是规则文件内容中的重要组成部分，是进行业务规则判断、处理业务结果的部分。</p><p>规则体语法结构如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>rule <span class="token string">&quot;ruleName&quot;</span>
    attributes
    when
        <span class="token constant">LHS</span>
    then
        <span class="token constant">RHS</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rule：关键字，表示规则开始，参数为规则的唯一名称。</p><p>attributes：规则属性，是rule与when之间的参数，为可选项。</p><p>when：关键字，后面跟规则的条件部分。</p><p>LHS(Left Hand Side)：是规则的条件部分的通用名称。它由零个或多个条件元素组成。如果LHS为空，则它将被视为始终为true的条件元素。</p><p>then：关键字，后面跟规则的结果部分。</p><p>RHS(Right Hand Side)：是规则的后果或行动部分的通用名称。</p><p>end：关键字，表示一个规则结束。</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>在drl形式的规则文件中使用注释和Java类中使用注释一致，分为单行注释和多行注释。</p><p>单行注释用&quot;//&quot;进行标记，多行注释以&quot;/<em>&quot;开始，以&quot;</em>/&quot;结束。如下示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//规则rule1的注释，这是一个单行注释</span>
rule <span class="token string">&quot;rule1&quot;</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;rule1触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

<span class="token comment">/*
规则rule2的注释，
这是一个多行注释
*/</span>
rule <span class="token string">&quot;rule2&quot;</span>
    when
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;rule2触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pattern模式匹配" tabindex="-1"><a class="header-anchor" href="#pattern模式匹配" aria-hidden="true">#</a> Pattern模式匹配</h2><p>前面我们已经知道了Drools中的匹配器可以将Rule Base中的所有规则与Working Memory中的Fact对象进行模式匹配，那么我们就需要在规则体的LHS部分定义规则并进行模式匹配。LHS部分由一个或者多个条件组成，条件又称为pattern。</p><p>pattern的语法结构为：绑定变量名:Object(Field约束)</p><p>其中绑定变量名可以省略，通常绑定变量名的命名一般建议以$开始。如果定义了绑定变量名，就可以在规则体的RHS部分使用此绑定变量名来操作相应的Fact对象。Field约束部分是需要返回true或者false的0个或多个表达式。</p><p>例如我们的入门案例中：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//规则二：所购图书总价在100到200元的优惠20元</span>
rule <span class="token string">&quot;book_discount_2&quot;</span>
    when
        <span class="token comment">//Order为类型约束，originalPrice为属性约束</span>
        $order<span class="token operator">:</span><span class="token class-name">Order</span><span class="token punctuation">(</span>originalPrice <span class="token operator">&lt;</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> originalPrice <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span>
    then
        $order<span class="token punctuation">.</span><span class="token function">setRealPrice</span><span class="token punctuation">(</span>$order<span class="token punctuation">.</span><span class="token function">getOriginalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;成功匹配到规则二：所购图书总价在100到200元的优惠20元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的例子我们可以知道，匹配的条件为：</p><ul><li><p>1、工作内存中必须存在Order这种类型的Fact对象-----类型约束</p></li><li><p>2、Fact对象的originalPrice属性值必须小于200------属性约束</p></li><li><p>3、Fact对象的originalPrice属性值必须大于等于100------属性约束</p></li></ul><p>以上条件必须同时满足当前规则才有可能被激活。</p><p>绑定变量既可以用在对象上，也可以用在对象的属性上。例如上面的例子可以改为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//规则二：所购图书总价在100到200元的优惠20元</span>
rule <span class="token string">&quot;book_discount_2&quot;</span>
    when
        $order<span class="token operator">:</span><span class="token class-name">Order</span><span class="token punctuation">(</span>$op<span class="token operator">:</span>originalPrice <span class="token operator">&lt;</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> originalPrice <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;$op=&quot;</span> <span class="token operator">+</span> $op<span class="token punctuation">)</span><span class="token punctuation">;</span>
        $order<span class="token punctuation">.</span><span class="token function">setRealPrice</span><span class="token punctuation">(</span>$order<span class="token punctuation">.</span><span class="token function">getOriginalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;成功匹配到规则二：所购图书总价在100到200元的优惠20元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LHS部分还可以定义多个pattern，多个pattern之间可以使用and或者or进行连接，也可以不写，默认连接为and。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//规则二：所购图书总价在100到200元的优惠20元</span>
rule <span class="token string">&quot;book_discount_2&quot;</span>
    when
        $order<span class="token operator">:</span><span class="token class-name">Order</span><span class="token punctuation">(</span>$op<span class="token operator">:</span>originalPrice <span class="token operator">&lt;</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> originalPrice <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> and
        $customer<span class="token operator">:</span><span class="token class-name">Customer</span><span class="token punctuation">(</span>age <span class="token operator">&gt;</span> <span class="token number">20</span> <span class="token operator">&amp;&amp;</span> gender<span class="token operator">==</span><span class="token char">&#39;male&#39;</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;$op=&quot;</span> <span class="token operator">+</span> $op<span class="token punctuation">)</span><span class="token punctuation">;</span>
        $order<span class="token punctuation">.</span><span class="token function">setRealPrice</span><span class="token punctuation">(</span>$order<span class="token punctuation">.</span><span class="token function">getOriginalPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;成功匹配到规则二：所购图书总价在100到200元的优惠20元&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="比较操作符" tabindex="-1"><a class="header-anchor" href="#比较操作符" aria-hidden="true">#</a> 比较操作符</h2><p>Drools提供的比较操作符，如下表：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>符号	说明
<span class="token operator">&gt;</span>	大于
<span class="token operator">&lt;</span>	小于
<span class="token operator">&gt;=</span>	大于等于
<span class="token operator">&lt;=</span>	小于等于
<span class="token operator">==</span>	等于
<span class="token operator">!=</span>	不等于
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>contains 检查一个Fact对象的某个属性值是否包含一个指定的对象值</p><p>not contains 检查一个Fact对象的某个属性值是否不包含一个指定的对象值</p><p>memberOf 判断一个Fact对象的某个属性是否在一个或多个集合中</p><p>not memberOf 判断一个Fact对象的某个属性是否不在一个或多个集合中</p><p>matches 判断一个Fact对象的属性是否与提供的标准的Java正则表达式进行匹配</p><p>not matches 判断一个Fact对象的属性是否不与提供的标准的Java正则表达式进行匹配</p><p>前6个比较操作符和Java中的完全相同，下面我们重点学习后6个比较操作符。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>contains <span class="token operator">|</span> not contains语法结构

<span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token class-name">Collection</span><span class="token operator">/</span><span class="token class-name">Array</span><span class="token punctuation">]</span> contains value<span class="token punctuation">)</span>

<span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token class-name">Field</span><span class="token punctuation">[</span><span class="token class-name">Collection</span><span class="token operator">/</span><span class="token class-name">Array</span><span class="token punctuation">]</span> not contains value<span class="token punctuation">)</span>

memberOf <span class="token operator">|</span> not memberOf语法结构

<span class="token class-name">Object</span><span class="token punctuation">(</span>field memberOf value<span class="token punctuation">[</span><span class="token class-name">Collection</span><span class="token operator">/</span><span class="token class-name">Array</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token class-name">Object</span><span class="token punctuation">(</span>field not memberOf value<span class="token punctuation">[</span><span class="token class-name">Collection</span><span class="token operator">/</span><span class="token class-name">Array</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

matches <span class="token operator">|</span> not matches语法结构

<span class="token class-name">Object</span><span class="token punctuation">(</span>field matches <span class="token string">&quot;正则表达式&quot;</span><span class="token punctuation">)</span>

<span class="token class-name">Object</span><span class="token punctuation">(</span>field not matches <span class="token string">&quot;正则表达式&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h3><p>第一步：创建实体类，用于测试比较操作符</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>drools<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
​
<span class="token doc-comment comment">/**
 * 实体类
 * 用于测试比较操作符
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComparisonOperatorEntity</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> names<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> names<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setNames</span><span class="token punctuation">(</span><span class="token class-name">String</span> names<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>names <span class="token operator">=</span> names<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：在/resources/rules下创建规则文件comparisonOperator.drl</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">rules</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>drools<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">ComparisonOperatorEntity</span>
<span class="token comment">/*
 当前规则文件用于测试Drools提供的比较操作符
*/</span>
<span class="token comment">//测试比较操作符contains</span>
rule <span class="token string">&quot;rule_comparison_contains&quot;</span>
    when
        <span class="token class-name">ComparisonOperatorEntity</span><span class="token punctuation">(</span>names contains <span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span>
        <span class="token class-name">ComparisonOperatorEntity</span><span class="token punctuation">(</span>list contains names<span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_comparison_contains触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

<span class="token comment">//测试比较操作符not contains</span>
rule <span class="token string">&quot;rule_comparison_notContains&quot;</span>
    when
        <span class="token class-name">ComparisonOperatorEntity</span><span class="token punctuation">(</span>names not contains <span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span>
        <span class="token class-name">ComparisonOperatorEntity</span><span class="token punctuation">(</span>list not contains names<span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_comparison_notContains触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

<span class="token comment">//测试比较操作符memberOf</span>
rule <span class="token string">&quot;rule_comparison_memberOf&quot;</span>
    when
        <span class="token class-name">ComparisonOperatorEntity</span><span class="token punctuation">(</span>names memberOf list<span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_comparison_memberOf触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

<span class="token comment">//测试比较操作符not memberOf</span>
rule <span class="token string">&quot;rule_comparison_notMemberOf&quot;</span>
    when
        <span class="token class-name">ComparisonOperatorEntity</span><span class="token punctuation">(</span>names not memberOf list<span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_comparison_notMemberOf触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

<span class="token comment">//测试比较操作符matches</span>
rule <span class="token string">&quot;rule_comparison_matches&quot;</span>
    when
        <span class="token class-name">ComparisonOperatorEntity</span><span class="token punctuation">(</span>names matches <span class="token string">&quot;张.*&quot;</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_comparison_matches触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

<span class="token comment">//测试比较操作符not matches</span>
rule <span class="token string">&quot;rule_comparison_notMatches&quot;</span>
    when
        <span class="token class-name">ComparisonOperatorEntity</span><span class="token punctuation">(</span>names not matches <span class="token string">&quot;张.*&quot;</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_comparison_notMatches触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三步：编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//测试比较操作符</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">ComparisonOperatorEntity</span> comparisonOperatorEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComparisonOperatorEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    comparisonOperatorEntity<span class="token punctuation">.</span><span class="token function">setNames</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    comparisonOperatorEntity<span class="token punctuation">.</span><span class="token function">setList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//将数据提供给规则引擎，规则引擎会根据提供的数据进行规则匹配，如果规则匹配成功则执行规则</span>
    kieSession<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>comparisonOperatorEntity<span class="token punctuation">)</span><span class="token punctuation">;</span>

    kieSession<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>规则rule_comparison_contains触发
规则rule_comparison_memberOf触发
规则rule_comparison_matches触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行指定规则" tabindex="-1"><a class="header-anchor" href="#执行指定规则" aria-hidden="true">#</a> 执行指定规则</h2><p>通过前面的案例可以看到，我们在调用规则代码时，满足条件的规则都会被执行。那么如果我们只想执行其中的某个规则如何实现呢？</p><p>Drools给我们提供的方式是通过规则过滤器来实现执行指定规则。对于规则文件不用做任何修改，只需要修改Java代码即可，如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ComparisonOperatorEntity</span> comparisonOperatorEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ComparisonOperatorEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        comparisonOperatorEntity<span class="token punctuation">.</span><span class="token function">setNames</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        comparisonOperatorEntity<span class="token punctuation">.</span><span class="token function">setList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//将数据提供给规则引擎，规则引擎会根据提供的数据进行规则匹配，如果规则匹配成功则执行规则</span>
        kieSession<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>comparisonOperatorEntity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//执行指定的规则 rule_comparison_memberOf</span>
        kieSession<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RuleNameEqualsAgendaFilter</span><span class="token punctuation">(</span><span class="token string">&quot;rule_comparison_memberOf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h2><p>Drools的关键字分为：硬关键字(Hard keywords)和软关键字(Soft keywords)。</p><p>硬关键字是我们在规则文件中定义包名或者规则名时明确不能使用的，否则程序会报错。软关键字虽然可以使用，但是不建议使用。</p><p>硬关键字包括：true false null</p><p>软关键字包括：lock-on-active date-effective date-expires no-loop auto-focus activation-group agenda-group ruleflow-group entry-point duration package import dialect salience enabled attributes rule extend when then template query declare function global eval not in or and exists forall accumulate collect from action reverse result end over init</p><h2 id="drools内置方法" tabindex="-1"><a class="header-anchor" href="#drools内置方法" aria-hidden="true">#</a> Drools内置方法</h2><p>规则文件的RHS部分的主要作用是通过插入，删除或修改工作内存中的Fact数据，来达到控制规则引擎执行的目的。Drools提供了一些方法可以用来操作工作内存中的数据，操作完成后规则引擎会重新进行相关规则的匹配，原来没有匹配成功的规则在我们修改数据完成后有可能就会匹配成功了。</p><p>创建如下实体类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>drools<span class="token punctuation">.</span>entity</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 学生
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update方法" tabindex="-1"><a class="header-anchor" href="#update方法" aria-hidden="true">#</a> update方法</h3><p>update方法的作用是更新工作内存中的数据，并让相关的规则重新匹配。</p><p>第一步：编写规则文件/resources/rules/student.drl，文件内容如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">rules</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>drools<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Student</span>

<span class="token comment">/*
 当前规则文件用于测试Drools提供的内置方法
*/</span>

rule <span class="token string">&quot;rule_student_age小于10岁&quot;</span>
    when
        $s<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span>
    then
        $s<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">update</span><span class="token punctuation">(</span>$s<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//更新数据，导致相关的规则会重新匹配</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_student_age小于10岁触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_student_age小于20岁同时大于10岁&quot;</span>
    when
        $s<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token operator">&amp;&amp;</span> age <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span>
    then
        $s<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">update</span><span class="token punctuation">(</span>$s<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//更新数据，导致相关的规则会重新匹配</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_student_age小于20岁同时大于10岁触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_student_age大于20岁&quot;</span>
    when
        $s<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_student_age大于20岁触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test04</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//将数据提供给规则引擎，规则引擎会根据提供的数据进行规则匹配，如果规则匹配成功则执行规则</span>
        kieSession<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>

        kieSession<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>规则rule_student_age小于<span class="token number">10</span>岁触发
规则rule_student_age小于<span class="token number">20</span>岁同时大于<span class="token number">10</span>岁触发
规则rule_student_age大于<span class="token number">20</span>岁触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过控制台的输出可以看到规则文件中定义的三个规则都触发了。</p><p>在更新数据时需要注意防止发生死循环。</p><h3 id="insert方法" tabindex="-1"><a class="header-anchor" href="#insert方法" aria-hidden="true">#</a> insert方法</h3><p>insert方法的作用是向工作内存中插入数据，并让相关的规则重新匹配。</p><p>第一步：修改student.drl文件内容如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">rules</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>drools<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Student</span>

<span class="token comment">/*
 当前规则文件用于测试Drools提供的内置方法
*/</span>

rule <span class="token string">&quot;rule_student_age等于10岁&quot;</span>
    when
        $s<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">insert</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//插入数据，导致相关的规则会重新匹配</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_student_age等于10岁触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_student_age小于10岁&quot;</span>
    when
        $s<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span>
    then
        $s<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">update</span><span class="token punctuation">(</span>$s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_student_age小于10岁触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_student_age小于20岁同时大于10岁&quot;</span>
    when
        $s<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token operator">&amp;&amp;</span> age <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span>
    then
        $s<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">update</span><span class="token punctuation">(</span>$s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_student_age小于20岁同时大于10岁触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_student_age大于20岁&quot;</span>
    when
        $s<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_student_age大于20岁触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test05</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//将数据提供给规则引擎，规则引擎会根据提供的数据进行规则匹配，如果规则匹配成功则执行规则</span>
        kieSession<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>

        kieSession<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>规则rule_student_age等于10岁触发
规则rule_student_age小于10岁触发
规则rule_student_age小于20岁同时大于10岁触发
规则rule_student_age大于20岁触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过控制台输出可以发现，四个规则都触发了，这是因为首先进行规则匹配时只有第一个规则可以匹配成功，但是在第一个规则中向工作内存中插入了一个数据导致重新进行规则匹配，此时第二个规则可以匹配成功。在第二个规则中进行了数据修改导致第三个规则也可以匹配成功，以此类推最终四个规则都匹配成功并执行了。</p><h3 id="retract方法" tabindex="-1"><a class="header-anchor" href="#retract方法" aria-hidden="true">#</a> retract方法</h3><p>retract方法的作用是删除工作内存中的数据，并让相关的规则重新匹配。</p><p>第一步：修改student.drl文件内容如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">rules</span>
<span class="token keyword">import</span> <span class="token namespace">com<span class="token punctuation">.</span>itheima<span class="token punctuation">.</span>drools<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">Student</span>

<span class="token comment">/*
 当前规则文件用于测试Drools提供的内置方法
*/</span>

rule <span class="token string">&quot;rule_student_age等于10岁时删除数据&quot;</span>
    <span class="token comment">/*
    salience：设置当前规则的执行优先级，数值越大越优先执行，默认值为0.
    因为当前规则的匹配条件和下面规则的匹配条件相同，为了保证先执行当前规则，需要设置优先级
    */</span>
    salience <span class="token number">100</span> 
    when
        $s<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span>
    then
        <span class="token function">retract</span><span class="token punctuation">(</span>$s<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//retract方法的作用是删除工作内存中的数据，并让相关的规则重新匹配。</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_student_age等于10岁时删除数据触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_student_age等于10岁&quot;</span>
    when
        $s<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">insert</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_student_age等于10岁触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_student_age小于10岁&quot;</span>
    when
        $s<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span>
    then
        $s<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">update</span><span class="token punctuation">(</span>$s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_student_age小于10岁触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_student_age小于20岁同时大于10岁&quot;</span>
    when
        $s<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token operator">&amp;&amp;</span> age <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span>
    then
        $s<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">update</span><span class="token punctuation">(</span>$s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_student_age小于20岁同时大于10岁触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end

rule <span class="token string">&quot;rule_student_age大于20岁&quot;</span>
    when
        $s<span class="token operator">:</span><span class="token class-name">Student</span><span class="token punctuation">(</span>age <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">)</span>
    then
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;规则rule_student_age大于20岁触发&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步：编写单元测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test06</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">KieServices</span> kieServices <span class="token operator">=</span> <span class="token class-name">KieServices<span class="token punctuation">.</span>Factory</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieContainer</span> kieClasspathContainer <span class="token operator">=</span> kieServices<span class="token punctuation">.</span><span class="token function">getKieClasspathContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">KieSession</span> kieSession <span class="token operator">=</span> kieClasspathContainer<span class="token punctuation">.</span><span class="token function">newKieSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Student</span> student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        student<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//将数据提供给规则引擎，规则引擎会根据提供的数据进行规则匹配，如果规则匹配成功则执行规则</span>
        kieSession<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">;</span>

        kieSession<span class="token punctuation">.</span><span class="token function">fireAllRules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kieSession<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>规则rule_student_age等于<span class="token number">10</span>岁时删除数据触发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过控制台输出可以发现，只有第一个规则触发了，因为在第一个规则中将工作内存中的数据删除了导致第二个规则并没有匹配成功。</p>`,97),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","drools03.html.vue"]]);export{r as default};
