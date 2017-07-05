#Supporting Information
##Before you begin
Confirm that you have created a Pull request for Class 10's work, and merged to the Master branch.

##Pair Programming Basics
In pair programming there are two developers working on a single body of code on a single computer. One member of the pair is the driver, and this person will be the one doing all of the typing actual work on the laptop. The other member of the pair is the navigator, and this person will work with only their voice and their thoughts. The navigator does not touch the keyboard, nor does the navigator work on their laptop "on the side." The navigator is fully engaged with the work that the pair is doing, using at most a piece of scratch paper to sketch diagrams, take notes, or list ideas. Again, the navigator does not touch the keyboard, nor does the navigator work on their laptop "on the side."

###General Workflow for this Assignment
Your pair will extend and refine each other's games today. The person whose game is currently being worked on will be in the navigator role, and the other person will be the driver. Once starting work in lab, plan to spend an hour or two on one person's game, and then swap roles.

###How To Get Code Ready For Work
**Be sure to follow these instructions VERY carefully.**

1. Decide whose code you will work on first. The owner of that code (who will be the navigator) provides the link to their GitHub repo to the other member of the pair (who will be the driver).
2. The driver follows the link to that repo and creates a fork of the repo.
3. The driver then goes to their fork of the repo (the URL should have the driver's GitHub name in it) and copies the HTTPS link to that repo (the link should end in .git).
4. Inside of the driver's main work directory (NOT in their guessing_game/ directory) on their laptop, enter the command `git clone the-https-link-you-copied`. That will create a local version of the forked repo on the driver's laptop.
5. `cd` into that directory and enter `atom .` in the terminal to open all of the files in Atom.
6. Start working on the code!

###Make a Pull Request
1. Once everything is finished, and you have done the last edits and pushed them to GitHub, it's time to send the edited code from the branch you've been working on to Master. We do this with a GitHub feature called a pull request.
2. From the home page of the repository on GitHub, hit the green button that says 'Create pull request'
3. Follow the remaining steps as described onscreen and as shown here: https://help.github.com/articles/using-pull-requests
4. These instructions are deliberately vague, to give you practice in reading through instructions and getting guidance from documentation.
5. Once the Pull Request has been created, you will accept the pull request by merging/closing it. After that, in the terminal on your laptop, while in the game directory, enter the command `git pull origin master` to retrieve the modified code from GitHub.
6. Next create a new branch from Master for today's work.
    git checkout master   (To move to Master Branch)
    git checkout -b class-04
    Extend and Refine
