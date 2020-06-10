const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //user info    
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        signupForm.reset();
    });    
});