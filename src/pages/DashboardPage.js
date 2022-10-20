import { useAuthContext } from '../context/AuthContext';

const DashboardPage = () => {
  const { userLoading: loading, user } = useAuthContext();

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <h1>dashboard</h1>
      {/* //   {user.addedBooks.map((b) => {
    //     const { id, title, author, grade, image } = b;
    //     return (
    //       <div key={id}>
    //         <h1>{title}</h1>
    //         <h1>{author}</h1>
    //         <img src={image} alt="" style={{ width: '200px' }} />
    //       </div>
    //     );
    //   })}
    //   <h1>{user.favoriteBooks}</h1> */}
    </div>
  );
};

export default DashboardPage;
