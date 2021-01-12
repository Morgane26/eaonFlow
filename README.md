# Eaon Flow

Hackaviz 2021 - Energy & Environment

## Configuration

1 - Clone the project on your own computer

$ git clone <github_ssh_clone_url>

Clone with SSH, not HTTPS.

2 - You should know have a complete .env file. Install the dependencies:

$ yarn install

Now, you can start the project:

$ yarn start

## Goods practices

1 - Git Branching

When cloning a repository, you’re by default on a branch, master.

One rule: one feature == one branch.

For listing local branches :

$ git branch

2 - For working on a new branch :

$ git checkout -b name-of-the-feature

3 - For pushing your branch to Github :

$ git add .
$ git commit -m "the think that you change with your branch"
$ git push origin name-of-the-feature

DO NOT commit to master

4 - Then, creating a Pull Request on Github.
As soon as you push a new branch, a pull request button appears on your GitHub repository page.

Just click on this button, and add clear title and description.
Then put me as a reviewer :)

5 - When a Pull Request is merged, a new commit is created on master.

You need to fetch it on your local repository.

Be very careful
First, you need a CLEAN git status.

$ git status

6 - Get the latest master :

$ git checkout master
$ git pull origin master

7 - Create a new branch :)

# 2 rules #
Never commit directly to master. Use feature branches
Always make sure git status is clean before pull, checkout or merge.










### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
