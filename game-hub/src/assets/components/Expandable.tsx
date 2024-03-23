interface Props {
  text: string;
  textlength?: number;
  expandable: boolean;
}

const Expandable = ({ text, textlength, expandable }: Props) => {
  let displayText = text; // Initialize displayText with full text

  if (!expandable && text.length !== undefined) {
    displayText = text.substring(0, textlength) + "...";
  }

  return <p style={{ width: "80%" }}>{displayText}</p>;
};

export default Expandable;
