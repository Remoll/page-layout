const parseText = (text: string) => {
  text = text.replace(
    /\[color=(.*?)\](.*?)\[\/color\]/g,
    '<span class="text-[$1]">$2</span>'
  );
  text = text.replace(
    /\[underline\](.*?)\[\/underline\]/g,
    '<span class="underline">$1</span>'
  );
  text = text.replace(/\n/g, "<br>");
  return text;
};

export default parseText;
