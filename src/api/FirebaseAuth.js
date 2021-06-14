// import * as firebase from "firebase/app";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASURE_ID,
// };

// firebase.initializeApp(firebaseConfig);

// export const firebaseInstance = firebase;
// export const FAuthService = firebase.auth();

export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      setCookie(cname, c.substring(name.length, c.length));
      return decodeURIComponent(c.substring(name.length, c.length));
    }
  }
  return null;
};

// 쿠키 저장함수
export const setCookie = (cname, cvalue) => {
  var d = new Date();
  let encodedValue = encodeURIComponent(cvalue);

  d.setTime(d.getTime() + 1 * 60 * 60 * 1000);

  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + encodedValue + ";" + expires + ";path=/";
};
