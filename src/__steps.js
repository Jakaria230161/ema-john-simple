/*
Auth setup:
1,create firebase project
2,enable web
3,enable sign in method
4,install firebase
5,get firebase config in your firebase.config.js file
6,export app from firebase.config.js
 */

/* 
1. Create UserContext (auth context) : UserContext --> component name, provide UserContext provides AuthContext.
2,create AuthContext
3, set AuthContext.Provider
4,Make sure you set the children
5,export AuthContext to be used inside useContext hook
6,get form data
7, getAuth in the userContext
*/

/* 
Firebase hosting:
----------------------
One time for each computer
1, npm install -g firebase-tools
2, firebase login

For each project one time
3,firebase init
Make sure for public directory: you select build
single page application: y


For every deploy
4, Npm run build
5,firebase deploy
*/