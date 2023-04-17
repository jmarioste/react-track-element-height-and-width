import { useLayoutEffect, useRef, useState } from "react";

export default function Component() {
  const [items, setItems] = useState<string[]>([]);

  // Step 1. create a reference to the element we want to track
  const ref = useRef<HTMLDivElement>(null);
  // Step 2. create a state to track the dimensions of the element
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Step 3. useUseLayoutEffect over useEffect so that we update the dimensions after the dom has finished updating
  useLayoutEffect(() => {
    if (ref.current) {
      const { clientWidth, clientHeight } = ref.current;
      setDimensions({
        width: clientWidth,
        height: clientHeight,
      });
    }
  }, [items]);
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
      {/* Step 5. Assign the dimensions to the other element */}
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
