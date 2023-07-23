import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { Credentials, User } from "types/types";
export const useAuthStore = defineStore('Auth', () => {
    const nuxtApp = useNuxtApp()
    const router = useRouter()
    const user = ref<User>()
    const init = () => {
        onAuthStateChanged(nuxtApp.$firebaseAuth, (userX) => {
            
            if (userX) {
                user.value = {id:userX.uid as string, email:userX.email as string}
                router.push('/dashboard')
            } else {
                user.value = {id:'',email:''}
                router.replace('/')
            }
        });
    }

    const registerNewUser = async (credentials: Credentials) => {      
        try {
            await createUserWithEmailAndPassword(nuxtApp.$firebaseAuth, credentials.email, credentials.password)
        } catch (error) {
            console.log(error);            
        }
    }
    const loginUser = async (credentials: Credentials) => {
        try {
            const {user} = await signInWithEmailAndPassword(nuxtApp.$firebaseAuth, credentials.email, credentials.password)
            console.log("login user",user);
            
        } catch (error) {
            console.log(error);            
        }
        
    }
    return {
        init,
        user,
        registerNewUser,
        loginUser
    }
})