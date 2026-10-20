// Changes on every build; appended to CSS/JS URLs so browsers fetch fresh files after each deploy.
export default () => Date.now().toString(36);
