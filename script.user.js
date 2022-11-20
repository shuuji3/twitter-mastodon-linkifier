// ==UserScript==
// @name         Twitter Mastodon Linkifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Linkify Mastodon username on twitter.com
// @author       TAKAHASHI Shuuji <shuuji3@gmail.com>
// @match        https://*.twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function main() {

        const selectors = [
            'main .css-1dbjc4n.r-6gpygo.r-14gqq1x > .css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l > .css-1dbjc4n.r-1wbh5a2.r-dnmrzs.r-1ny4l3l span',
            'span.css-901oao.css-16my406.css-1hf3ou5.r-poiln3.r-bcqeeo.r-qvutc0',
        ]
        selectors.forEach(selector => {
            [...document.querySelectorAll(selector)].forEach(dom => linkify(dom))
        })
    }

    function linkify(dom) {
        const [isValid, mastodonUsername, mastodonDomain] = /@?(\w+)@([\w.]+)/.exec(dom.textContent) || [false, null, null]

        if (isValid) {
            const url = `https://${mastodonDomain}/@${mastodonUsername}`
            const link = document.querySelector('a')
            link.href = url
            link.target = '_blank'
            link.textContent = `${dom.textContent}🐘`
            link.style = 'color: rgb(29, 155, 240); font-weight: 800; font-size: inherit;'
            link.addEventListener('click', e => {
                e.preventDefault()
                window.open(url, '_blank').focus()
            })
            dom.display = 'none'
            dom.replaceWith(link)
        }
    }

    setTimeout(main, 5000)
})();
