echo 'The following commands set up credentials then builds the react app in production'
echo 'then deploys it to gh-pages as described in the package.json'
set -x
git config --global user.email 'ci@jenkins.com' && git config --global user.name 'ci-auto'
git config --global credential.helper '/bin/bash ${WORKSPACE}/ops/credentials-helper.sh'
gh-pages --dotfiles --message '[skip ci] Updates' --dist docs/build/html
npm run deploy
set +x
