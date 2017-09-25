# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Slack bot lab - install guide

## Installing and Configuring Everything

In order to get our bots up and running, we need to perform a number of installations, so make sure you follow these steps carefully. 
Your instructor should provide you with a Hubot and an API token; be sure to have those ready because you'll need both in order to complete many of these steps.

1. First, you'll need to [sign up for a free Heroku account](http://heroku.com).

2. Next, [download and install the Heroku toolbelt](https://toolbelt.heroku.com/). This set of tools allows us to talk to Heroku's servers using the command line.

    Then, open a terminal window, and type the following commands, in order:

3. **Create your hubot directory:**

     Navigate to the parent directory in which you want to create the folder that will contain your app code. This should be the parent directory whose subfolders contain your existing clones of the repos for this course -- for instance, in the folder structure shown below, you would navigate to the `JSD` folder:

        JSD
            L JS-SF-8-homework (existing: clone of GitHub homework repo Borgaard / JS-SF-8-homework)
            L JS-SF-8-resources (existing: clone of GitHub resources repo svodnik / JS-SF-8-resources)
            L username.github.io (existing: clone of your personal github.io repo)
            L myhubot (new repo you are about to create for your Slack bot code) 

    Then execute the following command to create a new folder named `myhubot`:

     `$ mkdir myhubot`

4. **Move into that new directory:**

    `$ cd myhubot`

5. **Install Hubot and its dependencies (CoffeeScript, Yeoman, and the Hubot generator):**

    `$ npm install -g hubot coffee-script yo generator-hubot`

6. **Using Yeoman, generate a Hubot bot:**

    `$ yo hubot --adapter="slack"`

    This will prompt you to answer a few questions about your bot:

    * Owner: `hit enter`
    * Bot Name: `Give the bot a name`
    * Description: `Optional Description`

    >Note: the `--adapter="slack"` option in the `yo` command above is a workaround for a dependency-related bug in `generator-hubot` causing the program to crash when it prompts the user for what adapter they want to use. If you specify the adapter on the command line as above, the broken prompting code will be skipped. (This is all documented in [this issue](https://github.com/github/generator-hubot/issues/64) in the `generator-hubot` repo.)

7. **Install hubot-slack dependency and save it to your package.json:**

    `npm install hubot-slack --save`

8. **Remove the `hubot-scripts.json` file**

    In Finder, navigate to the folder for your hubot, locate the `hubot-scripts.json` file, then move it to the trash. This file is no longer supported, and its presence could generate errors later on.

    Now we need to push up our bot to Heroku.

9. **Initialize your local repository:**

    `$ git init`

10. **Add all of your new files:**

    `$ git add .`

11. **Commit your new files:**

    `$ git commit -m "Initial Commit"`

12. **Create a new app on Heroku:**

    `$ heroku login`

    then enter the email and password you used when setting up your Heroku account.

    You should see a confirmation that you are logged in, showing your email address.

    `$ heroku create myhubotapp`

    where `myhubotapp` is a unique app name; any app name already used by a heroku user will fail with "Name is already taken." 
    If this happens, just repeat the command with a different app name. (The more unusual the name, the more likely it is to be unique.)

13. **Add the following configs for Slack:**

    `$ heroku config:add HEROKU_URL=https://myhubotapp.herokuapp.com`

    where `myhubotapp` is the app name you created and used in the previous 2 steps

    `$ heroku config:add HUBOT_SLACK_TOKEN=YourTokenGoesHere`

    where `YourTokenGoesHere` is the API token provided by the instructor

14. **Push all your code up to Heroku**

    `$ git push heroku master`

    NOTE: If you get an error message that your build has failed, complete the following:

* In your `hubot` folder, open the `package.json` file in your editor.

* Near the bottom of the document, locate the line starting with `"node"` and change the numeric value after it to `"6.9.x"`.

* Save your changes, then at the command line, in your `myhubot` folder, issue the following commands:
    * `git add .`
    * `git commit -m "updated node version"`
    * `git push heroku master`
* Assuming you do not receive an error, proceed to the next step.

15. **Turn on your bot**

    `$ heroku ps:scale web:1`

16. **Test your bot locally to make sure it's working:**

    `./bin/hubot`

    You'll receive a number of messages, including some warnings, which should not be a problem. When the messages stop, press Enter.
    
    You should have a prompt containing your bot name. 
    
    Press `control` + `C` when you're done, to return to the shell prompt.