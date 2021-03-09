import React, { useContext } from 'react';
import Card from '../components/Card';
import Loader from '../components/Loader';
import Search from '../components/Search';
import { GithubContext } from '../context/github/githubContext';

const Home = () => {
  const { loading, users } = useContext(GithubContext);

  return (
    <>
      <Search />

      <div className='row'>
        {loading ? (
          <Loader />
        ) : (
          users.map((user) => {
            return (
              <div className='col-sm-4 mb-4' key={user.id}>
                <Card user={user} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Home;
