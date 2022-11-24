#!/usr/bin/env zx

const targetFiles = [
  'script.js',
  'README.md',
  'manifest.v2.json',
  'manifest.json',
  'LICENSE',
  'CHANGELOG.md',
  'content.js',
  'options/',
  'assets/',
]

const version = await $`git describe --tags | tr -d '\n'`;
for (const browser of ['chrome', 'firefox']) {
  // Prepare archived files.
  const directory = `twitter-mastodon-linkifier-${version}-${browser}`;
  fs.removeSync(`dist/${directory}`);
  fs.mkdirpSync(`dist/${directory}`);

  targetFiles.forEach(targetFile => {
    fs.copySync(targetFile, `dist/${directory}/${targetFile}`, {overwrite: true});
  })

  // Use manifest v2 only for Firefox.
  if (browser === 'firefox') {
    fs.copySync(`dist/${directory}/manifest.v2.json`, `dist/${directory}/manifest.json`);
    fs.removeSync(`dist/${directory}/manifest.v2.json`);
  }

  // Create zip archive.
  fs.removeSync(`dist/${directory}.zip`);
  cd(`dist/${directory}`)
  await $`zip -rqD ../${directory}.zip *`
  cd('../../')
}
