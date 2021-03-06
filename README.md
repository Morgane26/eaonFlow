# Eaon Flow

Hackaviz 2021 - Energy & Environment

## Configuration

1 - Clone the project on your own computer
```bash
$ git clone <git@github.com:Morgane26/eaonFlow.git>
```

2 - You should know have a complete .env file. Install the dependencies:
```bash
$ yarn install
```
Now, you can start the project:
```bash
$ yarn start
```
## Goods practices

1 - Git Branching

When cloning a repository, you’re by default on a branch, master.

One rule: one feature == one branch.

For listing local branches :
```bash
$ git branch
```

2 - For working on a new branch :
```bash
$ git checkout -b name-of-the-feature
``` 

3 - For pushing your branch to Github :
```bash
$ git add .
$ git commit -m "the think that you change with your branch"
$ git push origin name-of-the-feature
```

DO NOT commit to master

4 - Then, creating a Pull Request on Github.
As soon as you push a new branch, a pull request button appears on your GitHub repository page.

Just click on this button, and add clear title and description.
Then put me as a reviewer :)

5 - When a Pull Request is merged, a new commit is created on master.

You need to fetch it on your local repository.

Be very careful
First, you need a CLEAN git status.
```bash
$ git status
```
6 - Get the latest master :

```bash
$ git checkout master
$ git pull origin master
```

7 - Create a new branch :)

# 2 rules #
Never commit directly to master. Use feature branches.
Always make sure git status is clean before pull, checkout or merge.

