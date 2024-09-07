//Firebase configure
const firebaseConfig = {
    apiKey: "AIzaSyA4CAyvqWyalFnI4Z0tgVzPUddGdiB7_9U",
    authDomain: "authentication-10326.firebaseapp.com",
    projectId: "authentication-10326",
    storageBucket: "authentication-10326.appspot.com",
    messagingSenderId: "697878623991",
    appId: "1:697878623991:web:812cbbcc3434d1320fc5f2"
};
// //Firebase initialize
firebase.initializeApp(firebaseConfig);
// const app = firebase.initializeApp(firebaseConfig);
// //auth module enable

const auth = firebase.auth();

//signUp-using auth Module

// if (document.getElementById('subBtn')) {
//     document.getElementById('subBtn').addEventListener('click', () => {
//         // Sign-up successful
//         alert('Registration successful!');
//     });
// }

if (document.getElementById('regBtn')) {
    document.getElementById('regBtn').addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Sign-up successful
                alert('Registration successful!');
                const user = userCredential.user;
                console.log(user);
                // Optional: Redirect to another page
                // window.location.href = 'welcome.html';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Error: ${errorCode}, ${errorMessage}`);
                alert(`Error: ${errorMessage}`);
            });
    });
}

//signIn-using auth Module

// if (document.getElementById('regBtn')) {
//     document.getElementById('regBtn').addEventListener('click', () => {
//         // Sign-up successful
//         alert('Login successful!');
//     });
// }

if (document.getElementById('subBtn')) {
    document.getElementById('subBtn').addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Sign-up successful
                alert('Registration successful!');
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Error: ${errorCode}, ${errorMessage}`);
                alert(`Error: ${errorMessage}`);
            });
    });
}