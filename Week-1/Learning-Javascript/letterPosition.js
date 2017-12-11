function letterPosition(str)
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
      letters[str[i]] = [i];
    } else {
      letters[str[i]].push(i);
    }
  }
  return letters
}

console.log(letterPosition("lighthouse in the house"));
