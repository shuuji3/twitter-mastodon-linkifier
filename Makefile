@PHONY: build changelog

build: changelog
	zx build.mjs

changelog:
	npx conventional-changelog-cli -p angular -i CHANGELOG.md -s -r 0
