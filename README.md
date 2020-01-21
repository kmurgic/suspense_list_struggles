This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Concurrent Mode - SuspenseList Struggles

This project demonstrates some issues I have been having getting the experimental SuspenseList component to re-render when a state change causes nested Suspense components to re-suspend.


This code contains five examples of a Random Star Wars Character application.

### Example 1 - SuspenseList Without Keys
When pressing a button that causes state to change the Suspense components show a fallback again, but the revealOrder and tail properties of the SuspenseList are no longer respected.

### Example 2 - SuspenseList With Keys
When pressing a button that causes state to change the SuspenseList components show a fallback again and now the revealOrder and tail properties of the SuspenseList are respected.  However, in the console React issues a warning that a "user blocking update" has been triggerd and suggests that a useTransition hook can be used to break the transition up into two parts.

### Example 3 - SuspenseList With Keys and useTransition
When pressing a button that causes state to change the SuspenseList components show a fallback again and now the revealOrder and tail properties of the SuspenseList are respected.  In the console, React no longer issues a warning that a "user blocking update" has been triggered.  However, the transition has not been successfully broken into two parts.  When we click the button the new page loads immediately.

### Example 4 - SuspenseList Nested In Suspense
This example is based off a suggestion from Sebastian Markbage.  Everything that Suspends is grouped in a Suspense.  Inside that Suspense everything besides the name is in the SuspenseList and has keys.  The revealOrder and tail properties are respected when the SuspenseList reloads after a button press and there is a transtion before opening the new page. However, this is still not quite the desired behavior.  As soon as the data for the name loads the new page is opened even if the other resources have not loaded and the transition timeout has not been reached.

### Example 5 - Hacky Solution to SuspenseList Issues
This example acheives the desired behavior. Inside that Suspense everything besides the name is in the SuspenseList and has keys.  The revealOrder and tail properties are respected when the SuspenseList reloads after a button press and there is a transtion before opening the new page.  It also correctly waits for either all of the content to load or the useTransition timeout to pass before showing the new page. However, this is acheived by rendering a display none Suspense component that awaits all of the same resources as the real Suspense component - not exactly a clean solution. 