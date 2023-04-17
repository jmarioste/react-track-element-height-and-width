import { useElementSize } from "@/hooks/useElementSize";
import { useState } from "react";

export default function Component() {
  const [items, setItems] = useState<string[]>([]);

  // Step 1: use custom hook
  const [ref, dimensions] = useElementSize([items]);
  return (
    <main className="max-w-xl mx-auto">
      <h1>React Height and Width Tutorial</h1>
      {/* Step 2. assign the ref to the tracked element */}
      <div className="bg-green-500 w-full p-4" ref={ref}>
        <h2 className="text-lg">Element A</h2>
        {items.map((item) => (
          <p>{item}</p>
        ))}
        <button
          className="bg-green-700 text-white w-full p-2"
          onClick={() => {
            const newItem = `item ${items.length + 1}`;
            setItems([newItem, ...items]);
          }}
        >
          Add item
        </button>
      </div>
      {/* Step 3. Assign the dimensions to the other element */}
      <div
        className="bg-indigo-500 text-white w-full p-4 absolute bottom-10 left-0"
        style={{ height: dimensions.height, width: dimensions.width }}
      >
        <h2 className="text-lg">Element B</h2>
        <p>
          The height and width of this absolutely positioned element should
          match element A
        </p>
      </div>
    </main>
  );
}
