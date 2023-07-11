"use client";
import { app } from "@/components/firebase/firebaseconfig";
import Pinlist from "@/components/pinlist/pinlist";
import ProfileInfo from "@/components/profileinfo/profileinfo";
import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const Profile = ({ params }) => {
  const db = getFirestore(app);
  const [profileInfo, setProfileInfo] = useState();
  const [listofPins, setListOfPins] = useState([]);
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
      // console.log("Document data:", docSnap.data());
      setProfileInfo(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (profileInfo) {
      getuserPins();
    }
  }, [profileInfo]);
  const getuserPins = async () => {
    const q = query(
      collection(db, "pinterest"),
      where("email", "==", profileInfo?.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setListOfPins((listofPins) => [...listofPins, doc.data()]);
    });
  };
  return (
    <div>
      {profileInfo ? (
        <div>
          <ProfileInfo profileInfo={profileInfo} />
          <Pinlist listofPins={listofPins} />
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
