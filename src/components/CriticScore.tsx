import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score >= 75 ? "green" : score >= 60 ? "yellow" : "red";
  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      colorScheme={score >= 75 ? "green" : "red"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
