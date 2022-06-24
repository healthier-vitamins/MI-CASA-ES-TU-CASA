# HO&ME 
where the Ho & Me Live Together

## Overview
A community sharing app for users to browse interior design ideas and for designers to share their work.

Check it out here: https://ho-and-me-project3.herokuapp.com/

This app was created using the following: 
- React
- Express
- Node.js
- MongoDB
- Bootstrap

## Structure
The rough structure for the app is as follows:

```
Models
├── Comments.js
├── Posts.js
└── Users.js
```

```
Controllers
├── CommentsController.js
├── PostsController.js
└── UsersController.js
```

```
Frontend
├── App.css
├── App.jsx
├── components
│   ├── Comments
│   │   ├── CreateCommentForm.jsx
│   │   └── ShowComments.jsx
│   ├── Index
│   │   ├── FilterSearch.jsx
│   │   ├── FilterSearch.module.css
│   │   ├── PostCard.jsx
│   │   └── PostCard.module.css
│   ├── Profile
│   │   ├── UserLikes.jsx
│   │   └── UserPosts.jsx
│   ├── createPost
│   │   └── CreatePostForm.jsx
│   ├── navbar
│   │   ├── NavBar.jsx
│   │   └── NavBar.module.css
│   └── showPost
│       ├── DeleteModal.jsx
│       ├── DeleteModal.module.css
│       ├── EditModeForImgs.jsx
│       ├── EditPost.jsx
│       ├── ImageModal.jsx
│       └── ImageModal.module.css
├── index.css
├── main.jsx
└── pages
    ├── CreatePost.jsx
    ├── CreatePost.module.css
    ├── IndexHome.jsx
    ├── IndexHome.module.css
    ├── Layout.jsx
    ├── Login.css
    ├── Login.jsx
    ├── Profile.css
    ├── Profile.jsx
    ├── ShowPost.jsx
    ├── ShowPost.module.css
    ├── SignUp.css
    └── SignUp.jsx
```
### User Stories
Without logging in, the following pages are available 
* Index Page: this is the main page where users can see all the posts that have been uploaded to the app. 
* ShowPost Page: the details of the posts will be here! This is where users can see the whole post, including a more detailed description of the design and inspiration, and more images can be viewed here too. Users will also be able to see the comments made on the posts to see any feedback or any suggestions to improve. 
* Profile Page: users can check the profile page of any user from their posts to see their full collection of posts as well as the company they are from (if they are a designer)


The following pages and functions become available when logged in
* CreatePost Page: this is where users can upload their own interior design portfolio if they are designers or they can share their own home renovation works if they are just home-owners
* ShowPost Page: users will now be able to leave comments on other user's posts. If they are viewing their own post, they will be given the options to edit and delete










