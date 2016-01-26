# VISUAL REGRESION TESTING STARTER KIT

A Starter Kit to test for visual regressions. Contains tools to gather target links, capture screenshots from target links and perform image diff-ing

## What does it do?

Visual Regression Starter Kit is a script that consists of different tools to do everything you need to perfom visual regression testing. `main.js` file is setup in a way that you only need to adjust the config files to be able to get started with it. Here is a list of tools included and the configuration you need to make:

### get-selector-attribute-data

Given a starting url (say "http://google.com") the script can fetch the target attribute value (say 'href') for given selector (like 'a') and returns the collected results in a desired.json file. With this script you can collect the links to the url's that you want to perform visual regression testing on. Uses PhantomJS to capture screenshots.

### capture-responsive-screenshots

Once you have captured the target url's that you would like to visit, you can use this script to capture screenshots from these pages to be later used in the visual regression testing. Uses PhantomJS to capture screenshots.

### check-visual-regressions

When you have the screenshots saved, you can use these files as a baseline to compare against other files that are saved into a different folder with the same name.

## TO DO

- Provide more information about the configuration settings.