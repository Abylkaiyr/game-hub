import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
    onClick();
  };

  if (state) return <FaHeart color="#ff6b81" size={20} onClick={toggle} />;

  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
