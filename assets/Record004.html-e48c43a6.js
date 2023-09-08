import{_ as n,W as s,X as a,Y as t}from"./framework-6447176f.js";const p={},o=t(`<h1 id="遍历目录及目录下的文件" tabindex="-1"><a class="header-anchor" href="#遍历目录及目录下的文件" aria-hidden="true">#</a> 遍历目录及目录下的文件</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>hysafe<span class="token punctuation">.</span>amendmentplatform<span class="token punctuation">.</span>utils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>hysafe<span class="token punctuation">.</span>amendmentplatform<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">DirectoriesEntity</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>hysafe<span class="token punctuation">.</span>amendmentplatform<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">InterfacesEntity</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>hysafe<span class="token punctuation">.</span>amendmentplatform<span class="token punctuation">.</span>pojo<span class="token punctuation">.</span></span><span class="token class-name">Vo</span><span class="token punctuation">.</span><span class="token class-name">DirectoryListVo</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TreeStructureUtil</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoryListVo</span><span class="token punctuation">&gt;</span></span> <span class="token function">getVolists</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoriesEntity</span><span class="token punctuation">&gt;</span></span> dirlist<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">InterfacesEntity</span><span class="token punctuation">&gt;</span></span> doclist<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoryListVo</span><span class="token punctuation">&gt;</span></span> listvo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//目录文件实体类</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoriesEntity</span><span class="token punctuation">&gt;</span></span> dirlistPen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//一级目录</span>

        <span class="token comment">//获取没有目录的文件，跟一级目录同级</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>doclist<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">InterfacesEntity</span> d <span class="token operator">=</span> doclist<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">DirectoryListVo</span> docvo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DirectoryListVo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                docvo<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">getInterfaceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                docvo<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">getInterfaceName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                docvo<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">getInterfaceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                docvo<span class="token punctuation">.</span><span class="token function">setProjectId</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">getProjectId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                docvo<span class="token punctuation">.</span><span class="token function">setParentId</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                docvo<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                listvo<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>docvo<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>dirlist<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//获取一级目录</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>dirlist<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">DirectoriesEntity</span> dir <span class="token operator">=</span> dirlist<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    dirlistPen<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token comment">//根据一级目录获取子目录和文件</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>dirlistPen<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>k<span class="token operator">&lt;</span>dirlistPen<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token class-name">DirectoriesEntity</span> dir <span class="token operator">=</span> dirlist<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">DirectoryListVo</span> docvo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DirectoryListVo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    docvo<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getDirectoryName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    docvo<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getDirectoryId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    docvo<span class="token punctuation">.</span><span class="token function">setParentId</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    docvo<span class="token punctuation">.</span><span class="token function">setProjectId</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getProjectId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    docvo<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoryListVo</span><span class="token punctuation">&gt;</span></span> d <span class="token operator">=</span>  <span class="token function">getVoDrenlist</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getDirectoryId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>dirlist<span class="token punctuation">,</span>doclist<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//子目录</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>doclist<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                            <span class="token class-name">InterfacesEntity</span> doc <span class="token operator">=</span> doclist<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token keyword">if</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> dir<span class="token punctuation">.</span><span class="token function">getDirectoryId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                                <span class="token class-name">DirectoryListVo</span> docvo1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DirectoryListVo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                docvo1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">getInterfaceName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                docvo1<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">getInterfaceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                docvo1<span class="token punctuation">.</span><span class="token function">setParentId</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                docvo1<span class="token punctuation">.</span><span class="token function">setProjectId</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">getProjectId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                docvo1<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                d<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>docvo1<span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    docvo<span class="token punctuation">.</span><span class="token function">setChildren</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    listvo<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>docvo<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> listvo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 递归算法获取子目录和文件
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@param</span> <span class="token parameter">dirlist</span>
     * <span class="token keyword">@param</span> <span class="token parameter">doclist</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoryListVo</span><span class="token punctuation">&gt;</span></span> <span class="token function">getVoDrenlist</span><span class="token punctuation">(</span><span class="token keyword">int</span> id <span class="token punctuation">,</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoriesEntity</span><span class="token punctuation">&gt;</span></span> dirlist<span class="token punctuation">,</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">InterfacesEntity</span><span class="token punctuation">&gt;</span></span> doclist<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoryListVo</span><span class="token punctuation">&gt;</span></span> listvo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>dirlist<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">DirectoriesEntity</span> dir <span class="token operator">=</span> dirlist<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">DirectoryListVo</span> docvo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DirectoryListVo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                docvo<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getDirectoryId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                docvo<span class="token punctuation">.</span><span class="token function">setParentId</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                docvo<span class="token punctuation">.</span><span class="token function">setProjectId</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getProjectId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                docvo<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getDirectoryName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                docvo<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                docvo<span class="token punctuation">.</span><span class="token function">setChildren</span><span class="token punctuation">(</span><span class="token function">getVoDrenlist</span><span class="token punctuation">(</span>dir<span class="token punctuation">.</span><span class="token function">getDirectoryId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>dirlist<span class="token punctuation">,</span>doclist<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                listvo<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>docvo<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//循环完当前目录级，去看当前级下面有没有文件</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token punctuation">(</span>dirlist<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>doclist<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token class-name">InterfacesEntity</span> doc <span class="token operator">=</span> doclist<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
                        <span class="token class-name">DirectoryListVo</span> docvo1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DirectoryListVo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        docvo1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">getInterfaceName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        docvo1<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">getInterfaceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        docvo1<span class="token punctuation">.</span><span class="token function">setParentId</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">getParentId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        docvo1<span class="token punctuation">.</span><span class="token function">setProjectId</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">getProjectId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        docvo1<span class="token punctuation">.</span><span class="token function">setType</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        listvo<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>docvo1<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> listvo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[o];function e(u,i){return s(),a("div",null,c)}const k=n(p,[["render",e],["__file","Record004.html.vue"]]);export{k as default};