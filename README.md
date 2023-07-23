# flatiron-frontend-phase-1-project
My Flatiron Frontend Phase 1 Project

README
Should include project name, description, installation instructions, brief description of how to use your app, a Contributor's Guide, and a License

Phase 1 Project Guidelines
GitHub RepoCreate New Issue
Learning Goals
Design and architect features across a frontend
Communicate and collaborate in a technical environment
Integrate JavaScript and an external API
Debug issues in small- to medium-sized projects
Build and iterate on a project MVP
Introduction
Welcome to JavaScript Project Mode!

You’ve worked so hard to get here and have learned a ton. Now it's time to bring it all together!

For this project, you're going build a Single Page Application (SPA). Building this application will be challenging because it will integrate everything you've learned up to this point. Your frontend will be built with HTML, CSS, and JavaScript and will communicate with a public API.

A rubric for this project is available on the GitHub submission page in this Canvas module. Make sure to take a look before you get started!

Project Requirements
Your app must be an HTML/CSS/JS frontend that accesses data from a public API or from your own API built using json-server and a db.json file. 
Your API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. 
All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. 
If you do want to use a public API, you can check out this list of public APIsLinks to an external site.. Try to use one that has HTTPs but doesn’t require Auth or CORs. You should see that information listed alongside the API.
Try to avoid using an API that requires a key. APIs that require no authorization will be easiest to use.
Do not use APIs that require a credit card to sign up.
What Happens When Your Secret API Key is Stolen and Used By OthersLinks to an external site. 
A Very Expensive AWS MistakeLinks to an external site. (note: the fix mentioned is in Ruby - a backend language that we will not be learning. You cannot fully hide API keys in a Front End project. For these projects, the fix is to not use a paid API.)
Your entire app must run on a single page. There should be NO redirects or reloads. In other words, your project will contain a single HTML file.
Use at least 2 distinct event listenersLinks to an external site. (2 events of different types) that enable interactivity. 
What this means is that, if you had 2 click events, that would only count as 1 distinct event and you would need to add at least 1 more - a keydown or mouseenter event, for example.  The DOMContentLoaded event does not count toward the total.
Here’s a list of available eventsLinks to an external site., for inspiration. 
Each of your event listeners should also have its own unique callback function. These must be added using JavaScript's .addEventListener() method. 
Events embedded into HTML elements and CSS will not count toward the total. The events must be in your JavaScript file (such as index.js).
Please post a question on Piazza or book a lab help session if you have questions regarding this requirement.
Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Interacting with your API data in some way should present an opportunity to use array iteration.
Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.
Here are some resources we recommend reviewing regarding best practices: Front End GuidelinesLinks to an external site. and Clean Code JavaScriptLinks to an external site.. 
We also expect you to complete the following items prior to turning in your project:
[GITHUB REPOSITORY]: A well-written informative README.md file. This is the business card of your project and you really want it to look great! A template can be found here: makeareadme.comLinks to an external site.. Some additional considerations:
If you used someone else's pictures or material please make sure you give them credit in your README.
If you think your blog post and/or video are really good and would add value, add them to your README.md.
If you want to go above and beyond, record a few seconds of yourself navigating the app and turn it into a gif. Then, add the gif in your README.md. That way anyone can get a sense of how your app works without leaving the README's page on GitHub!
[GITHUB REPOSITORY]: A detailed commit history (30+ commits is your minimum goal). Committing frequently is a fundamental best practice that you want to acquire as soon as possible. One day you will be collaborating on projects and you'll notice the importance of committing even more. Commit messages should be in the present tense, 50 characters or less and they should describe the changes you are committing.
A video walkthrough of your app — MUST be no longer than 3 minutes. In the video try to sound as professional as possible and walk through the functionality you built. A common way to record the video is to open a zoom meeting, share your screen, and then hit "record". Once the recording has been downloaded to your computer, upload it to YouTube Studio as "unlisted". That way only people with the link will be able to watch it. You don't have to share the video with anyone other than your instructors if you don't feel comfortable.
A blog post about this phase of the curriculum. This will serve as one of the four blogs you are required to complete to graduate. Please use these blogging guidelinesLinks to an external site. as you start your first blog.
Stretch Goals
Use json-serverLinks to an external site. in your project to persist your app's interactivity.
Use 3 or more event listeners.
Strategy, Timeline, and Tips
Planning
Plan out your features
Develop user stories
“As [ a user ], I want [ to perform this action ] so that [ I can accomplish this goal ].”
Features should not need you there to explain them to users
Plan out the structure of your JSON requests
Project Pitches
It's recommended that before you start working on your project, you create a pitch for your project idea. You can choose pitch that project to instructors during a Lab Help Session as well if you would like feedback before starting.

For your project pitch, you should include:

The basic story of your application
The core features of your MVP
The API data you'll be using and how you'll use it
Challenges you expect to face
How you are meeting the requirements of the project
Feel free to send this pitch to your instructor via Piazza asynchronously.

MVP ASAP
Build a Minimum Viable Product (MVP) as quickly as possible.
Pick an API and explore it early on to ensure it will work for your need
Instructor Guidance
You should strive to solve problems independently, but you also shouldn't waste your time stuck on a problem. A good guideline for a small bug is the rule of 10s:

10 minutes debugging the code
10 minutes using Google and StackOverflow to try to find an answer
10 minutes asking your fellow students for help
Asking an instructor
If you seek out instructor guidance on your design from the start, they might help steer you into design and architectural decisions that will help you down the road. That will also give the instructors context for what your app is supposed to do, so you won't need to explain everything to them when asking for help debugging.

Guidelines for Staying Organized
Write down the decisions you make about your project. This will not only help you think more clearly, it will also help you communicate your project to instructors when asking for help. In addition to writing everything down, we also recommend the following to help stay organized and on track:

Describe/sketch your ideas (use diagrams!).
Start by creating a frontend directory with the basic files you'll need
Next, build enough code to get some API data to work with. Don't worry about building all of your async code yet, just get to the point where you can access one endpoint on an API, then start working on getting that data displayed.
Then, continue to build additional async code and frontend features.
Continue building features one by one.
Check in with your instructors to make sure your scope and timeline are manageable.

JSON Server Instructions
Note: Using json-server is a stretch goal, so make sure you have a working MVP before trying to set up json-server!

You can use this json-server templateLinks to an external site. to generate your backend code. Using this template will make it easier to deploy your backend later on.

If you prefer, instead of using the template, you can create a db.json file with a structure in the root of your project that looks like this:

{
  "toys": [
    {
      "id": 1,
      "name": "Woody",
      "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
      "likes": 8
    },
    {
      "id": 2,
      "name": "Buzz Lightyear",
      "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
      "likes": 14
    }
  ]
}
Then, assuming you have json-server installed globally, you can run this command to run the server:

 json-server --watch db.json
Whatever top-level keys exist in your db.json file will determine the routes available. In the example above, since we have a key of toys pointing to an array of toy objects, json-server will generate the following routes:

GET /toys
POST /toys
GET /toys/:id
PATCH /toys/:id
DELETE /toys/:id
You can consult the json-server docsLinks to an external site. for more information.

Resources
Public APIsLinks to an external site.
Fun APIsLinks to an external site.
json-serverLinks to an external site.