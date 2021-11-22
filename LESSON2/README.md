git config --global user.name “имя”
git config --global user.email “почта”

git config --global core.safecrlf warn
git config --global core.quotepath off
git config --global core.autocrlf input
git config --global init.defaultBranch main

git config --list   # ПРОСМОТРЕТЬ НАСТРОЙКИ

git init            # инициализация репозитория
git add .           # добваить все файлы в track
git commit -m "описание" # сделать коммит

