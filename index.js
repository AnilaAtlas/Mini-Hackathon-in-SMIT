const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link"),
  cPassword = document.getElementById("cPassword");
  
pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if (password.type === "password") { 
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });

  });
});


links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // Prevent default link behavior
    forms.classList.toggle("show-signup");
  });
});


import{auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,sendEmailVerification,provider,signInWithPopup,GoogleAuthProvider,storage,getStorage} from "./firebase.js";

console.log("auth", auth.currentUser);

// const user = auth.currentUser;
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("user", user);
//   } else {
//     console.log("user not exist");
//   }
// });

let signup = () => {
  let   signupemail = document.getElementById("signupEmail").value;
  let signupPassword = document.getElementById("signupPassword").value;
  createUserWithEmailAndPassword(auth, signupemail, signupPassword)
  .then((res) => {
    console.log("user", res.user);
  })
  .catch((error) => {
    console.log("error", error.code); 
  });
}

let signup_btn = document.getElementById("signupBtn");
signup_btn.addEventListener("click", signup);

let signIn = () => {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Successfully LogIn", user);
      window.location.href = "./post-app/index.html";
    })
    .catch((error) => {
      console.log("error", error.code);
    });
};

let login_btn = document.getElementById("login-btn");
login_btn.addEventListener("click", signIn);

let logout = () => {
  signOut(auth).then(() => {
    alert("Signout Successfull")
  }).catch((error) => {
    // An error happened.
  });
}

let logout_btn = document.getElementById("logout");
logout_btn.addEventListener("click", logout);

  // let verifyEmail = () =>{
  //   sendEmailVerification(auth.currentUser)
  //   .then(() => {
  //     console.log("Sent");
  //   });
  // }
  // let verify_btn = document.getElementById("verification-btn");
  // verify_btn.addEventListener("click", verifyEmail);

  let loginWithGoogle = () =>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("token", token);
      console.log("user", user);
      
      
    }).catch((error) => {
      const errorCode = error.code;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("errorCode", errorCode, credential);
      
    });
  }
  let google = document.getElementById("google");
google.addEventListener("click", loginWithGoogle);

// Create a reference to the file to delete
const desertRef = ref(storage, 'images/desert.jpg');

deleteObject(desertRef)
.then(() => {
  const storageRef = ref(storage);
  console.log(storageRef);
  
}).catch((error) => {
  const errorCode = error.code;
  console.log("errorCode", errorCode);
});



function fetchPosts() {
  const postsList = document.getElementById("postsList");


  database.ref("posts").on("value", (snapshot) => {
    postsList.innerHTML = ""; 
    const posts = snapshot.val();

    if (posts) {
      Object.keys(posts).forEach((id) => {
        const post = posts[user.id];
        console.log(post);
      });
    }
  });
}

fetchPosts();


