  cd ../
  cd HW_10
  git init

 Здесь я создаю .gitignore файл, в котором:
  *.sass
  /bin
  /admin
  /config
  readme.txt

  git add .
  git commit -m 'Added gitignore file'
  git branch newBranch
  git checkout newBranch

 Здесь я создаю папку blog с файлами: index.js, index.html

  git add .
  git commit -m 'Added folder blog on branch newBranch'
  git checkout master
  git remote add origin https://github.com/MaximGrekk/front-end_FromItProger_HW_10.git
  git push -u origin master
