// services/blogService.js
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

// Add a new blog
export const addBlog = async (blogData) => {
  try {
    const docRef = await addDoc(collection(db, "blogs"), {
      ...blogData,
      views: 0,
      timestamp: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding blog: ", error);
    throw error;
  }
};

// Fetch all blogs
export const getBlogs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "blogs"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching blogs: ", error);
    throw error;
  }
};

// Fetch single blog and increment views
export const getBlogById = async (id) => {
  try {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Increment views
      await updateDoc(docRef, { views: (docSnap.data().views || 0) + 1 });
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("Blog not found");
    }
  } catch (error) {
    console.error("Error fetching blog: ", error);
    throw error;
  }
};
