"use client";
import { app } from "@/components/firebase/firebaseconfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect } from "react";

const Profile = ({ params }) => {
  const db = getFirestore(app);
  useEffect(() => {
    console.log(params.userid.replace("%40", "@"));
    if (params) {
      getUserInfo(params.userid.replace("%40", "@"));
    }
  }, [params]);

  const getUserInfo = async (email) => {
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  return <div>profile</div>;
};

export default Profile;