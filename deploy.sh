clear
printf "\n\n**************** DEPLOYING PROJECT ****************\n"

printf "\n ~ Building the project\n\n"
yarn build

git add dist -f
git commit -m "New Deploy"

printf "\n\n ~ Pushing to Github Pages\n\n"

git subtree push --prefix dist origin gh-pages

printf "\n Access the page here:\nhttps://ahmed-ramzi.github.io/project-team-vue/"

printf "\n\n ~ Deploy completed!\n"