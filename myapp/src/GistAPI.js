// import GithubGist from "simple-github-gist-api";

// export const token = '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';

// export const githubGist = new GithubGist({
//     appIdentifier: 'DISQO_Test',
//     personalAccessToken: token,
//     isPublic: true,
//     cors: {
//       addPrefix: true,
//       // customPrefix: (someURl) => `YourCustomPrefix` + someURl,
//     },
// });

// (async () => {
//     await githubGist.touch();
  
//     console.log("Gist ID", githubGist.id);
//     console.log("Github Username", githubGist.ownerUsername);
  
//     console.log("Original File names", githubGist.getFileNames());
  
//     const created = githubGist.createFile("projects.json", "{}");
//     if (created) {
//       console.log('Created new file in gist');
//     } else {
//       console.log('Updated existing file in gist');
//     }
  
//     // Note: All the creates and updates happen in-memory. You have to
//     // explicitly invoke the `save` method on either the entire gist instance
//     // or the individual file instance.
  
//     // Saves all the files in the gist. Only the un-saved changes will be
//     // added to the payload.
//     await githubGist.save();
  
//     // Save individual file.
//     // const file = githubGist.getFile('projects.json');
//     // await file.save();
  
//     console.log("File names", githubGist.getFileNames());
//   })();

  //compare this code w/documentation (simple-gist-api)