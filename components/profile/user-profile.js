import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

// import { getSession } from 'next-auth/client';
// import { useState, useEffect } from 'react';
// import UserProfile from '../components/profile/user-profile';

function UserProfile() {
  //   // Redirect away if NOT auth
  //   const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //     getSession().then((session) => {
  //       if (!session) {
  //         window.location.href = '/auth';
  //       } else {
  //         setIsLoading(false);
  //       }
  //       // setLoadedSession(session);
  //     });
  //   }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
