import { projectAuth } from "~/fbService/config";

const error = ref(null);
const isPending = ref(false);

const logout = async () => {
  error.value = null;
  isPending.value = true;

    try {
        await projectAuth.signOut()
        isPending.value = false
  } catch (err) {
    error.value = err.message;
    isPending.value = false;
  }
};

const useLogout = () => {
    return {error, isPending, logout}
}


export default useLogout;