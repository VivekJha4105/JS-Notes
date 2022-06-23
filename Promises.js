
/// ---------------------- Making javascript Asynchronous making use of callback chains as shown below  ---------- //// ....

// console.log('start');

function loginUser(email, password, callback){
    setTimeout(()=>{
        console.log('Now we have the data.');
        callback( {userEmail: email} );
    }, 2000);
}

function getUserVideos(email, callback){
    setTimeout(() => {
        callback(['video1','video2','video3']);
    }, 2000);
}

function videoDetails(video, callback){
    setTimeout(() => {
        callback('This is the video details.');
    }, 2000);
}


/// Below getUservideos() is invoked only after we have the 'userEmail'. And videoDetials() is invoked only after we get the 'videos'.
/// This forms a CallBack Hell...
// const user = loginUser('vivek@gmail.com', 123456789, (user)=>{
//     console.log(user);
//     getUserVideos(user.userEmail, (videos) => {
//         console.log(videos);
//         videoDetails(videos[0], (details) => {
//             console.log(details);
//         })
//     });
// });
// console.log(user);

// console.log('stop');

///////// ------------ Making javascript Asynchronous using PROMISES....--------- //////////

/// Below is the sequence of an API request by the client browser, which recieves a PROMISE in return with two parameters...
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve({userId : 'user'});
//         reject(new Error('User not logged In.'));
//     }, 2000);
// });

//// Now to display the contents from the PROMISE..
// promise
// .then((user) => {
//     console.log(user);
// })
// .catch((err) => {console.log(err.message)});

/// ###### ----------- BELOW IS ABOVE EXAMPLE USING PROMISES... -------- ####### //////////
// ----- Now if we request something using the APIs, we automatically get the promise from the client and we need not write code as below..

function loginUser(email, password){
    return new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log('Now we have the data.');
                resolve( {userEmail: email} );
            }, 2000);
        });
}

function getUserVideos(email){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1','video2','video3']);
        }, 2000);
    });
}

function videoDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is the video details.');
        }, 2000);
    });
}

/// Using promises is basically chain of .then and .catch after the name of the method...

// loginUser('user.id', '123456789')
// .then(user => getUserVideos(user.userEmail))  
// .then((videos) => videoDetails(videos[0]))
// .then((details) => console.log(details));




///// Now there is another way to make the above code look more synchronous, though still async, using the keyword 'await'..

async function displayUserVideoDetails () {
    try {
        const userIdObj = await loginUser('vivek@gnail.from', 123456789);
        const videos = await getUserVideos(userIdObj.userEmail);
        const details = await videoDetails(videos[0]);
        console.log(details);
    } catch (err) {
        console.log('We could not find the user details.');
    }
}

displayUserVideoDetails();




//// ON A SIDE NOTE, BELOW IS SHOWN ON HOW TO USE MULTIPLE PROMISES SIMULTANEOUSLY /////

// const yt = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('Getting video from youTube.');
//         resolve({ videos : [1,2,3,4.5] });
//     }, 2000);
// })

// const fb = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('Getting data form faceBook.');
//         resolve({ post:'yoyo' });
//     }, 5000);
// })

// Promise.all([yt, fb])
// .then(result => console.log(result));