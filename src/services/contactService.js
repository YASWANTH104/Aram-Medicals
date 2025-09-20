import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export const submitContactForm = async (formData) => {
  try {
    // Add document to 'contacts' collection
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...formData,
      timestamp: serverTimestamp(),
      status: 'new'
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form: ', error);
    throw error;
  }
};

export const getContactFormData = async () => {
  try {
    // This function can be used to retrieve contact form submissions
    // You can implement this later if needed for admin panel
    console.log('Contact form data retrieval function');
  } catch (error) {
    console.error('Error retrieving contact form data: ', error);
    throw error;
  }
}; 