import { getSession } from 'next-auth/client';
import { useState, useEffect } from 'react';
import UserProfile from '../components/profile/user-profile';

function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  // const [loadedSession, setLoadedSession] = useState();

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        window.location.href = '/auth';
      } else {
        setIsLoading(false);
      }
      // setLoadedSession(session);
    });
  }, []);

  // const [session, loading] = useSession();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <UserProfile />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default ProfilePage;
