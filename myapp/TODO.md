# instructions state that Github Gists API is to be used, so you've been wasting your time with this Octokit thing!
## needs to be as follows!

## const docs = await fetch(`/api/likes/user?postId=${postId}&userId=${userId}`, {
##   method: 'GET',
##       headers: {
##           Accept: 'application/json',
##           'Content-Type': 'application/json',
##       }
## })
### when i click 'add file', it doesn't create a new gist on github, only updates the same gist, and the content of the note is not appearing in the gist file.

### TO DO:

### - make save and delete buttons functional 

### - finish NotesList page which should contain individual notes within notepad

### - save each notepad and note to local Storage
### = retrieve notepads and notes from local storage and have them appear under the current input form




### using 'gist-charts', make gist data chart for notepad and one for notes in notepad, to be accessed with 'stats' button

### fix styling 