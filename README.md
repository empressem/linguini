# Linguini
For this code challenge, you're being asked to build out the text translation app Linguini from scratch. It is a single page app that translates an arbitrary text block into a language that the user chooses. Language translation happens entirely in the browser (the client is really insistent on this point, for some reason).

## Resources
Included in the project files are some mockups, some assets, and a static node server.

The font family used in the mocks is `Montserrat`, and can be found on Google Fonts.

To install the dependencies you need to run the static server:
`npm install`

To run the static server:
`npm start`

The server will run on [port 8080](http://localhost:8080)

## Requirements
Fork this repo, and when you're ready to submit your answer, just open a pull request against the master branch.

* Create an app that matches the provided mocks (in `resources/mockups`).
* Input page
  * A user can enter a block of text into the text box and select.
  * If the user clicks "Give me Pig Latin", the text is translated into pig latin (defined below) and shown on the screen.
  * If the user clicks "Give me Bibbity Bobbity" the text is translated into Bibbity Bobbity (defined below) and shown on the screen.
  * The buttons should be disabled if there is no input.
* Results page
  * There should be a visual transition between the input page and the results page.
  * When a user clicks on `Linguini something else` on the results page, they should be taken back to the input page. The text box should still have their last entry in it.

Write this as if it were a real product that you were going to own. Use whatever dependencies that you feel would best help you solve the problem.

The final files (build files, if there is a build step) needs to be hosted out of the `dist` directory.

## Supported Languages
For launch, Linguini needs to support translating text into two of the most popular languages among their target demographic: Pig Latin, and Bibbity Bobbity. The goal is to eventually support an entire library of languages, but two is enough for the first iteration.

### Pig Latin
For words that start with a consonant, that first letter gets removed from the front of the word, appended to the end of the word, followed by the letters `ay`.

For words that begin with a vowel, just append `way` to the end of the word.

* `I love Linguini!` becomes `Iway ovelay Inguinilay!`.
* `Fire the person who does our market research` becomes `Irefay hetay ersonpay howay oesday ourway arketmay esearchray`.
* `We were a ways away when Wei went wayward` becomes unintelligible.

### Bibbity Bobbity
Given any sentence, the last word in the sentence is `boo`, and every other word alternates between `bibbity` and `bobbity`.

* `I love Linguini!` becomes `Bibbity bobbity Boo!`.
* `Our investors assured me these are legitimate languages` becomes `Bibbity bobbity bibbity bobbity bibbity bobbity bibbity boo.`
* `Regret` just becomes `Boo`

As a general rule, any 'word' containing numbers is not considered a translatable word and should be left untranslated in the output.

* `Chapter 11 bankruptcy` becomes `Haptercay 11 ankruptcybay` or `Bibbity 11 boo`.
