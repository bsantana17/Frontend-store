import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  title: string;
  localeExample: Object;

  constructor(public dialogRef: MatDialogRef<ExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    switch (this.data){
      case 1:
        this.title = 'Locale File';
        this.loadLocaleExample();
        break;
      case 2:
        this.title = 'Modal File';
        break;
      case 3:
        this.title = 'Template File';
        break;
    }
  }

  loadLocaleExample(){
    this.localeExample = {
      "app": {
        "pageTitle": "NEURONE",
        "navbarTitle": "NEURONE",
        "toggleNav": "Toggle navigation",
        "search": "Search",
        "documents": "Documents",
        "showcase": "Showcase",
        "visitedLinks": "Visited Links",
        "snippets": "Snippets",
        "bookmarks": "Bookmarks",
        "i18n": "Internationalization",
        "forms": "Forms",
        "synthesis": "Synthesis",
        "flow": "Flow",
        "searchResults": "Search Results",
        "documentList": "Document List",
        "enrollment": "Massive Enrollment"
      },
      "nav": {
        "tutorialButton": "Tutorial",
        "tipsButton": "Tips",
        "taskButton": "Task",
        "readyButton": "Ready!",
        "backButton": "Back to search",
        "bookmarkList": "Bookmark List",
        "selectedPages": "You have selected {{bookmarks}} page(s)",
        "snippetCount": "You have selected {{words}} word(s)",
        "snippetButton": "Save Snippet",
        "bookmarkButton": "Bookmark",
        "unbookmarkButton": "Unbookmark",
        "taskResults": "Task results"
      },
      "auth": {
        "registerButton": "Register",
        "loginButton": "Login",
        "logoutButton": "Logout",
        "registerMessage": "Register in NEURONE",
        "loginMessage": "Login to NEURONE",
        "email": "Email",
        "username": "Username",
        "password": "Password",
        "identity": "Full name",
        "required": "Required field",
        "emailPlaceholder": "Enter your email",
        "usernamePlaceholder": "Enter your username",
        "passwordPlaceholder": "Enter your password",
        "identityPlaceholder": "",
        "studentRole": "Student",
        "experimenterRole": "Teacher"
      },
      "home": {
        "welcome": "Welcome to NEURONE!",
        "acronym": "oNlinE inqUiRy experimentatiON systEm",
        "instructions1": "Please register and login with your username to begin!"
      },
      "start": {
        "beginButton": "Begin",
        "instructions1": "Press the Begin button to start (or continue)",
        "idea": "Idea {{number}}",
        "ideaPlaceholder": "Write your idea here!"
      },
      "search": {
        "searchEngineTitle": "My Search Engine",
        "searchButton": "Search",
        "searchPlaceholder": "Enter text to search",
        "noResults": "Your search query matched no results",
        "loading": "Loading results..."
      },
      "showcase": {
        "documentList": "Document List",
        "visitedLinksList": "Visited Link List",
        "snippetsList": "Snippet List",
        "bookmarksList": "Bookmark List"
      },
      "alerts": {
        "error": "Undefined Error",
        "snippetError": "Error while processing Snippet",
        "bookmarkError": "Error while processing Bookmark",
        "snippetSaved": "Snippet saved!",
        "snippetRemoved": "Snippet removed!",
        "bookmarkSaved": "Bookmark saved!",
        "bookmarkRemoved": "Bookmark removed!"
      },
      "form": {
        "title": "Questionnaire",
        "instructions": "Now you must answer some questions!",
        "requiredAnswer": "Required answer",
        "submitButton": "Submit",
        "submitted": "Your answers have been submitted!",
        "submittedError": "An error has occurred!"
      },
      "snippet": {
        "page": "Page {{pageNum}}"
      },
      "synthesis": {
        "title": "Synthesis",
        "submitButton": "Submit",
        "saved": "Your answer is being saved...",
        "submitted": "Your answer has been submitted!",
        "error": "An error has occurred!",
        "snippets": "Your Snippets",
        "bookmarks": "Your Bookmarks",
        "closeButton": "Close",
        "snippetModalTitle": "Your Snippet",
        "bookmarkModalTitle": "Your Bookmark",
        "allPages": "All",
        "page": "Page {{pageNum}}",
        "snippet": "Snippet {{snipNum}} - Page {{pageNum}}",
        "snippetAll": "Snippet {{snipNum}}",
        "allTitle": "All Pages",
        "wordCount": "You have written {{words}} word(s)"
      },
      "modal": {
        "closeButton": "Close",
        "nextStageButton": "Next stage",
        "goBackButton": "Go Back",
        "acceptButton": "Accept",
        "cancelButton": "Cancel",
        "nextButton": "Next",
        "goodDocument": "Great page!",
        "badDocument": "Average page",
        "documentsFound": "You found {{goodPages}} great page(s)!",
        "currentScore": "You score is {{stars}} star(s)",
        "nextStageInstructions": "Now you can go to the next stage",
        "goBackInstructions": "Go back and keep searching!",
        "timeWarning": "You ran out of time!",
        "confirmChanges": "Are you sure that you want to continue to next stage?",
        "keepSearching": "Keep seaching for better pages",
        "timeup": {
          "title": "Time is over!",
          "instruction": "Time is over for this stage. Now you will continue to next stage."
        },
        "confirm": {
          "title": "Continue to next stage",
          "instruction": "Are you sure you want to continue? Your answers will be submitted and you not will be able to go back."
        },
        "logout": {
          "title": "Logout",
          "confirm": "Are you sure that you want to logout?",
          "action": "Logging out of NEURONE"
        }
      },
      "hints": {
        "neuroneButton": "If you get lost, press the NEURONE button to get to the main page of your current task",
        "taskButton": "Remember to click the Task button to see your assignment!",
        "tutorialButton": "Remember to click the Tutorial button to get help in how to complete your assignment!",
        "tipsButton": "Remember to click the Tips button to get some hints for your assignment"
      },
      "tutorial": {
        "tryNow": "Now it's your time to try",
        "stage0": {
          "i1": "Write a phrase that you think it will be a good search query!"
        },
        "stage1": {
          "i1": "Write a phrase to search in the box and click Search",
          "i2": "Pick a page from the results list and click in the title to open it",
          "i3": "While inside a page, click Bookmark to save the page for future reference, or click Unbookmark to remove the page from your bookmark list",
          "i4": "The bookmark list stores your current saved bookmarks",
          "ex_2a": "My web page",
          "ex_2b": "www.mywebpage.com",
          "ex_2c": "This is a very relevant web site!"
        },
        "stage2": {
          "i1": "Click the tabs to load a page from your bookmark list",
          "i2": "Remember to answer the questions for every page!",
          "i3": "Select some text from the page and click the Save Snippet button to save a relevant piece of text",
          "i4": "You can revisit or delete your snippet if you want",
          "ex_2a": "How credible is this page?",
          "ex_2b": "Why do you think so?",
          "ex_4a": "I'm a snippet! Click me!"
        },
        "stage3": {
          "i1": "Write your answer in the field below (you can style it!)",
          "i2": "You can visit your snippets by clicking in the tabs",
          "i3": "You can revisit the page where a snippet came from by clicking the snippet",
          "ex_3a": "I'm a snippet! Click me!"
        },
        "general": {
          "i1": "Hi. Tutorial will be available only while performing the task. Try it later if you need it."
        },
        "email": {
          "title": "My Email",
          "inbox": "Inbox",
          "drafts": "Drafts",
          "sent": "Sent",
          "allMail": "All mail",
          "from": "From",
          "to": "To",
          "subject": "Subject"
        }
      },
      "end": {
        "t1": "You have completed the task!",
        "t2": "Thank you for join us!"
      },
      "timeout": {
        "search1": "Great! You found all three pages that will help you solve the task. You got full {{stars}} stars. Now you can move forward.",
        "search2": "You did a good job, but you did not find all the pages you need in the job. That's why you just got {{stars}} stars. You still have time left so keep searching. I will help you by deleting pages that are not useful for the job.",
        "search3": "Time to search for pages ended. Unfortunately, you did not find all the required pages so you just got stars {{stars}}. Do not worry, as I'll give it to you when you need them.",
        "general": "Time out. Now you can move forward.",
        "alert": "{{time}} minutes remaining"
      },
      "sam": {
        "avatar_d1": "Hi there! Welcome and thanks for your time. My name is {{avatar}}. How do you feel now?",
        "avatar_d2": "I see. And how calm or anxious would you say you are in this moment?",
        "avatar_d3": "Ok! We are all set to start. Please click on the \"Ready\" button to continue",
        "user_d1": "I am feeling",
        "user_d2": "I am",
        "instructions1": "Below you will find a list of smileys representing positive and negative feelings. The extreme left and extreme right indicates very strong feelings. Please choose the one that better express how you feel now.",
        "instructions2": "Below you will find a list of smileys representing levels of anxiety and calmness. The extreme left and extreme right indicates very strong feelings. Please choose the one that better express how you feel now.",
        "positive_less": "Negative",
        "positive_more": "Positive",
        "calm_less": "Anxious",
        "calm_more": "Calm"
      }
    };
  }

}
