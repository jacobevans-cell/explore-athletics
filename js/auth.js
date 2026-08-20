import { auth, db } from "./firebase.js";
import { ADMIN_EMAIL } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { doc, getDoc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

export const isAdminUser = (user) => !!user && !!user.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase() && user.emailVerified;

export function requireVerifiedUser({admin=false}={}){
  return new Promise(resolve => {
    const off = onAuthStateChanged(auth, async user => {
      off();
      if(!user){ location.replace("login.html"); return; }
      if(!user.emailVerified){ location.replace("login.html?verify=1"); return; }
      if(admin && !isAdminUser(user)){ location.replace("portal.html"); return; }
      resolve(user);
    });
  });
}

export async function ensureUserDoc(user){
  const ref = doc(db,"users",user.uid);
  const snap = await getDoc(ref);
  if(!snap.exists()){
    await setDoc(ref,{
      uid:user.uid,
      email:user.email || "",
      displayName:user.displayName || "",
      role:isAdminUser(user)?"admin":"athlete",
      createdAt:serverTimestamp(),
      lastLoginAt:serverTimestamp()
    });
  } else {
    await setDoc(ref,{lastLoginAt:serverTimestamp(), displayName:user.displayName||snap.data().displayName||""},{merge:true});
  }
}

export async function logout(){ await signOut(auth); location.replace("login.html"); }
