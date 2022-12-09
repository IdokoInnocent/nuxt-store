import { projectAuth } from '~/fbService/config'

const error = ref(null);
const isPending = ref(null);

const signup = async (email, password, displayName) => {
    error.value = null
    isPending.value = true

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error('Could not signup')
        }
        console.log(res.user)
        // Upadte the user name
        await res.user.updateProfile({ displayName })
        error.value = null
        isPending.value = false
        return res
        
    } catch (err) {
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    }
 }


const useSignup = () => {
    return {error, signup}
}

export default useSignup