import axios from 'axios';

async function getInfo(user_id) {
  const { data: user } = await axios(
    'https://jsonplaceholder.typicode.com/users/' + user_id
  );

  const { data: post } = await axios(
    'https://jsonplaceholder.typicode.com/posts/' + user_id
  );

  user.posts = [{ ...post }];
  console.log(user);
}

export default getInfo;
