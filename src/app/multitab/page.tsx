'use client'

import { useState } from "react";

let tabs = [
  { label: "A", content: "muahahaha" },
  { label: "B", content: "what the heck" },
  { label: "C", content: "lamo" },
  { label: "D", content: "4th" },
  { label: "E", content: "E" },
  { label: "N/A" }
];

for(let i = 0;i<100;i++){
  tabs.push( { label: `${i}`, content: `this is the ${i}th generated tab` } );
}

export default function Multitab(){
  const [curTab, setTab] = useState( tabs[0].label );

  return (
    <main>
      <div className="flex justify-left gap-2 w-full overflow-x-auto scrollbar-none">
        {tabs.map(({label, content}) => (
          <div
            className={`w-20 basis-20 shrink-0 ${label==curTab ? "bg-red-50" : "bg-blue-50"} hover:bg-red-50`}
            onClick={() => setTab(label)}
            key={label}
            draggable="true"
          >
            {label}
          </div>
        ))}
      </div>
      <div className="bg-green-50 w-full">
        {tabs.find(({label, content}) => (label==curTab))?.content ?? "Unknown tab"}
      </div>
    </main>
  );
}