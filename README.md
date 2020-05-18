# Resume Web Application
A web application that showcases details about myself, work experience, and (course) projects -- a web application version of my current resume.

## Development
- Clone the repository: `git clone https://github.com/smrchung/resume.git`
- Once in the directory, install npm: `npm install`
- To start up the web application, run: `npm run start`
- A web browser (Google Chrome recommended) should open up at `http://localhost:3000/`

## Deployment
- (Install Github pages: `npm install gh-pages --save-dev`)
- (Include homepage in `package.json`: `"homepage": "http://smrchung.github.io/resume"`)
- (Include predeploy and deploy scripts: `"predeploy": "npm run build",` and `"deploy": "gh-pages -d build"`)
- Add and commit changes made: `git add .` and `git commit -m <message>`
- Deploy changes: `npm run deploy`
- Push the changes: `git push`
- If you get errors, usually removing `"browserslist"` from `package.json` and deploying again helps
- If you get errors regarding ReactDOM, [this](https://stackoverflow.com/questions/52013636/module-not-found-error-cant-resolve-reactdom) helps

## Built With
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/en/)
* [Material UI](https://material-ui.com/)
* [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component)
* [React Skills Bar](https://www.npmjs.com/package/react-skills-bars)
* Particles.js [1](https://github.com/Wufe/react-particles-js) [2](https://github.com/VincentGarreau/particles.js/)
* [React Emoji](https://www.npmjs.com/package/a11y-react-emoji)

## Author
* [Semira Chung](https://github.com/smrchung)
