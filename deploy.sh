clear
printf "\n\n**************** DEPLOYING PROJECT ****************\n"

printf "\n ~ Building the project\n\n"
yarn build

git add dist -f
git commit -m "New Deploy"

printf "\n\n ~ Pushing to Github\n\n"

git subtree push --prefix dist origin gh-pages

printf "\n\n ~ Deploy completed!\n\n"