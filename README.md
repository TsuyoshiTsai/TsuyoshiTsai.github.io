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
1. `git co master`, `git pull`, update latest published version of master branch from remote
2. `git co hexo`
3. Add or Update post
4. `hexo g -d`, deploy post, it will clear all files on GitHub, then publish files that just generated
5. `git co master`
6. `git pull --allow-unrelated-histories`, force update latest published version from step4
7. Resolve conflict and commit
8. `git push`, update remote master for holding up project and recruit directory on GitHub
9. `git co hexo`, checkout hexo branch for next post


# Todo for resetting
- `git clone https://github.com/TsuyoshiTsai/TsuyoshiTsai.github.io.git`
- `npm install hexo`
- `npm install`
- `npm install hexo-deployer-git --save`
- `npm install hexo-generator-feed --save`
- `npm install hexo-generator-searchdb --save`