import { projectAuth } from "~/fbService/config";


export default function () {
    let user = projectAuth.currentUser()
    console.log('current user in auth guard is', user)
}