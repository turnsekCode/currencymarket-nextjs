import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <Script id="livechat" strategy="afterInteractive">
          {`window.__lc = window.__lc || {};
    window.__lc.license = 13285770;
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))`}
        </Script>
        <noscript>
          <a
            href="https://www.livechatinc.com/chat-with/13285770/"
            rel="nofollow"
          >
            Chat with us
          </a>
          , powered by
          <a
            href="https://www.livechatinc.com/?welcome"
            rel="noopener nofollow noreferrer"
            target="_blank"
          >
            LiveChat
          </a>
        </noscript>
        <link rel="icon" href="../../assets/favicon.png" />
        <link
          rel="stylesheet preload prefetch"
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          as="style"
        ></link>
        <noscript>
          <link
            rel="stylesheet"
            href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
