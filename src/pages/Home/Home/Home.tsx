import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import {
  decrement,
  increment,
} from "../../../redux/reducers/counter/counterSlice";

export default function Home() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>home</h1>
      <div className="p-5 m-5 flex">
        <button
          className="p-5 border rounded-lg border-red-600"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <p className="p-5 mx-auto">{count}</p>
        <button
          className="p-5 border  rounded-lg border-red-600"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
      </div>
    </div>
  );
}
