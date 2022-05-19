import { incremented, incremented5 } from "./features/counter/counter-slice";
import { useFetchUserNamesQuery } from "./features/user/user-api-slice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const count1 = useAppSelector((state) => state.counterReducer.value1);
  const count10 = useAppSelector((state) => state.counterReducer.value10);
  const dispatch = useAppDispatch();

  const { data = [], isFetching } = useFetchUserNamesQuery("idk");
  const handleCounter = () => {
    dispatch(incremented());
  };
  const handleCounter5 = (num: number) => {
    dispatch(incremented5(num));
  };

  return (
    <div>
      <button onClick={handleCounter}>count is 1: {count1}</button>
      <button onClick={() => handleCounter5(10)}>count is 10: {count10}</button>
      <p> No of dog fetch {data.length}</p>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>phone</th>
            <th>username</th>
            <th>password</th>
          </tr>
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>
                  {user.name.firstname} {user.name.lastname}
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
