.ONESHELL:
ENV_PREFIX=$(shell python -c "if __import__('pathlib').Path('.venv/bin/pip').exists(): print('%s/'% __import__('pathlib').Path('.venv/bin').absolute())")
USING_POETRY=$(shell grep "tool.poetry" pyproject.toml && echo "yes")

.PHONY: help
help:             ## Show the help.
	@echo "Usage: make <target>"
	@echo ""
	@echo "Targets:"
	@fgrep "##" Makefile | fgrep -v fgrep


.PHONY: build
build:            ## Install the project using local enviroment
	@echo "Building Docker image for the DALiuGE Homepage"
	@docker build -t dlg_web . 


.PHONY: start
start:            ## Install the project using local enviroment
	@echo "Building Docker image for the DALiuGE Homepage"
	@docker run -d -p 8080:80 --name dlg_web dlg_web:latest

.PHONY: stop
stop:            ## Install the project using local enviroment
	@echo "Building Docker image for the DALiuGE Homepage"
	@docker stop dlg_web
	@docker rm dlg_web


.PHONY: release
release:          ## Create a new tag for release.
	@echo "WARNING: This operation will create s version tag and push to github"
	@read -p "Version? (provide the next x.y.z semver) : " TAG
	@if ! grep -q "v$${TAG}" CHANGELOG.md; then echo "TAG version number must be added to CHANGELOG.md before committing." && exit; fi
	@echo "v$${TAG}" > VERSION
	@git add VERSION CHANGELOG.md
	@git commit -m "Release: version v$${TAG} 🚀"
	@echo "creating git tag : v$${TAG}"
	@git tag v$${TAG}
	@git push -u origin HEAD --tags


# This Makefile has been based on the existing ICRAR/daliuge-component-template.
# __author__ = 'ICRAR'
# __repo__ = https://github.com/ICRAR/daliuge
# __sponsor__ = https://github.com/sponsors/ICRAR/
