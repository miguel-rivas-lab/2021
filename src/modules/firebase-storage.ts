import { firebaseApp } from "./firebase";
import { storage } from 'firebase/app';
import "firebase/storage";

export const images = storage(firebaseApp);