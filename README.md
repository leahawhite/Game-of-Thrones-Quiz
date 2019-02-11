# Game-of-Thrones-Quiz
A trivia quiz web app to test the user's knowledge of the TV series "Game of Thrones."

## Description
This is a 10-question multiple-choice trivia quiz app created with HTML, CSS, and jQuery. It is also the first web app I created as a Thinkful student. The project is intended to showcase use of HTML, CSS, and jQuery to create an accessible, responsive, interactive quiz app. Enjoy! I have a long way to go as a developer, but it was fun to put this together.

## Take the Quiz
You can play along here: https://leahawhite.github.io/Game-of-Thrones-Quiz/ 

## Technologies Used
* HTML - to provide the underlying structure of the app
* CSS3 - to style the app and make it responsive to different screen sizes
* JavaScript - to store the quiz data and enable interactivity
* jQuery - a JavaScript library that simplifies DOM manipulation and event handling 

## UX and Technical Requirements
Because this was an assignment, the user experience was for the most part established for me. Requirements included:
* A start button to start the quiz
* A series of multiple choice questions
  * Asked one at a time, one after the other
* Users cannot skip questions
* Users should see which question they're on and the current score
* Upon submitting an answer:
  * Users should receive textual feedback about it, including the correct answer if incorrect
  * Users should be able to move on to the next question
* Users should be shown their overall scores at the end
* Users should be able to start a new quiz

Technical requirements included:
* Render answer choices in a <>form</>
* Use semantic HTML, as well as CSS and jQuery
* Follow a11y best practices
* Use responsive design
* Be fully usable by keyboard

## Challenges
**Layout:**   
One of the big challenges I faced with this app was trying to bring my design to life within the constraints of my current CSS skill set. Detailed CSS layout is daunting for a beginner like me, so I ended up simplifying quite a bit. I could definitely tweak the CSS forever, but I must move on! 

**Accessibility:**  
One of the other obstacles I encountered was balance my design goals with accessibility. For instance, I originally wanted the clickable answer inputs to appear as clean text labels, not clunky radio buttons or drop-down lists, but since I needed users to choose only one answer, I opted for radio buttons. And since an answer was required for form submission, I made the radio button inputs required. To achieve a "cleaner" look, I originally added the CSS { position: absolute } to the inputs and offset them off the visible body. However, I discovered in testing that the "required" message does not pop up if you have rudely disappeared your radio buttons! I made them { opacity: 0; } instead. 

After reading through several accessibility sites, I learned that, in general, keeping native form attributes intact makes for better navigation with assistive devices. I hope to improve my balance of accessibility and design in the future.

## Acknowledgments
Big thanks to my Thinkful mentor, Aleksandar Grbic, for helping make my elementary JavaScript and jQuery less redundant and more dynamic. Thanks as well to Alfredo Salazar, another Thinkful mentor, for helping me fix some bugs along the way.  

## Contributions
Please feel free to contribute in any way you'd like. Your feedback is appreciated!