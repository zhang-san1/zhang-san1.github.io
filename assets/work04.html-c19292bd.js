import{_ as e,a as n,b as i,c as s,d as a,e as d,f as l,g as r,h as t,i as c}from"./Snipaste_2023-05-18_13-23-54-033be3f6.js";import{_ as v,W as u,X as m,Y as o}from"./framework-6447176f.js";const p="/assets/Snipaste_2023-05-23_17-13-21-4660c933.png",b="/assets/Snipaste_2023-05-23_17-54-31-d118f0be.png",g="/assets/Snipaste_2023-05-23_17-54-40-fff44351.png",h="/assets/Snipaste_2023-05-23_17-56-05-4b774a74.png",f={},x=o(`<h2 id="漏洞扫描工具openvas" tabindex="-1"><a class="header-anchor" href="#漏洞扫描工具openvas" aria-hidden="true">#</a> 漏洞扫描工具openvas</h2><p>漏洞扫描是通过分析目标系统的安全性，寻找系统中可能存在的漏洞和弱点的过程。漏洞扫描原理涉及以下几个步骤：</p><p>目标识别：确定要扫描的目标系统，可以是一个单独的主机、网络或应用程序。</p><p>信息收集：收集与目标系统相关的信息，例如IP地址、域名、开放端口等。</p><p>漏洞识别：使用漏洞扫描工具或自定义脚本扫描目标系统，寻找已知的漏洞和弱点。这些漏洞可能包括操作系统漏洞、应用程序漏洞、配置错误等。</p><p>漏洞验证：对于扫描结果中发现的漏洞，进一步验证其是否真实存在。这可能涉及利用漏洞进行测试，或者使用其他技术进行确认。</p><p>报告生成：将扫描结果整理成易于理解和操作的报告，包括漏洞的详细描述、风险评估和建议的修复措施。</p><h3 id="openvas安装" tabindex="-1"><a class="header-anchor" href="#openvas安装" aria-hidden="true">#</a> openvas安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 443:443 -p 9390:9390 -e PUBLIC_HOSTNAME=192.168.206.135 --name openvas mikesplain/openvas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>访问：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https:192.168.206.135

默认账号: admin  密码: admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>界面：</p><p><img src="`+p+'" alt=""></p><p>添加扫描任务</p><p>点击Scan -&gt; Tasks -&gt; 左上角五角星图标 -&gt; new Task -&gt; 点击 Scan Targets 右边的五角星 -&gt; 选择ip 点击创建</p><p><img src="'+b+'" alt=""></p><p><img src="'+g+'" alt=""></p><p>扫描结果</p><p><img src="'+h+'" alt=""></p><h3 id="资产扫描工具-nmap-使用" tabindex="-1"><a class="header-anchor" href="#资产扫描工具-nmap-使用" aria-hidden="true">#</a> 资产扫描工具 nmap 使用</h3><h4 id="扫描单个目标地址" tabindex="-1"><a class="header-anchor" href="#扫描单个目标地址" aria-hidden="true">#</a> 扫描单个目标地址</h4><p>在Nmap后面直接添加目标地址即可扫描 nmap 192.168.206.133</p><p><img src="'+e+'" alt=""></p><p>扫描某一目标地址的21、22、23、80端口</p><p>nmap 192.168.206.133 -p 21,22,23,80</p><p><img src="'+n+'" alt=""></p><p>对目标地址进行路由跟踪 nmap --traceroute 192.168.206.133</p><p><img src="'+i+'" alt=""></p><p>扫描目标地址所在C段的在线状况 nmap -sP 192.168.206.133/24</p><p><img src="'+s+'" alt=""></p><p>目标地址的操作系统指纹识别 nmap -O 192.168.206.133</p><p><img src="'+a+'" alt=""></p><p>目标地址提供的服务版本检测 检测目标地址开放的端口对应的服务版本信息</p><p>nmap -sV 192.168.206.133</p><p><img src="'+d+'" alt=""></p><p>探测防火墙状态 利用FIN扫描的方式探测防火墙的状态。FIN扫描用于识别端口是否关闭，收到RST回复说明该端口关闭，否则就是open或filtered状态，</p><p>nmap -sF -T4 192.168.206.133</p><p><img src="'+l+'" alt=""></p><p>鉴权扫描 使用--script=auth可以对目标主机或目标主机所在的网段进行应用弱口令检测</p><p>nmap --script=auth 192.168.206.133</p><p><img src="'+r+'" alt=""></p><p>扫描常见的漏洞 Nmap具备漏洞扫描的功能，可以检查目标主机或网段是否存在常见的漏洞</p><p>nmap --script=vuln 192.168.206.133</p><p><img src="'+t+'" alt=""></p><p>Whois解析 利用第三方的数据库或资源查询目标地址的信息，例如进行Whois解析 nmap --script external 192.168.206.133</p><p><img src="'+c+`" alt=""></p><h2 id="弱口令" tabindex="-1"><a class="header-anchor" href="#弱口令" aria-hidden="true">#</a> 弱口令</h2><p>弱口令（Weak Password）指的是在访问系统、应用程序或网络服务时使用的易被猜测或破解的密码。弱口令是一种安全漏洞，因为攻击者可以通过尝试常见密码、简单密码或使用密码破解工具来猜测用户的密码，从而获取未授权的访问权限。</p><p>以下是一些常见的弱口令类型：</p><p>简单密码：使用容易猜测或常见的密码，如&quot;password&quot;、&quot;123456&quot;、&quot;qwerty&quot;等。这些密码很容易被攻击者猜测到。</p><p>字典密码：使用常见词典中的单词或短语作为密码，如&quot;sunshine&quot;、&quot;football&quot;、&quot;iloveyou&quot;等。攻击者可以使用密码破解工具尝试常见的字典词汇来猜测密码。</p><p>弱密码规则：密码长度过短、缺乏复杂性（如缺少数字、大写字母、特殊字符）或者没有定期更改密码的规定，都会导致弱口令的风险增加。</p><p>与用户名相关的密码：使用与用户名相关的密码，如在密码中包含用户名、逆序拼写用户名等。这种情况下，攻击者可以通过获取用户名轻松猜测密码。</p><p>弱口令可能导致以下安全风险：</p><p>被未授权用户访问：攻击者可以通过猜测或破解弱口令，获得未授权的访问权限，进而执行恶意操作、窃取敏感数据或破坏系统。</p><p>被暴力破解：如果系统没有设置账户锁定或密码失败限制，攻击者可以使用暴力破解工具进行大量尝试，通过逐个尝试密码来破解账户。</p><p>为了保护系统和数据安全，用户应当采取以下措施来避免弱口令：</p><p>使用强密码：选择密码时，应该使用足够长度的复杂密码，包括大小写字母、数字和特殊字符的组合。</p><p>定期更改密码：定期更改密码可以减少密码被猜测或破解的风险。</p><p>不要共享密码：避免在不安全的地方共享密码，每个账户应该使用独立且不同的密码。</p><p>使用多因素认证：启用多因素认证可以提供额外的安全层，即使密码被猜测或泄露，攻击者仍然需要额外的验证因素才能访问账户。</p><p>避免使用常见密码：避免使用容易被猜测到的常见密码，如出生日期、电话号码等个人信息。</p><p>使用密码管理工具：使用密码管理工具可以帮助您生成、存储和管理强密码，确保每个账户都有唯一且安全的密码。</p><p>强化访问控制：在系统或应用程序中实施强化的访问控制措施，如账户锁定、登录失败限制等，以防止暴力破解和密码猜测攻击。</p><p>定期进行安全审计：定期对系统和应用程序进行安全审计，包括检查弱口令、密码策略是否合规，并采取必要的措施加强安全性。</p><p>教育用户意识：提高用户对密码安全的意识，教育他们选择强密码、不共享密码、警惕钓鱼邮件等常见的安全威胁。</p><p>定期更新和修补系统：及时应用系统和应用程序的安全更新和补丁，以减少已知漏洞对系统的攻击风险。</p><p>总而言之，弱口令是一项严重的安全风险，因此采取适当的密码安全措施对于保护个人和组织的信息资产至关重要。同时，不仅用户个人需要关注密码安全，系统管理员和开发人员也需要遵循密码安全最佳实践来构建和维护安全的系统和应用程序。</p><h3 id="弱口令监测工具john使用" tabindex="-1"><a class="header-anchor" href="#弱口令监测工具john使用" aria-hidden="true">#</a> 弱口令监测工具john使用</h3><h3 id="获取john" tabindex="-1"><a class="header-anchor" href="#获取john" aria-hidden="true">#</a> 获取john</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://www.openwall.com/john/k/john-1.9.0-jumbo-1.tar.gz

 解压
tar -xf john-1.9.0-jumbo-1.tar.gz

cd john-1.9.0-jumbo-1.tar.gz/src/

安装
./configure &amp;&amp; make

报错，需要安装OpenSSL开发包
yum install openssl-devel

再次安装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>进入run目录

cd john-1.9.0-jumbo-1/run

运行

./john --single /etc/shadow

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>终端显示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Using default input encoding: UTF-8
Loaded 5 password hashes with 5 different salts (sha512crypt, crypt(3) $6$ [SHA512 256/256 AVX2 4x])
Cost 1 (iteration count) is 5000 for all loaded hashes
Warning: OpenMP is disabled; a non-OpenMP build may be faster
Press &#39;q&#39; or Ctrl-C to abort, almost any other key for status
root             (root)
root             (user)
Warning: Only 5 candidates buffered for the current salt, minimum 8 needed for performance.
Warning: Only 7 candidates buffered for the current salt, minimum 8 needed for performance.
Warning: Only 6 candidates buffered for the current salt, minimum 8 needed for performance.
Warning: Only 4 candidates buffered for the current salt, minimum 8 needed for performance.
Warning: Only 1 candidate buffered for the current salt, minimum 8 needed for performance.
Warning: Only 7 candidates buffered for the current salt, minimum 8 needed for performance.
Warning: Only 6 candidates buffered for the current salt, minimum 8 needed for performance.
Warning: Only 1 candidate buffered for the current salt, minimum 8 needed for performance.
Almost done: Processing the remaining buffered candidate passwords, if any.
Warning: Only 5 candidates buffered for the current salt, minimum 8 needed for performance.
Warning: Only 1 candidate buffered for the current salt, minimum 8 needed for performance.
Further messages of this type will be suppressed.
To see less of these warnings, enable &#39;RelaxKPCWarningCheck&#39; in john.conf
2g 0:00:00:07 DONE (2023-05-17 23:03) 0.2600g/s 1157p/s 1159c/s 1159C/s 999991901..999991900
Use the &quot;--show&quot; option to display all of the cracked passwords reliably
Session completed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看破解信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./john --show /etc/shadow

显示：
root:root::0:99999:7:::
user:root:19016:0:99999:7:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内存不多时设置此命令，取值在1-3之间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./john --save-memory=2 /etc/shadow

显示：
Further messages of this type will be suppressed.
To see less of these warnings, enable &#39;RelaxKPCWarningCheck&#39; in john.conf
Proceeding with wordlist:./password.lst, rules:Wordlist
123456           (lin)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建两个测试用户：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useradd test02
passwd root8888666

useradd test03
passwd root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 /etc/shadow 的内容放到 /test/1.txt</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tail -10 /etc/shadow &gt; test/1.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1.txt内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>avahi:!!:19016::::::
postfix:!!:19016::::::
ntp:!!:19016::::::
tcpdump:!!:19016::::::
user:$6$UMzRShbnkRKNAloJ$7q8EsAgaFZz8ynqze5Lr7AbwdumehfAsTxe3AtWNwrZ0YejgF2UZ5z0DJp83MydBqWO7Ax4s1zBqaG.S3VD7W1:19016:0:99999:7:::
lin:$6$6.8b/3uK$nRgFkcXPJ.fsj1OVBeApqs1b3WfnQh/afDZQshR4.T9itg69txQ/5jjsofvwp1S3XY4Qrk62FuwmvYLUAgT9p0:19029:0:99999:7:::
mysql:!!:19410::::::
zhangsan01:$6$/zF3Zggp$ZIf2MaWGyfLt8NspofuQ.ekgn0NdLxDUhRG4vjGXfF/a4TuPVvv5f65zeuJiL1cpYSUNTafatuq6.gfwCPfO61:19411:0:99999:7:::
test02:$6$po7KvFaD$9dg1JueKh7/hUVq9KnXHOqSrz9gUUU1cKe5Xb17////xs1OvRy7ZP.l0i0bF1GhLbQTw6JEyUMCch4UJZFrtb/:19494:0:99999:7:::
test03:$6$4ieW.gA6$rYBZnRbC3c67vlgl4.9gj2iO8QrKoxgTg5J8j7x7dBFVaqhFItiZemxCqLZV3suZFhZn3nNKz2Wgfs6sCbHfa/:19494:0:99999:7:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在默认密码字典添加数据 然后运行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./john-1.9.0-jumbo-1/run/john --wordlist=john-1.9.0-jumbo-1/run/password.lst  test/1.txt 

终端：
Warning: OpenMP is disabled; a non-OpenMP build may be faster
Press &#39;q&#39; or Ctrl-C to abort, almost any other key for status
root             (test03)
root8888666      (test02)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="私接" tabindex="-1"><a class="header-anchor" href="#私接" aria-hidden="true">#</a> 私接：</h3><p>系统不存在的资产属于私接</p><h3 id="仿冒" tabindex="-1"><a class="header-anchor" href="#仿冒" aria-hidden="true">#</a> 仿冒：</h3><p>系统中已经存在，并且不是私接资产，如果再次扫描发现指纹信息有变更，属于仿冒。</p><h3 id="指纹信息" tabindex="-1"><a class="header-anchor" href="#指纹信息" aria-hidden="true">#</a> 指纹信息：</h3><p>资产类型、操作系统、mac地址、资产厂商</p><h2 id="资产扫描工具-masscan" tabindex="-1"><a class="header-anchor" href="#资产扫描工具-masscan" aria-hidden="true">#</a> 资产扫描工具 Masscan</h2><p>masscan是一个 Internet 规模的端口扫描器，可用于 Internet 或内部网络的大规模调查。</p><h3 id="masscan安装" tabindex="-1"><a class="header-anchor" href="#masscan安装" aria-hidden="true">#</a> Masscan安装</h3><p>环境：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum update
yum -y install gcc gcc-c++
yum -y install gcc automake autoconf libtool make
yum -y install git
yum -y install flex 
yum -y install bison
yum -y install wget
yum -y install byacc
yum -y install clang
yum -y install libpcap-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/robertdavidgraham/masscan

cd masscan

make

make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不成功</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir /opt/libpcap

cd /opt/libpcap

wget -c http://www.tcpdump.org/release/libpcap-1.5.3.tar.gz

tar zxf libpcap-1.0.0.tar.gz

cd libpcap-1.5.3

./configure

make

make install

没有生效解决办法：
将libpcap.so.1所在的目录添加到文件/etc/ld.so.conf中
vim /etc/ld.so.conf  
添加一行： /usr/local/lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数" aria-hidden="true">#</a> 常用参数：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>masscan -p80 192.168.0.1/24 --open-only -------扫描所有专用网络以查找 Web 服务器，并打印找到的所有开放端口。

masscan 0.0.0.0/0 --excludefile no-dod.txt -pU:53 --banners --output-filename dns.xml ----扫描整个 Internet 以查找 DNS 服务器，获取它们的版本，然后将结果保存在 XML 文件中。（--excludefile no-dod.txt 表示不扫描该文件中的IP）

--top-port 100：扫描100个常⻅端⼝
--adapter-ip：指定发包的ip地址
-S：欺骗源IP
-v interface : 详细输出
-vv interface : 使⽤⾮常冗⻓的输出
-e interface : 使⽤指定的接⼝
--adapter-port : 指定发包源端⼝
--adapter-mac : 指定发包的源MAC地址
--router-mac : 指定⽹关MAC地址
--exclude : IP地址范围⿊名单，防⽌masscan扫描
--excludefile : 指定IP地址范围⿊名单⽂件
--includefile,-iL : 读取⼀个范围列表进⾏扫描
--wait : 指定发包后的等待时间

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="masscan使用" tabindex="-1"><a class="header-anchor" href="#masscan使用" aria-hidden="true">#</a> masscan使用</h4><p>默认情况下，masscan扫描速度为每秒100个数据包，进⾏⼤规模扫描的过程中，这个速度是⾮常慢的。 所以在很多时候可以通过 --rate来执⾏相关速率。 --rate=1000 将以每秒1k包的速率进⾏扫描。</p><p>tips:</p><p>当用户按下ctrl-c时，扫描将停止，扫描的当前状态将保存在文件“paused.conf”中,该文件在当前目录下。可以使用 --resume选项恢复扫描：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>masscan --resume paused.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>保存扫描结果到指定文件中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-oX filename ：输出到filename的XML。
-oG filename ：输出到filename在的grepable格式。
-oJ filename ：输出到filename在JSON格式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单端口扫描(C段)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>masscan 192.168.200.160/24 -p 80 --rate=1000 -oJ result.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>多端口扫描</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>masscan 192.168.200.160/24 -p 1-65535 --rate=1000 -oJ result.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对特定目标进行排除</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--excludefile 指定IP地址范围⿊名单⽂件

masscan 192.168.200.160/24 -p 1-65535 --rate=1000 --excludefile 1.txt -oJ result.json

--exclude 扫描过程中排除指定ip，防⽌masscan扫描

masscan 192.168.200.160/24 -p 1-65535 --rate=1000 --exclude 192.168.200.135 -oJ result.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fping" tabindex="-1"><a class="header-anchor" href="#fping" aria-hidden="true">#</a> fping</h2><p>fping 是一个向网络主机发送 ICMP 回显探测的程序，类似于 ping，但在对多台主机执行 ping 时性能要好得多.</p><h4 id="fping-的优点" tabindex="-1"><a class="header-anchor" href="#fping-的优点" aria-hidden="true">#</a> fping 的优点：</h4><ol><li>可以一次ping多个主机</li><li>可以从主机列表文件ping</li><li>结果清晰 便于脚本处理</li><li>速度快</li></ol><h4 id="fping-安装" tabindex="-1"><a class="header-anchor" href="#fping-安装" aria-hidden="true">#</a> fping 安装</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、创建安装目录

mkdir -p /usr/local/fping &amp;&amp; cd /usr/local/fping

2、下载 fping3.15 安装包

wget http://fping.org/dist/fping-3.15.tar.gz

3、解压安装包

tar -zxvf fping-3.15.tar.gz &amp;&amp; cd fping-3.15

4、编译安装

./configure --prefix=/usr/local/fping &amp;&amp; make &amp;&amp; make install

5、配置环境变量，并使其生效

sed -i &#39;1i\\export PATH=$PATH:/usr/local/fping/sbin&#39; /etc/profile &amp;&amp; source /etc/profile

6、配置环境变量永久生效

echo &quot;export PATH=$PATH:/usr/local/fping/sbin&quot; &gt;&gt; /etc/bashrc

7、测试成功与否

fping -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用参数-1" tabindex="-1"><a class="header-anchor" href="#常用参数-1" aria-hidden="true">#</a> 常用参数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-a	显示存活的(alive)
-g	指定一个范围(group)
-u	显示不存活的(unreacheable)
-s 显示统计
-r 1 设置重试次数
-c ping每个目标的次数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检测 192.168.206.1到192.168.206.140之间的主机是否存在：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fping -a -g -r 1 192.168.206.1 192.168.206.140
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>终端显示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.206.1
192.168.206.2
192.168.206.135
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.3
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.4
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.5
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.6
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.7
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.8
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.9
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.10
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检测某个网段IP的主机是否存在：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fping -a -g 192.168.206.1/24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>终端显示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.206.1
192.168.206.2
192.168.206.135
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.3
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.4
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.5
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.6
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.7
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.8
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.9
ICMP Host Unreachable from 192.168.206.135 for ICMP Echo sent to 192.168.206.10
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时ping俩个IP10次:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fping 192.168.206.135 192.168.201.2 -c 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>终端显示:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.206.135 : [0], 64 bytes, 0.041 ms (0.041 avg, 0% loss)
192.168.206.135 : [1], 64 bytes, 0.077 ms (0.059 avg, 0% loss)
192.168.201.2   : [0], timed out (NaN avg, 100% loss)
192.168.206.135 : [2], 64 bytes, 0.051 ms (0.056 avg, 0% loss)
192.168.201.2   : [1], timed out (NaN avg, 100% loss)
192.168.206.135 : [3], 64 bytes, 0.040 ms (0.052 avg, 0% loss)
192.168.201.2   : [2], timed out (NaN avg, 100% loss)
192.168.206.135 : [4], 64 bytes, 0.041 ms (0.050 avg, 0% loss)
192.168.201.2   : [3], timed out (NaN avg, 100% loss)
192.168.206.135 : [5], 64 bytes, 0.053 ms (0.050 avg, 0% loss)
192.168.201.2   : [4], timed out (NaN avg, 100% loss)
192.168.206.135 : [6], 64 bytes, 0.044 ms (0.049 avg, 0% loss)
192.168.201.2   : [5], timed out (NaN avg, 100% loss)
192.168.206.135 : [7], 64 bytes, 0.041 ms (0.048 avg, 0% loss)
192.168.201.2   : [6], timed out (NaN avg, 100% loss)
192.168.206.135 : [8], 64 bytes, 0.875 ms (0.140 avg, 0% loss)
192.168.201.2   : [7], timed out (NaN avg, 100% loss)
192.168.206.135 : [9], 64 bytes, 0.053 ms (0.132 avg, 0% loss)
192.168.201.2   : [8], timed out (NaN avg, 100% loss)
192.168.201.2   : [9], timed out (NaN avg, 100% loss)

192.168.206.135 : xmt/rcv/%loss = 10/10/0%, min/avg/max = 0.040/0.132/0.875
192.168.201.2   : xmt/rcv/%loss = 10/0/100%

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ping只显示结果不显示过程:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fping -A -u -c 10 192.168.206.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>终端显示:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.206.1 : xmt/rcv/%loss = 10/10/0%, min/avg/max = 0.505/1.09/2.40
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,141),y=[x];function P(_,C){return u(),m("div",null,y)}const w=v(f,[["render",P],["__file","work04.html.vue"]]);export{w as default};
