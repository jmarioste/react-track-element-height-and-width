import { useState } from "react";
import { useElementSize } from "usehooks-ts";

export default function Component() {
  const [items, setItems] = useState<string[]>([]);

  // Step 1. use the useElementSize hook.
  // this returns a ref and the dimensions/size object
  const [ref, size] = useElementSize();
  return (
    <main className="max-w-xl mx-auto">
      <h1>React Height and Width Tutorial</h1>
      {/* Step 4. assign the ref to the tracked element */}
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
      {/* Step 5. Assign the size object to the other element */}
      <div
        className="bg-indigo-500 text-white w-full p-4 absolute bottom-10 left-0"
        style={{ height: size.height, width: size.width }}
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
