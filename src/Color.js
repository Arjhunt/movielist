import { useState } from "react";
import { Colorbox } from "./Colorbox";

function Color() {
  const [color, setcolor] = useState("pink");
  const backcr = {
    backgroundColor: color
  };
  const [colorList, setcolorList] = useState(["red", "blue", "yellow", "black"]);
  return (
    <div>
      <input type="text" placeholder="Enter a Color" onChange={(e) => setcolor(e.target.value)} style={backcr} />
      <button onClick={() => setcolorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => {
        return (
          <Colorbox color={clr}></Colorbox>
        );
      }
      )}
    </div>
  );
}
