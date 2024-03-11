import { useUser } from '../../contexts/user';

export default function AccessVerification(email: string, name: string, password: string) {
  const {setUserConnected} = useUser();

  if (email === "az@gmail.com" && name === "az" && password === "aqwzsx123") {
    localStorage.setItem('token', "gh1225zee1119");
    localStorage.setItem('userId', "qw452216zzgkml");
    setUserConnected(true);
    return(0);
  }
  else return (1);
}
        // if (email === "az@gmail.com" && name === "az" && password === "aqwzsx123") {
        //   localStorage.setItem('token', "gh1225zee1119");
        //   localStorage.setItem('userId', "qw452216zzgkml");
        //   setUserConnected(true);
        //   console.log('Inscription réussie');
        //   router.push('/');
        // }
        //     if (AccessVerification(email, name, password) === 0) {
        //   console.log('Inscription réussie');
        //   router.push('/');

        // }
        // else {
        //   console.log("nothing");
          
