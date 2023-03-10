import React from "react";
import RadioButton from "../RadioButton/RadioButton";
import Reset1 from "../Reset1/Reset1";
import { useState } from "react";
function YesNo({ suboptimal, suboptimalreset, suboptimal1 }) {
  const [suboptimals, setsuboptimals] = useState(false);
  return (
    <div>
      <RadioButton inputarray={suboptimal} />
      {suboptimal1.map((value, key) => (
        <span>
          <span
            key={key}
            className={value.classname}
            style={{ marginRight: "10px" }}
          >
            <label>
              <input
                type="radio"
                name={value.name}
                onClick={() => setsuboptimals(true)}
                id="status"
              />
              <span>{value.value}</span>
            </label>
          </span>

          <span>
            {suboptimals ? (
              <input type="text" name={value.txtname} className="size" />
            ) : null}
          </span>
        </span>
      ))}

      <Reset1 resetall={suboptimalreset} />
    </div>
  );
}
export default YesNo;
