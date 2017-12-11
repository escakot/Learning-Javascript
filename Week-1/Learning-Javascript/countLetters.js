function countLetters(str)
{
  let letters = {};

  for (let i = 0; i < str.length; i++)
  {
    if (str[i] === " ")
    {
      continue
    }

    if (letters[str[i]] === undefined)
    {
      letters[str[i]] = 1;
    } else {
      letters[str[i]]++;
    }
  }

  return letters
}

let counted = countLetters("lighthouse in the house")
console.log(counted)
