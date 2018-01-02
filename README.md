# FriendFinder

## About

FriendFinder is a full-stack application which takes in user input by asking for name, a picture, and to answer 10 questions. Once the user inputs all the information, the application pairs the user up with a friend!

This uses a method which takes the absolute value of the current user and each user currently in the database and tries to find the smallest difference between the current user and all the other users in the database.

For instance, if I input 2 for question #1 and John inputs 3 and Alex inputs 5.. based on the first question.. John would be a better match for me. It does this throughout all 10 questions and pairs you up with the appropriate friend.

If there are multiple friends who end up being an appropriate friend for you, it will push those appropriate friends into an array and choose a random one to match you up with.
