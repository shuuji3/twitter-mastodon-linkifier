function saveOptions() {
  const linkTextColor = document.getElementById("link-text-color").value;
  chrome.storage.local.set(
    {
      linkTextColor,
    },
    function () {
      const status = document.getElementById("status");
      status.style.display = "block";
      setTimeout(function () {
        status.style.display = "none";
      }, 5000);
    }
  );
}

function restoreOptions() {
  chrome.storage.local.get(
    {
      linkTextColor: 'rgb(99, 100, 255)',
    },
    function (items) {
      document.getElementById("link-text-color").value = items.linkTextColor;
      updateColorPreview()
    }
  );
}

function updateColorPreview() {
  const colorPreview = document.getElementById("color-preview")
  const color = document.getElementById("link-text-color").value
  colorPreview.style.backgroundColor = color;
}

function setLinkTextColor(color) {
  document.getElementById("link-text-color").value = color
  updateColorPreview()
}

document.addEventListener("DOMContentLoaded", function () {
  restoreOptions();
  document.getElementById("link-text-color").addEventListener("input", updateColorPreview);
  document.getElementById("save").addEventListener("click", saveOptions);
  [...document.getElementsByClassName('color-pallet-color')].forEach(el => {
    el.addEventListener('click', event => setLinkTextColor(event.target.style.backgroundColor))
  })
});
