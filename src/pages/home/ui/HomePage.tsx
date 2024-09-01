import { Counter, useCounterStore } from "../../../features/counter";
import { WebApp } from "../../../shared/twa-adapter";

export const HomePage = () => {
  const { count } = useCounterStore();

  return (
    <div className="flex flex-col gap-4 justify-center px-8 py-4">
      <h1 className="text-blue-600">{count}</h1>
      <Counter />
      <div>
        <button
          className="px-1 py-2 bg-blue-500 rounded-md hover:bg-blue-600 text-white"
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          test web app
        </button>
      </div>
    </div>
  );
};
