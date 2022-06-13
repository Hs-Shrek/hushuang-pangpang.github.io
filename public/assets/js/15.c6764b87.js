(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{537:function(t,s,a){"use strict";a.r(s);var v=a(6),r=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"什么是-xss-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-xss-攻击"}},[t._v("#")]),t._v(" 什么是 XSS 攻击？")]),t._v(" "),a("p",[a("code",[t._v("XSS")]),t._v(" 全称是 "),a("code",[t._v("Cross Site Scripting")]),t._v("(即"),a("code",[t._v("跨站脚本")]),t._v(")，为了和 CSS 区分，故叫它"),a("code",[t._v("XSS")]),t._v("。XSS 攻击是指浏览器中执行恶意脚本(无论是跨域还是同域)，从而拿到用户的信息并进行操作。")]),t._v(" "),a("p",[t._v("这些操作一般可以完成下面这些事情:")]),t._v(" "),a("ol",[a("li",[t._v("窃取"),a("code",[t._v("Cookie")]),t._v("。")]),t._v(" "),a("li",[t._v("监听用户行为，比如输入账号密码后直接发送到黑客服务器。")]),t._v(" "),a("li",[t._v("修改 DOM 伪造登录表单。")]),t._v(" "),a("li",[t._v("在页面中生成浮窗广告。")])]),t._v(" "),a("p",[t._v("通常情况，XSS 攻击的实现有三种方式——"),a("strong",[t._v("存储型")]),t._v("、"),a("strong",[t._v("反射型")]),t._v("和"),a("strong",[t._v("文档型")]),t._v("。原理都比较简单，先来一一介绍一下。")]),t._v(" "),a("h3",{attrs:{id:"存储型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储型"}},[t._v("#")]),t._v(" 存储型")]),t._v(" "),a("p",[a("code",[t._v("存储型")]),t._v("，顾名思义就是将恶意脚本存储了起来，确实，存储型的 XSS 将脚本存储到了服务端的数据库，然后在客户端执行这些脚本，从而达到攻击的效果。")]),t._v(" "),a("p",[t._v("常见的场景是留言评论区提交一段脚本代码，如果前后端没有做好转义的工作，那评论内容存到了数据库，在页面渲染过程中"),a("code",[t._v("直接执行")]),t._v(", 相当于执行一段未知逻辑的 JS 代码，是非常恐怖的。这就是存储型的 XSS 攻击。")]),t._v(" "),a("h3",{attrs:{id:"反射型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反射型"}},[t._v("#")]),t._v(" 反射型")]),t._v(" "),a("p",[a("code",[t._v("反射型XSS")]),t._v("指的是恶意脚本作为"),a("strong",[t._v("网络请求的一部分")]),t._v("。")]),t._v(" "),a("p",[t._v("比如我输入:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('http://sanyuan.com?q=<script>alert("你完蛋了")<\/script>\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这样，在服务器端会拿到"),a("code",[t._v("q")]),t._v("参数,然后将内容返回给浏览器端，浏览器将这些内容作为HTML的一部分解析，发现是一个脚本，直接执行，这样就被攻击了。")]),t._v(" "),a("p",[t._v("之所以叫它"),a("code",[t._v("反射型")]),t._v(", 是因为恶意脚本是通过作为网络请求的参数，经过服务器，然后再反射到HTML文档中，执行解析。和"),a("code",[t._v("存储型")]),t._v("不一样的是，服务器并不会存储这些恶意脚本。")]),t._v(" "),a("h3",{attrs:{id:"文档型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档型"}},[t._v("#")]),t._v(" 文档型")]),t._v(" "),a("p",[t._v("文档型的 XSS 攻击并不会经过服务端，而是作为中间人的角色，在数据传输过程劫持到网络数据包，然后"),a("strong",[t._v("修改里面的 html 文档")]),t._v("！")]),t._v(" "),a("p",[t._v("这样的劫持方式包括"),a("code",[t._v("WIFI路由器劫持")]),t._v("或者"),a("code",[t._v("本地恶意软件")]),t._v("等。")]),t._v(" "),a("h2",{attrs:{id:"防范措施"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防范措施"}},[t._v("#")]),t._v(" 防范措施")]),t._v(" "),a("p",[t._v("明白了三种"),a("code",[t._v("XSS")]),t._v("攻击的原理，我们能发现一个共同点: 都是让恶意脚本直接能在浏览器中执行。")]),t._v(" "),a("p",[t._v("那么要防范它，就是要避免这些脚本代码的执行。")]),t._v(" "),a("p",[t._v("为了完成这一点，必须做到"),a("strong",[t._v("一个信念，两个利用")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"一个信念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个信念"}},[t._v("#")]),t._v(" 一个信念")]),t._v(" "),a("p",[t._v("千万不要相信任何用户的输入！")]),t._v(" "),a("p",[t._v("无论是在前端和服务端，都要对用户的输入进行"),a("strong",[t._v("转码")]),t._v("或者"),a("strong",[t._v("过滤")]),t._v("。")]),t._v(" "),a("p",[t._v("如:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你完蛋了'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("转码后变为:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("lt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("#"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("39")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("你完蛋了"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("#"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("39")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("lt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("gt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这样的代码在 html 解析的过程中是无法执行的。")]),t._v(" "),a("p",[t._v("当然也可以利用关键词过滤的方式，将 script 标签给删除。那么现在的内容只剩下:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code")]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"})]),a("p",[t._v("什么也没有了:）")]),t._v(" "),a("h3",{attrs:{id:"利用-csp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用-csp"}},[t._v("#")]),t._v(" 利用 CSP")]),t._v(" "),a("p",[t._v("CSP，即浏览器中的内容安全策略，它的核心思想就是服务器决定浏览器加载哪些资源，具体来说可以完成以下功能:")]),t._v(" "),a("ol",[a("li",[t._v("限制其他域下的资源加载。")]),t._v(" "),a("li",[t._v("禁止向其它域提交数据。")]),t._v(" "),a("li",[t._v("提供上报机制，能帮助我们及时发现 XSS 攻击。")])]),t._v(" "),a("h3",{attrs:{id:"利用-httponly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用-httponly"}},[t._v("#")]),t._v(" 利用 HttpOnly")]),t._v(" "),a("p",[t._v("很多 XSS 攻击脚本都是用来窃取Cookie, 而设置 Cookie 的 HttpOnly 属性后，JavaScript 便无法读取 Cookie 的值。这样也能很好的防范 XSS 攻击。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[a("code",[t._v("XSS")]),t._v(" 攻击是指浏览器中执行恶意脚本, 然后拿到用户的信息进行操作。主要分为"),a("code",[t._v("存储型")]),t._v("、"),a("code",[t._v("反射型")]),t._v("和"),a("code",[t._v("文档型")]),t._v("。防范的措施包括:")]),t._v(" "),a("ul",[a("li",[t._v("一个信念: 不要相信用户的输入，对输入内容转码或者过滤，让其不可执行。")]),t._v(" "),a("li",[t._v("两个利用: 利用 CSP，利用 Cookie 的 HttpOnly 属性。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);