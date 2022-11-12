import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBidph2UoVYgFSPHgEviid36tdjf2L3wMY",
  authDomain: "lifestyle-store-e053c.firebaseapp.com",
  projectId: "lifestyle-store-e053c",
  storageBucket: "lifestyle-store-e053c.appspot.com",
  messagingSenderId: "769782498020",
  appId: "1:769782498020:web:7dee43d71401793ebea2f1",
  measurementId: "G-0SKNCTMERM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;