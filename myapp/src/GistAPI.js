import { Octokit } from "@octokit/rest"

const token = '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'

export const octokit = new Octokit({
  auth: token, 
  userAgent: 'DISQO test'
});

//Create gist

export const createNotePad = async(gist_id) => {
  try {
    let data = await octokit.request(
      'POST /gists', {gist_id}); 
    console.log(data)
    return data
  } catch(error) {
    console.log(error)
  }
};

export const createNote = async(gist_id, body) => {
  try {
    let data = await octokit.request(
      'POST /gists/{gist_id}/comments', {
        gist_id,
        body
      });
      console.log(data)
      return data
    } catch(error) {
      console.log(error)
    }
};
//Update gist

export const updateNotePad = async(gist_id) => {
  try {
    let data = await octokit.request(
      'PATCH /gists/{gist_id}', {
        gist_id
      });
    console.log(data)
    return data
    } catch(error) {
    console.log(error)
    }
};


export const updateNote = async(gist_id, comment_id, body) => {
  try {
    let data = await octokit.request(
      'PATCH /gists/{gist_id}/comments/{comment_id}', {
        gist_id,
        comment_id,
        body
      })
      console.log(data)
      return data
    } catch(error) {
      console.log(error)
    }
};


export const deleteNotePad = async(gist_id) => {
  try {
    let data = await octokit.request(
      'DELETE /gists/{gist_id}', {
    gist_id
  })
  console.log(data)
  return data
} catch(error) {
  console.log(error)
}
}


export const deleteNote = async(gist_id, comment_id) => {
  try {
    let data = await octokit.request(
      'DELETE /gists/{gist_id}/comments/{comment_id}', {
    gist_id,
    comment_id
  });
  console.log(data)
  return data
} catch(error) {
  console.log(error)
}
}



//exporting function, asynchronous(it returns a promise - when we resolve the function we need to resolve it as though its returning a function.)
//arrow function - takes one parameter. 
//await waits for the promise in async before executing
//Retrieve gist file

export const getNotePad = async (gist_id) => {
  try {
    let data = await octokit.request('GET /gists/public', {
      gist_id
    });
    console.log(data)
    return data
    } catch(error) {
    console.log(error)
    }
}


//list all notepads
export const listAll = async (gist_id, comment_id) => {
  try {
    let data = await octokit.request(
      'POST /gists/{gist_id}/comments/{comment_id}', {
      gist_id,
      comment_id
    })
    console.log(data)
    return data
  } catch(error) {
    console.log(error)
  }
}

export const getNote = async(gist_id, comment_id) => {
  try {
    let data = await octokit.request(
    'GET /gists/{gist_id}/comments/{comment_id}', {
    gist_id,
    comment_id
  })
  console.log(data)
  return data
} catch(error) {
  console.log(error)
}
}