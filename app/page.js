"use client";
import { app } from "@/components/firebase/firebaseconfig";
import Pinlist from "@/components/pinlist/pinlist";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function home() {
  const db = getFirestore(app);
  const [listofPins, setListofPins] = useState([]);

  useEffect(() => {
    getAllPins();
  }, []);
  const getAllPins = async () => {
    const querySnapshot = await getDocs(collection(db, "pinterest"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      setListofPins((prev) => [...prev, doc.data()]);
    });
  };
  return <Pinlist listofPins={listofPins} />;
}
