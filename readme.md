All font-size in 'em'
All padding, margin, width, height, gap ... in 'rem'

Font-weight :
extra-bold = 800
bold = 700
semibold = 600
medium = 500
regular = 400

Remove folder or file from git cache and following : git rm --cached file

npm run setup : Script to install all dependencies from root, client and api
npm run all : Script that lauch front and back server at same time
"scripts": {
    "setup": "npm i && npm --prefix ./client i && npm --prefix ./api i",
    "all": "concurrently \"cd client && npm run dev\" \"cd api && npm run dev\"",
    "test": "echo \"Error: no test specified\" && exit 1"
},