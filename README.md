# My cypress Automation

> Note:
> The first step of to start this project is ensure that you have some tools to execute.

> *node:* if you don't have node installed in your computer, you need to install using google, please install the last version of the node to have the last update without bugs.

## First Steps
To check if you already installed the node:
1) Open the cmd or Git Bash
2) Insert the command: 
```bash
node -v
```
3) Create a new file 
```bash
mkdir name-of-the-project
cd name-of-the-project
```
4) To start need to init the npm inside the project to show the file 'node_modules'
```bash
npm init
```
5) To work with cypress you need to install the cypress too inside the project
```bash
npm install cypress --save-dev
```
*Result*: The project most to contain the file: node_modules, package-lock.json and package.json
6) Now just open the cypress and start the tests using cypress
```bash
npx cypress open
```

##Github Commands

1) Sign in or create a git account 
2) Create a new Repository: name could be necerry the same name of the project in my computer, but usually use the same name to know
3) Insert the git inside of the project
```bash
git init
```
*Result*: Show that you are using the branch 'Master' and shows a file hiden .git in your project
4) Now need to link the project in you machine to your github account
```bash
git remote add origin ...link-git...
```
5) Its recommend to use the branch 'Main'
```bash
git branch -M main
```
6) Before to push you need to save and commit the project
```bash
git add .
```
e para commit
```bash
git commit -m "Message"
```
7) At last need to push all files in your machine to your github account
```bash
git push -u origin main
```
8) Updates to commit
```bash
git status
git add .
git commit -m "Message"
git push
```
9) Git ignore to ignore some files to push
    - Need to create a new file .gitignore
    - Put the name of the files that want to ignore 
    - Remove the files that already was pushed before
    - Back to the Updates commit
```bash
git rm  -r --cached ./node_modules/
git rm --cached package-lock.json
```
10) Using ready projects
    - Go to the repository of the project and fork
    - In your git bash create new file to save
    - Create a new branch ans select this new branch
```bash
git clone ...link repository...
git branch name-branch
git checkout name-branch
```

        
