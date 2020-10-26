echo 'The following commands set up credentials then builds the react app in production'
echo 'then deploys it to gh-pages as described in the package.json'
set -x
echo 'is the checkout stage actually pulling to correct stuff?'
npm run deploy
set +x
