# Project Evaluation

See below for my project evaluation. Feel free to hit me up via Slack or GitHub with additional questions and comments!

## Project Workflow

> Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

**Exceeds Expectations:** Props on creating a very informative readme. Developers can learn a lot about an application and the process that went into building it from this. One thing that I encourage students to add to their readmes is installation instructions, even if they're super simple (i.e., "Clone this repo and `open index.html` in the terminal").

If you want to step up your readme game, familiarize yourself with Markdown formatting. You gave it a shot here, but I think you need to tweak your headers a little bit (hint-hint: `##`).

## Technical Requirements

> Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?  

**Meets Expectations:** Good job meeting the technical requirements for this project. The next step for you here is to make your concentration game more dynamic (i.e., not hardcode everything into `index.html`). This will require defining some additional functionality in your Javascript -- take a look at my [inline code comments](https://github.com/aklein916/project1/pull/1) for more on this (and other refactoring opportunities).

## Code Quality

> Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?  

**Meets Expectations:** Good job keeping your code concise and readable. Your code comments were helpful in explaining blocks of code whose purpose wasn't immediately apparent.

Make sure to take a look at the inline code comments I made in this [pull request](https://github.com/aklein916/project1/pull/1).

## In Response To Your Questions...

These are my responses to the questions you left in your project submission. Let me know if I can elaborate or if you have any follow-up questions on the below.

#### Shuffling Cards on the Screen

Mentioned this in my [inline code comments](https://github.com/aklein916/project1/pull/1), but once you have the cards shuffled you then need to append them to the DOM. This will require iterating through the shuffled array (which you already have in your code) and creating/appending card `<div>`s using the shuffled letters (you learned about this stuff in the DOM manipulation lesson). Let me know if you would like some help on this.

#### Ending The Game

What exactly does it mean for the game to end? Is it when all the tiles are a certain color or contain certain text? If either of those is the case, you would need to select all the tiles, iterate through them and check for a particular condition. That's just one example -- what constitutes the end of a game is up to you!

#### Anonymous Functions vs. Named Functions

If you find that you're repeating a lot of code in your anonymous functions, definitely consider how you can keep your code D.R.Y. using named functions. That being said, they are not required to implement additional functionality (e.g., being able to end the game).
