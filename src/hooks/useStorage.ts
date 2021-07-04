import { useState, useEffect } from "react";
import { projectFireStore, projectStorage, timestamp } from "../firebase/config";

const useStorage = (file: any) => {
  const [progress, setProgress] = useState<number>(0);
  const [uploadError, setUploadError] = useState<any>(null);
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFireStore.collection("images");

    storageRef.put(file)
      .on("state_change", (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      }, 
      (err) => {
        setUploadError(err);
      }, 
      async () => {
        const uri = await storageRef.getDownloadURL();
        setUrl(uri);
        collectionRef.add({
          url: uri,
          createdAt: timestamp()
        });
      });
  }, [file]);

  return { progress, url, uploadError };
};

export default useStorage;