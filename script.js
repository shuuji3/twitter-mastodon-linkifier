const USERNAME_PATTERNS = [
  `[data-testid="UserCell"] a[role="link"] > div > div[dir="auto"] > span`, // user panel
  `[data-testid="UserName"] div[dir="auto"] > span`, // username of profile
  `[data-testid="User-Names"] div[dir="auto"] > span`, // username of tweet in timeline
]

// from assets/google-noto-emoji/emoji_u1f418.svg
const ELEPHANT_EMOJI_SVG = `
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 128 128" style="enable-background:new 0 0 128 128;" xml:space="preserve">
<path style="fill:#878787;" d="M38.09,74.55c0.14,1.27-0.99,7.6-1.55,9.71c-0.56,2.11-1.41,6.48-0.56,8.02
	c0.84,1.55,6.9,7.67,9.15,9.78c2.25,2.11,7.88,6.41,10.14,6.69c2.25,0.28,6.05-5.21,5.49-8.31c-0.56-3.1-6.34-9.85-6.34-9.85
	l2.82-5.07l9.71,0.99c0,0-0.28,8.73-0.28,12.53s-1.86,10.8,0.28,12.25c2.39,1.62,9.71,1.2,11.4-0.63c1.69-1.83,0.14-8.94,1.13-12.46
	c0.99-3.52,3.66-9.71,3.66-9.71l8.02-36.74l-4.5-13.94c0,0-0.14-1.83-0.42-3.38c-0.28-1.55-2.39-5.21-2.82-6.05
	s-34.21-5.35-34.21-5.35l-11.97-2.25l-0.05-3.94l-19.52,2.25l-6.85,11.54L8.2,51.75c0,0-2.72,7.6-2.06,9.29s2.63,6.29,5.54,7.23
	c2.91,0.94,8.82,2.06,8.82,2.06l6.85,3.66c0,0,4.21-2.07,7.13-1.5C38.32,73.24,38.09,74.55,38.09,74.55z"/>
<path style="fill:#BEBEBE;" d="M16.74,10.64c-2.96,0.84-8.92,7.13-9.85,11.17S8.25,34.6,7.84,37.24
	c-0.52,3.33-2.46,11.78-2.64,16.38s3.47,7.88,3.47,7.88l3.61-0.75c0,0-0.56-15.81,0.09-18.07c0.66-2.25,2.21-3.52,2.21-3.52
	s-0.7-8.07,2.67-12.58s8.92-7.18,12.67-7.56c3.75-0.38,7.27,0.47,7.27,0.47s0.8-6.15-2.91-8.59C30.07,8.14,18.85,10.04,16.74,10.64z
	"/>
<path style="fill:#BEBEBE;" d="M54.56,65.35c0,0,2.53,3.47,6.19,3.19c3.66-0.28,8.82-4.04,11.45-6.38s9.29-8.73,11.07-11.36
	c1.78-2.63,2.82-5.09,3.19-8.07c0.4-3.17,0.19-4.93,0.19-4.93s3.52,0.92,7.04,4.5c2.61,2.66,5.54,5.61,7.32,13.3
	s2.25,12.08,2.63,12.83c0.38,0.75,2.23,3.07,3.5,4.48c1.7,1.88,3.38,2.82,3.82,2.75c1.22-0.28,2.58-0.28,4.34,0.14
	c1.76,0.42,4.13,3.04,5.42,4.43c1.69,1.83,3.45,3.24,3.45,3.59c0,0.72-5.41,1.21-10.77-0.84c-3.31-1.27-4.65-4.58-4.65-4.58
	s-2.75-1.9-4.43-3.38c-0.9-0.79-2.25-2.11-2.25-2.11s-0.67,2.83-1.41,5.28c-0.84,2.82-1.69,6.19-1.41,9.64s1.83,7.6,3.38,10.84
	s3.1,7.39,1.27,10.35c-1.83,2.96-8.09,7.75-11.4,5.35c-2.04-1.48-3.31-7.18-4.08-10.35c-0.77-3.17-3.52-9.92-3.87-10.7
	c-0.35-0.77-2.25-3.59-2.25-3.59s-5.77,0.35-11.47,0.28s-9.01-0.63-9.01-0.63s-4.29,7.95-5.91,12.53c-1.62,4.58-2.67,11.4-3.73,13.3
	c-1.06,1.9-2.89,5.19-9.85,4.5c-5.7-0.56-6.9-4.15-6.9-4.15s-0.77-3.52,1.34-10.28s4.58-13.37,6.19-18.65
	c0.56-1.84,1.2-4.93,1.2-4.93s-4.08-4.58-4.43-5.07c-0.35-0.49-1.62-1.69-1.62-1.69l-0.18-0.99c0,0,3.58,0.17,7.78-1.13
	C52.1,70.89,54.56,65.35,54.56,65.35z"/>
<path style="fill:#BEBEBE;" d="M47.8,20.02c0,0,3.38-6.01,6.29-6.38s12.37-1.4,17.27,0.38c2.46,0.89,8.47,6.87,10.3,9.92
	c1.77,2.95,4.06,6.87,3.4,11.85C84.41,40.76,83,40.76,83,41.98c0,1.22,0.47,4.13-1.41,6.29c-1.88,2.16-3.94,0.19-5.16,1.69
	S75.58,55.22,73.9,57c-1.69,1.78-5.26,1.6-6.66,2.72c-1.41,1.13-1.78,4.97-5.35,5.73c-3.57,0.75-4.97-2.82-6.01-9.29
	c-1.03-6.48-1.55-17.12-3.19-17.08c-1.68,0.04-1.07,3.25-0.87,7.57c0.21,4.55,1.81,14.02-1.29,18.06s-6.38,5.73-9.76,5.91
	c-3.38,0.19-6.59-2.18-8.09-1.9c-1.5,0.28-0.63,2.1-2.98,4.25c-2.44,2.23-4.32,4.41-5.07,6.29c-0.75,1.88-2.82,5.73-2.72,9.76
	s1.36,5.7,2.96,5.33c1.6-0.38,0.67-4.79,2.11-5.7c1.34-0.84,4.97,1.13,4.88,6.57c-0.09,5.44-5.37,10.04-12.62,7.65
	c-7.67-2.53-8.66-13.87-6.97-19.78s2.44-10.65,2.53-13.94c0.09-3.28-1.34-5.19-1.06-7.53c0.28-2.35,0-2.91,0.09-7.13
	c0.09-4.22-0.38-10.23,0.47-11.73c0.84-1.5,2.25-3.1,2.25-3.1s-0.91-6.69,1.03-10.32c3-5.63,8.82-8.35,15.49-9.01
	C39.73,19.65,47.8,20.02,47.8,20.02z"/>
<ellipse style="fill:#010101;" cx="40.38" cy="50.16" rx="3.34" ry="3.41"/>
<path style="fill:#FAE9AE;" d="M34.38,66.72c0.42-1.92,3.04-4.65,5.02-3.99c1.27,0.42,2.11,3.47,1.69,5.44s-2.21,3.43-4.6,2.67
	C34.1,70.09,34.12,67.93,34.38,66.72z"/>
<path style="fill:#FAE9AE;" d="M3.79,56.58c-0.77,1.71,1.55,4.08,3.1,5.35c1.55,1.27,4.93,3.66,5.91,4.22s1.97,0.8,1.97,0.8
	s-0.89-3.47-0.89-4.5c0-1.03,0.05-3.14,0.05-3.14s-2.96-1.6-4.65-2.16C7.59,56.58,4.44,55.12,3.79,56.58z"/>
</svg>
`

function querySelectorAllIncludingMe(node, selector) {
  if (node.matches(selector)) {
    return [node]
  }
  return [...node.querySelectorAll(selector)]
}

const trackingUsernames = new Set()

function evaluateUsername() {
  for (const usernameComponent of trackingUsernames.values()) {
    linkifyDOM(usernameComponent)
  }
}

function performUsernameFindAndReplace(node) {
  const usernames = USERNAME_PATTERNS.flatMap(
    USERNAME_PATTERN => querySelectorAllIncludingMe(node, USERNAME_PATTERN))
  for (const usernameComponent of usernames) {
    trackingUsernames.add(usernameComponent)
  }
}

function getConfig(key) {
  const config = document.getElementById("twitter-mastodon-linkifier-settings");
  const data = JSON.parse(config.innerText);
  return data[key];
}

function linkifyDOM(dom) {
  const [mastodonDomain, mastodonUsername] = findMastodonHostAndUsername(dom)
  if (mastodonUsername && mastodonDomain) {
    const url = `https://${mastodonDomain}/@${mastodonUsername}`

    const span = document.createElement('span')
    span.className = 'twitter-mastodon-linkifier-username'

    const link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.textContent = `🐘 ${dom.textContent}`
    link.style.color = getConfig('linkTextColor')
    link.style.fontWeight = 800
    link.style.fontSize = 'inherit'
    link.style.textDecoration = 'none'

    span.appendChild(link)
    dom.replaceWith(link)
  }
}

function findMastodonHostAndUsername(dom) {
  const MASTODON_USERNAME_REGEX_LIST = [
    /@?(?<username>\w+)@(?<domain>[\w-.]+)/,
    /(?<domain>[\w-.]+)\/@(?<username>\w+)/,
  ]

  for (const MASTODON_USERNAME_REGEX of MASTODON_USERNAME_REGEX_LIST) {
    const match = MASTODON_USERNAME_REGEX.exec(dom.textContent);
    if (!match) {
      continue
    }
    if (match.groups.username && match.groups.domain) {
      return [match.groups.domain, match.groups.username]
    }
  }

  return [null, null]
}

async function main() {
  const observer = new MutationObserver(function (mutations, observer) {
    try {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes') {
          performUsernameFindAndReplace(mutation.target)
        }
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            performUsernameFindAndReplace(node)
          }
        }
      }

      // garbage collect trackingUsernames
      for (const usernameComponent of trackingUsernames) {
        if (!usernameComponent.isConnected) {
          trackingUsernames.delete(usernameComponent)
        }
      }

      evaluateUsername()
    } catch (error) {
      console.error('uncaught mutation error', error)
    }
  });

  observer.observe(document, {
    childList: true,
    subtree: true,
    attributes: true
  });
}

main();
