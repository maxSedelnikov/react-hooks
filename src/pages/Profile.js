import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Repos from '../components/Repos';
import { GithubContext } from '../context/github/githubContext';

const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loader />;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    public_repos,
    publoc_gists,
    following,
  } = user;

  return (
    <>
      <Link to='/' className='btn btn-dark mb-3'>
        Go to home page
      </Link>
      <div className='card mb-4'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-3 text-center'>
              <img src={avatar_url} alt={name} style={{ width: 150 }} />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className='col'>
              {bio && (
                <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              )}
              <a
                href={html_url}
                className='btn btn-dark mb-2'
                target='_blank'
                rel='noreferrer'
              >
                Open profile
              </a>
              <ul className='list-group list-group-flush'>
                {login && (
                  <li className='list-group-item pl-0'>
                    <strong>Username: </strong> {login}
                  </li>
                )}
                {company && (
                  <li className='list-group-item pl-0'>
                    <strong>Company: </strong> {company}
                  </li>
                )}
                {blog && (
                  <li className='list-group-item pl-0'>
                    <strong>Blog: </strong> {blog}
                  </li>
                )}
              </ul>
              <div className='badge badge-primary mr-2'>
                Followers: {followers}
              </div>
              <div className='badge badge-success mr-2'>
                Folowwing: {following}
              </div>
              <div className='badge badge-info mr-2'>Repos: {public_repos}</div>
              <div className='badge badge-dark mr-2'>Gists: {publoc_gists}</div>
            </div>
          </div>
        </div>
      </div>

      <Repos repos={repos} />
    </>
  );
};

export default Profile;
