# 📋 Vulekamali Create


**Vulekamali Create is an open-source tool created to feature events**

## Contributor instructions:

### 🌱 1. Set up local environment
1. Clone the repository by running `git clone git@github.com:vulekamali/create-vulekamali-hackathon.git`.
2. Make sure you have the latest release of [NodeJS](https://nodejs.org/en/) installed.
3. Make sure you have the latest release of [Yarn](https://yarnpkg.com/en/docs/install) installed.
4. Run `yarn` in the root folder of the repository to install all dependancies.

#### Standard React Environment (Gatsby)

This project is using Gatsby.js. You can run the following scripts in root folder:

- `yarn start`: This will open the project on your [localhost:8000](http://localhost:8000/)
- `yarn build`: Builds the production JavaScript file that needs to be added to the existing Vulekamali Create stack.

### 👓 2. Read our documentation
1. Please review the [branches](https://github.com/agis/git-style-guide) and [commits](https://github.com/agis/git-style-guide) sections in the following [documentation](https://github.com/agis/git-style-guide).

### ❤️ 3. Contribute
1. Create a new branch before adding a new feature (skip this step if you are contributing on a specific branch)

### 🚀 3. Make a pull request
1. If you are making a public pull request (i.e. you do not have write access) use the [forking Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow).
2. If you are a project contributor (.e. you have write access) use the [feature branch Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).
3. Make a [pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request) via the [Github](#github) dashboard to the `master` branch.
4. The designated owner of the repository will automatically be tagged in all pull requests via the `docs/CODEOWNERS` file.
5. Once your code has been accepted and merged into `master` [Netlify](#netlify) will automatically deploy the changes to [create.vulekamali.gov.za/](https://create.vulekamali.gov.za/).


#### Note
- This project makes use of **Styled Components** for styling purposes as well as **Material UI** components.
- When adding to the project, please follow the folder and file structure already in place.
- A component has been placed into a new folder containing and `index.jsx` file.
- This project is following the *eslint-config-airbnb* style guide.
