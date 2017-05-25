export default [
  {
    input: 'follow step-by-step instructions',
    expect: 'Follow Step-by-Step Instructions',
  },
  {
    input: 'this sub-phrase is nice',
    expect: 'This Sub-Phrase Is Nice',
  },
  {
    input: 'catchy title: a subtitle',
    expect: 'Catchy Title: A Subtitle',
  },
  {
    input: 'catchy title: "a quoted subtitle"',
    expect: 'Catchy Title: "A Quoted Subtitle"',
  },
  {
    input: 'catchy title: “‘a twice quoted subtitle’”',
    expect: 'Catchy Title: “‘A Twice Quoted Subtitle’”',
  },
  {
    input: '"a title inside double quotes"',
    expect: '"A Title Inside Double Quotes"',
  },
  {
    input: 'all words capitalized',
    expect: 'All Words Capitalized',
  },
  {
    input: 'small words are for by and of lowercase',
    expect: 'Small Words Are for by and of Lowercase',
  },
  {
    input: 'a small word starts',
    expect: 'A Small Word Starts',
  },
  {
    input: 'a small word it ends on',
    expect: 'A Small Word It Ends On',
  },
  {
    input: 'do questions work?',
    expect: 'Do Questions Work?',
  },
  {
    input: 'multiple sentences. more than one.',
    expect: 'Multiple Sentences. More Than One.',
  },
  {
    input: 'Ends with small word of',
    expect: 'Ends With Small Word Of',
  },
  {
    input: 'double quoted "inner" word',
    expect: 'Double Quoted "Inner" Word',
  },
  {
    input: "single quoted 'inner' word",
    expect: "Single Quoted 'Inner' Word",
  },
  {
    input: 'fancy double quoted “inner” word',
    expect: 'Fancy Double Quoted “Inner” Word',
  },
  {
    input: 'fancy single quoted ‘inner’ word',
    expect: 'Fancy Single Quoted ‘Inner’ Word',
  },
  {
    input: 'this vs. that',
    expect: 'This vs. That',
  },
  {
    input: 'this vs that',
    expect: 'This vs That',
  },
  {
    input: 'this v. that',
    expect: 'This v. That',
  },
  {
    input: 'this v that',
    expect: 'This v That',
  },
  {
    input: 'address email@example.com titles',
    expect: 'Address email@example.com Titles',
  },
  {
    input: 'pass camelCase through',
    expect: 'Pass camelCase Through',
  },
  {
    input: "don't break",
    expect: "Don't Break",
  },
  {
    input: 'catchy title: substance subtitle',
    expect: 'Catchy Title: Substance Subtitle',
  },
  {
    input: 'we keep NASA capitalized',
    expect: 'We Keep NASA Capitalized',
  },
  {
    input: 'leave Q&A unscathed',
    expect: 'Leave Q&A Unscathed',
  },
  {
    input: 'Scott Moritz and TheStreet.com’s million iPhone la-la land',
    expect: 'Scott Moritz and TheStreet.com’s Million iPhone La-La Land',
  },
  {
    input: 'you have a http://example.com/foo/ title',
    expect: 'You Have a http://example.com/foo/ Title',
  },
  {
    input: 'your hair[cut] looks (nice)',
    expect: 'Your Hair[cut] Looks (Nice)',
  },
  {
    input: 'keep that colo(u)r',
    expect: 'Keep That Colo(u)r',
  },
  {
    input: 'have you read “The Lottery”?',
    expect: 'Have You Read “The Lottery”?',
  },
  {
    input: 'Read markdown_rules.txt to find out how _underscores around words_ will be interpreted',
    expect: 'Read markdown_rules.txt to Find Out How _Underscores Around Words_ Will Be Interpreted',
  },
  {
    input: 'Read markdown_rules.txt to find out how *asterisks around words* will be interpreted',
    expect: 'Read markdown_rules.txt to Find Out How *Asterisks Around Words* Will Be Interpreted',
  },
  {
    input: 'Notes and observations regarding Apple’s announcements from ‘The Beat Goes On’ special event',
    expect: 'Notes and Observations Regarding Apple’s Announcements From ‘The Beat Goes On’ Special Event',
  },
  {
    input: 'Drink this piña colada while you listen to ænima',
    expect: 'Drink This Piña Colada While You Listen to Ænima',
  },
  {
    input: 'capitalize hyphenated words on-demand',
    expect: 'Capitalize Hyphenated Words On-Demand',
  },
  {
    input: 'take them on: special lower cases',
    expect: 'Take Them On: Special Lower Cases',
  },
  {
    input: '<h1>some <b>HTML</b> &amp; entities</h1>',
    expect: '<h1>Some <b>HTML</b> &amp; Entities</h1>',
  },
  {
    input: { toString: () => 'a string' },
    expect: 'A String',
  },
  {
    input: null,
    expect: '',
  },
];
