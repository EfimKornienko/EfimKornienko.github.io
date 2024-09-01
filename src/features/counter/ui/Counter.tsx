import { useCounterStore } from "../model/counterStore";

export const Counter = () => {
  const { increase, decrease } = useCounterStore();

  return (
    <div className="flex flex-row gap-4">
      <button
        className="px-1 py-2 bg-blue-500 rounded-md hover:bg-blue-600 text-white"
        onClick={increase}
      >
        +
      </button>
      <button
        className="px-1 py-2 bg-blue-500 rounded-md hover:bg-blue-600 text-white"
        onClick={decrease}
      >
        -
      </button>
    </div>
  );
};
