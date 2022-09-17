import axios from "axios";

const getData = async (userId) => {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  const { data: post } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  let data = {
    ...user,
    ...post,
  };

  return console.log(data);
};

export default getData;
