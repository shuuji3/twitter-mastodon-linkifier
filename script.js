const config = document.getElementById("twitter-mastodon-linkifier-settings");
const data = JSON.parse(config.innerText);

const USERNAME_PATTERNS = [
  `[data-testid="UserCell"] a[role="link"] > div > div[dir="auto"] > span`, // user panel
  `[data-testid="UserName"] div[dir="auto"] > span`, // username of profile
  `[data-testid="User-Names"] div[dir="auto"] > span`, // username of tweet in timeline
]

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
    link.style.color = '#3a3bff'
    link.style.fontWeight = 800
    link.style.fontSize = 'inherit'
    link.style.textDecoration = 'none'
    link.addEventListener('click', e => {
      e.preventDefault()
      window.open(url, '_blank').focus()
    })

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
