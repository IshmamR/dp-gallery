import { useState, useEffect } from "react";
import { projectFireStore, TTimeStamp } from "../firebase/config";

interface IImage  {
  _id: string;
  url: string;
  createdAt: TTimeStamp;
}

const useFireStore = (collection: any) => {
  const [docs, setDocs] = useState<IImage[]>([]);

  useEffect(() => {
    const unSub = projectFireStore.collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot(snap => {
        let documents: any = [];
        snap.forEach(doc => {
          documents.push({ ...doc.data(), _id: doc.id });
        });
        setDocs(documents);
      });

    // cleanup function
    return () => unSub();
  }, [collection]);

  return { docs };
};

export default useFireStore;