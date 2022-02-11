import { SetStateAction, useState } from "react";
import Star from "./Star";

function StarRating({ onChange }: any) {
  const [rating, setRating] = useState(0);
  const changeRating = (newRating: SetStateAction<number>) => {
    setRating(newRating);
    onChange?.(newRating);
  };
  return (
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
        />
      ))}
    </span>
  );
}
export default StarRating;
