Check if Node.js is installed with "node -v".
In order to run the test, install the Playwright package into the Nowina Solutions folder. Run the following in the Terminal: "npm init playwright@latest".
Choose "JavaScript" and the "tests" folder during the installation.
Move the "validateSignature.spec.js" file to the "tests" folder.
Run "npx playwright test ./tests/validateSignature.spec.js --headed" to execute the test in headed mode.
The test should pass.
