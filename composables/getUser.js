import { projectAuth } from "~/fbService/config";

const user = ref(projectAuth.currentUser)

projectAuth.onAuthStateChanged((_user) => {
    console.log('User state change. Current usre is', _user)
    user.value = _user
})


const getUser = () => {
    return {user}
}

export default getUser