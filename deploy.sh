# 生成靜態檔案
npm run build

# 進入生成的資料夾
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果釋出到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/JasonZheng0917/myWeb.git

cd -