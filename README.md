# Commands
https://hexo.io/docs/commands.html
- new: `hexo new [layout] <title>`
  - layout: post, page, draft
  - title: string with quotation marks ('')
- publish(for draft): `hexo publish [layout] <filename>`
- generate: `hexo g`
- server: `hexo s`
- deploy: `hexo d` ( `-g` )
- clean: `hexo clean`

# Todo for new Post
- `git co master`, `git pull`, get latest content of master branch from remote
- `git co hexo`, and add or update post
- `hexo g -d`, deploy post
- `git co master`, `git pull`, `git push`, to hold up project/ directory on GitHub
- `git co hexo`, checkout hexo branch for next post

# Todo for resetting
- `git clone https://github.com/TsuyoshiTsai/TsuyoshiTsai.github.io.git`
- `npm install hexo`
- `npm install`
- `npm install hexo-deployer-git --save`
- `npm install hexo-generator-feed --save`
- `npm install hexo-generator-searchdb --save`