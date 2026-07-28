export type AffixKind = "Derivational" | "Inflectional";
export type AffixPosition = "Prefix" | "Suffix";
export type QuestionCategory =
  | "Simple"
  | "Derivational only"
  | "Inflectional only"
  | "Derivational + inflectional"
  | "Multiple derivational affixes";

export interface AffixAnalysis {
  form: string;
  kind: AffixKind;
  position: AffixPosition;
  function: string;
}

export interface MorphologyQuestion {
  id: number;
  word: string;
  root: string;
  affixes: AffixAnalysis[];
  category: QuestionCategory;
  note: string;
}

export const questions: MorphologyQuestion[] = [
  {
    id: 1,
    word: "cat",
    root: "cat",
    affixes: [
    ],
    category: "Simple",
    note: "cat contains one morpheme and no affixes.",
  },
  {
    id: 2,
    word: "dog",
    root: "dog",
    affixes: [
    ],
    category: "Simple",
    note: "dog contains one morpheme and no affixes.",
  },
  {
    id: 3,
    word: "book",
    root: "book",
    affixes: [
    ],
    category: "Simple",
    note: "book contains one morpheme and no affixes.",
  },
  {
    id: 4,
    word: "chair",
    root: "chair",
    affixes: [
    ],
    category: "Simple",
    note: "chair contains one morpheme and no affixes.",
  },
  {
    id: 5,
    word: "lamp",
    root: "lamp",
    affixes: [
    ],
    category: "Simple",
    note: "lamp contains one morpheme and no affixes.",
  },
  {
    id: 6,
    word: "river",
    root: "river",
    affixes: [
    ],
    category: "Simple",
    note: "river contains one morpheme and no affixes.",
  },
  {
    id: 7,
    word: "cloud",
    root: "cloud",
    affixes: [
    ],
    category: "Simple",
    note: "cloud contains one morpheme and no affixes.",
  },
  {
    id: 8,
    word: "stone",
    root: "stone",
    affixes: [
    ],
    category: "Simple",
    note: "stone contains one morpheme and no affixes.",
  },
  {
    id: 9,
    word: "bread",
    root: "bread",
    affixes: [
    ],
    category: "Simple",
    note: "bread contains one morpheme and no affixes.",
  },
  {
    id: 10,
    word: "milk",
    root: "milk",
    affixes: [
    ],
    category: "Simple",
    note: "milk contains one morpheme and no affixes.",
  },
  {
    id: 11,
    word: "tree",
    root: "tree",
    affixes: [
    ],
    category: "Simple",
    note: "tree contains one morpheme and no affixes.",
  },
  {
    id: 12,
    word: "grass",
    root: "grass",
    affixes: [
    ],
    category: "Simple",
    note: "grass contains one morpheme and no affixes.",
  },
  {
    id: 13,
    word: "road",
    root: "road",
    affixes: [
    ],
    category: "Simple",
    note: "road contains one morpheme and no affixes.",
  },
  {
    id: 14,
    word: "house",
    root: "house",
    affixes: [
    ],
    category: "Simple",
    note: "house contains one morpheme and no affixes.",
  },
  {
    id: 15,
    word: "child",
    root: "child",
    affixes: [
    ],
    category: "Simple",
    note: "child contains one morpheme and no affixes.",
  },
  {
    id: 16,
    word: "friend",
    root: "friend",
    affixes: [
    ],
    category: "Simple",
    note: "friend contains one morpheme and no affixes.",
  },
  {
    id: 17,
    word: "hand",
    root: "hand",
    affixes: [
    ],
    category: "Simple",
    note: "hand contains one morpheme and no affixes.",
  },
  {
    id: 18,
    word: "foot",
    root: "foot",
    affixes: [
    ],
    category: "Simple",
    note: "foot contains one morpheme and no affixes.",
  },
  {
    id: 19,
    word: "eye",
    root: "eye",
    affixes: [
    ],
    category: "Simple",
    note: "eye contains one morpheme and no affixes.",
  },
  {
    id: 20,
    word: "ear",
    root: "ear",
    affixes: [
    ],
    category: "Simple",
    note: "ear contains one morpheme and no affixes.",
  },
  {
    id: 21,
    word: "sun",
    root: "sun",
    affixes: [
    ],
    category: "Simple",
    note: "sun contains one morpheme and no affixes.",
  },
  {
    id: 22,
    word: "moon",
    root: "moon",
    affixes: [
    ],
    category: "Simple",
    note: "moon contains one morpheme and no affixes.",
  },
  {
    id: 23,
    word: "star",
    root: "star",
    affixes: [
    ],
    category: "Simple",
    note: "star contains one morpheme and no affixes.",
  },
  {
    id: 24,
    word: "rain",
    root: "rain",
    affixes: [
    ],
    category: "Simple",
    note: "rain contains one morpheme and no affixes.",
  },
  {
    id: 25,
    word: "snow",
    root: "snow",
    affixes: [
    ],
    category: "Simple",
    note: "snow contains one morpheme and no affixes.",
  },
  {
    id: 26,
    word: "wind",
    root: "wind",
    affixes: [
    ],
    category: "Simple",
    note: "wind contains one morpheme and no affixes.",
  },
  {
    id: 27,
    word: "fire",
    root: "fire",
    affixes: [
    ],
    category: "Simple",
    note: "fire contains one morpheme and no affixes.",
  },
  {
    id: 28,
    word: "salt",
    root: "salt",
    affixes: [
    ],
    category: "Simple",
    note: "salt contains one morpheme and no affixes.",
  },
  {
    id: 29,
    word: "fish",
    root: "fish",
    affixes: [
    ],
    category: "Simple",
    note: "fish contains one morpheme and no affixes.",
  },
  {
    id: 30,
    word: "boat",
    root: "boat",
    affixes: [
    ],
    category: "Simple",
    note: "boat contains one morpheme and no affixes.",
  },
  {
    id: 31,
    word: "unhappy",
    root: "happy",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of happy.",
  },
  {
    id: 32,
    word: "unfair",
    root: "fair",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of fair.",
  },
  {
    id: 33,
    word: "unsafe",
    root: "safe",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of safe.",
  },
  {
    id: 34,
    word: "unkind",
    root: "kind",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of kind.",
  },
  {
    id: 35,
    word: "unclear",
    root: "clear",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of clear.",
  },
  {
    id: 36,
    word: "dishonest",
    root: "honest",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses negation",
      },
    ],
    category: "Derivational only",
    note: "dis- changes the lexical meaning of honest.",
  },
  {
    id: 37,
    word: "dislike",
    root: "like",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses negative attitude",
      },
    ],
    category: "Derivational only",
    note: "dis- changes the lexical meaning of like.",
  },
  {
    id: 38,
    word: "disapprove",
    root: "approve",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses negation",
      },
    ],
    category: "Derivational only",
    note: "dis- changes the lexical meaning of approve.",
  },
  {
    id: 39,
    word: "disconnect",
    root: "connect",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses reversal or separation",
      },
    ],
    category: "Derivational only",
    note: "dis- changes the lexical meaning of connect.",
  },
  {
    id: 40,
    word: "rewrite",
    root: "write",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
    ],
    category: "Derivational only",
    note: "re- changes the lexical meaning of write.",
  },
  {
    id: 41,
    word: "reread",
    root: "read",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
    ],
    category: "Derivational only",
    note: "re- changes the lexical meaning of read.",
  },
  {
    id: 42,
    word: "rebuild",
    root: "build",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
    ],
    category: "Derivational only",
    note: "re- changes the lexical meaning of build.",
  },
  {
    id: 43,
    word: "preheat",
    root: "heat",
    affixes: [
      {
        form: "pre-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'before'",
      },
    ],
    category: "Derivational only",
    note: "pre- changes the lexical meaning of heat.",
  },
  {
    id: 44,
    word: "preview",
    root: "view",
    affixes: [
      {
        form: "pre-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'before'",
      },
    ],
    category: "Derivational only",
    note: "pre- changes the lexical meaning of view.",
  },
  {
    id: 45,
    word: "preschool",
    root: "school",
    affixes: [
      {
        form: "pre-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'before'",
      },
    ],
    category: "Derivational only",
    note: "pre- changes the lexical meaning of school.",
  },
  {
    id: 46,
    word: "misread",
    root: "read",
    affixes: [
      {
        form: "mis-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'incorrectly'",
      },
    ],
    category: "Derivational only",
    note: "mis- changes the lexical meaning of read.",
  },
  {
    id: 47,
    word: "misjudge",
    root: "judge",
    affixes: [
      {
        form: "mis-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'incorrectly'",
      },
    ],
    category: "Derivational only",
    note: "mis- changes the lexical meaning of judge.",
  },
  {
    id: 48,
    word: "inactive",
    root: "active",
    affixes: [
      {
        form: "in-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "in- changes the lexical meaning of active.",
  },
  {
    id: 49,
    word: "incorrect",
    root: "correct",
    affixes: [
      {
        form: "in-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "in- changes the lexical meaning of correct.",
  },
  {
    id: 50,
    word: "illegal",
    root: "legal",
    affixes: [
      {
        form: "il-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'; il- is an allomorph of in-",
      },
    ],
    category: "Derivational only",
    note: "il- changes the lexical meaning of legal.",
  },
  {
    id: 51,
    word: "teacher",
    root: "teach",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an agent noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from teach.",
  },
  {
    id: 52,
    word: "singer",
    root: "sing",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an agent noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from sing.",
  },
  {
    id: 53,
    word: "painter",
    root: "paint",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an agent noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from paint.",
  },
  {
    id: 54,
    word: "worker",
    root: "work",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an agent noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from work.",
  },
  {
    id: 55,
    word: "kindness",
    root: "kind",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Derivational only",
    note: "-ness creates a new lexeme from kind.",
  },
  {
    id: 56,
    word: "darkness",
    root: "dark",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Derivational only",
    note: "-ness creates a new lexeme from dark.",
  },
  {
    id: 57,
    word: "happiness",
    root: "happy",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Derivational only",
    note: "-ness creates a new lexeme from happy.",
  },
  {
    id: 58,
    word: "movement",
    root: "move",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ment creates a new lexeme from move.",
  },
  {
    id: 59,
    word: "agreement",
    root: "agree",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ment creates a new lexeme from agree.",
  },
  {
    id: 60,
    word: "readable",
    root: "read",
    affixes: [
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'able to be'",
      },
    ],
    category: "Derivational only",
    note: "-able creates a new lexeme from read.",
  },
  {
    id: 61,
    word: "washable",
    root: "wash",
    affixes: [
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'able to be'",
      },
    ],
    category: "Derivational only",
    note: "-able creates a new lexeme from wash.",
  },
  {
    id: 62,
    word: "helpful",
    root: "help",
    affixes: [
      {
        form: "-ful",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-ful creates a new lexeme from help.",
  },
  {
    id: 63,
    word: "careless",
    root: "care",
    affixes: [
      {
        form: "-less",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'without'",
      },
    ],
    category: "Derivational only",
    note: "-less creates a new lexeme from care.",
  },
  {
    id: 64,
    word: "hopeful",
    root: "hope",
    affixes: [
      {
        form: "-ful",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-ful creates a new lexeme from hope.",
  },
  {
    id: 65,
    word: "hopeless",
    root: "hope",
    affixes: [
      {
        form: "-less",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'without'",
      },
    ],
    category: "Derivational only",
    note: "-less creates a new lexeme from hope.",
  },
  {
    id: 66,
    word: "national",
    root: "nation",
    affixes: [
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-al creates a new lexeme from nation.",
  },
  {
    id: 67,
    word: "personal",
    root: "person",
    affixes: [
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-al creates a new lexeme from person.",
  },
  {
    id: 68,
    word: "modernize",
    root: "modern",
    affixes: [
      {
        form: "-ize",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a verb",
      },
    ],
    category: "Derivational only",
    note: "-ize creates a new lexeme from modern.",
  },
  {
    id: 69,
    word: "softly",
    root: "soft",
    affixes: [
      {
        form: "-ly",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adverb",
      },
    ],
    category: "Derivational only",
    note: "-ly creates a new lexeme from soft.",
  },
  {
    id: 70,
    word: "slowly",
    root: "slow",
    affixes: [
      {
        form: "-ly",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adverb",
      },
    ],
    category: "Derivational only",
    note: "-ly creates a new lexeme from slow.",
  },
  {
    id: 71,
    word: "friendship",
    root: "friend",
    affixes: [
      {
        form: "-ship",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ship creates a new lexeme from friend.",
  },
  {
    id: 72,
    word: "childhood",
    root: "child",
    affixes: [
      {
        form: "-hood",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-hood creates a new lexeme from child.",
  },
  {
    id: 73,
    word: "booklet",
    root: "book",
    affixes: [
      {
        form: "-let",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a diminutive noun",
      },
    ],
    category: "Derivational only",
    note: "-let creates a new lexeme from book.",
  },
  {
    id: 74,
    word: "duckling",
    root: "duck",
    affixes: [
      {
        form: "-ling",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ling creates a new lexeme from duck.",
  },
  {
    id: 75,
    word: "artist",
    root: "art",
    affixes: [
      {
        form: "-ist",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a person noun",
      },
    ],
    category: "Derivational only",
    note: "-ist creates a new lexeme from art.",
  },
  {
    id: 76,
    word: "pianist",
    root: "piano",
    affixes: [
      {
        form: "-ist",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a person noun",
      },
    ],
    category: "Derivational only",
    note: "-ist creates a new lexeme from piano.",
  },
  {
    id: 77,
    word: "employee",
    root: "employ",
    affixes: [
      {
        form: "-ee",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a person noun",
      },
    ],
    category: "Derivational only",
    note: "-ee creates a new lexeme from employ.",
  },
  {
    id: 78,
    word: "trainee",
    root: "train",
    affixes: [
      {
        form: "-ee",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a person noun",
      },
    ],
    category: "Derivational only",
    note: "-ee creates a new lexeme from train.",
  },
  {
    id: 79,
    word: "government",
    root: "govern",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ment creates a new lexeme from govern.",
  },
  {
    id: 80,
    word: "arrival",
    root: "arrive",
    affixes: [
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-al creates a new lexeme from arrive.",
  },
  {
    id: 81,
    word: "cats",
    root: "cat",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 82,
    word: "dogs",
    root: "dog",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 83,
    word: "books",
    root: "book",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 84,
    word: "chairs",
    root: "chair",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 85,
    word: "lamps",
    root: "lamp",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 86,
    word: "rivers",
    root: "river",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 87,
    word: "clouds",
    root: "cloud",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 88,
    word: "stones",
    root: "stone",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 89,
    word: "roads",
    root: "road",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 90,
    word: "houses",
    root: "house",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 91,
    word: "boats",
    root: "boat",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 92,
    word: "stars",
    root: "star",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 93,
    word: "hands",
    root: "hand",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 94,
    word: "apples",
    root: "apple",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 95,
    word: "trees",
    root: "tree",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Inflectional only",
    note: "-s marks plural number without creating a new lexeme.",
  },
  {
    id: 96,
    word: "walked",
    root: "walk",
    affixes: [
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Inflectional only",
    note: "-ed supplies past-tense information.",
  },
  {
    id: 97,
    word: "jumped",
    root: "jump",
    affixes: [
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Inflectional only",
    note: "-ed supplies past-tense information.",
  },
  {
    id: 98,
    word: "played",
    root: "play",
    affixes: [
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Inflectional only",
    note: "-ed supplies past-tense information.",
  },
  {
    id: 99,
    word: "opened",
    root: "open",
    affixes: [
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Inflectional only",
    note: "-ed supplies past-tense information.",
  },
  {
    id: 100,
    word: "cleaned",
    root: "clean",
    affixes: [
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Inflectional only",
    note: "-ed supplies past-tense information.",
  },
  {
    id: 101,
    word: "watched",
    root: "watch",
    affixes: [
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Inflectional only",
    note: "-ed supplies past-tense information.",
  },
  {
    id: 102,
    word: "called",
    root: "call",
    affixes: [
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Inflectional only",
    note: "-ed supplies past-tense information.",
  },
  {
    id: 103,
    word: "helped",
    root: "help",
    affixes: [
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Inflectional only",
    note: "-ed supplies past-tense information.",
  },
  {
    id: 104,
    word: "painted",
    root: "paint",
    affixes: [
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Inflectional only",
    note: "-ed supplies past-tense information.",
  },
  {
    id: 105,
    word: "washed",
    root: "wash",
    affixes: [
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Inflectional only",
    note: "-ed supplies past-tense information.",
  },
  {
    id: 106,
    word: "walking",
    root: "walk",
    affixes: [
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Inflectional only",
    note: "-ing supplies a grammatical verb form.",
  },
  {
    id: 107,
    word: "jumping",
    root: "jump",
    affixes: [
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Inflectional only",
    note: "-ing supplies a grammatical verb form.",
  },
  {
    id: 108,
    word: "playing",
    root: "play",
    affixes: [
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Inflectional only",
    note: "-ing supplies a grammatical verb form.",
  },
  {
    id: 109,
    word: "opening",
    root: "open",
    affixes: [
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Inflectional only",
    note: "-ing supplies a grammatical verb form.",
  },
  {
    id: 110,
    word: "cleaning",
    root: "clean",
    affixes: [
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Inflectional only",
    note: "-ing supplies a grammatical verb form.",
  },
  {
    id: 111,
    word: "watching",
    root: "watch",
    affixes: [
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Inflectional only",
    note: "-ing supplies a grammatical verb form.",
  },
  {
    id: 112,
    word: "calling",
    root: "call",
    affixes: [
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Inflectional only",
    note: "-ing supplies a grammatical verb form.",
  },
  {
    id: 113,
    word: "helping",
    root: "help",
    affixes: [
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Inflectional only",
    note: "-ing supplies a grammatical verb form.",
  },
  {
    id: 114,
    word: "painting",
    root: "paint",
    affixes: [
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Inflectional only",
    note: "-ing supplies a grammatical verb form.",
  },
  {
    id: 115,
    word: "washing",
    root: "wash",
    affixes: [
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Inflectional only",
    note: "-ing supplies a grammatical verb form.",
  },
  {
    id: 116,
    word: "walks",
    root: "walk",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks third-person singular present tense",
      },
    ],
    category: "Inflectional only",
    note: "-s marks subject agreement.",
  },
  {
    id: 117,
    word: "jumps",
    root: "jump",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks third-person singular present tense",
      },
    ],
    category: "Inflectional only",
    note: "-s marks subject agreement.",
  },
  {
    id: 118,
    word: "plays",
    root: "play",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks third-person singular present tense",
      },
    ],
    category: "Inflectional only",
    note: "-s marks subject agreement.",
  },
  {
    id: 119,
    word: "opens",
    root: "open",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks third-person singular present tense",
      },
    ],
    category: "Inflectional only",
    note: "-s marks subject agreement.",
  },
  {
    id: 120,
    word: "cleans",
    root: "clean",
    affixes: [
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks third-person singular present tense",
      },
    ],
    category: "Inflectional only",
    note: "-s marks subject agreement.",
  },
  {
    id: 121,
    word: "taller",
    root: "tall",
    affixes: [
      {
        form: "-er",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks comparative degree",
      },
    ],
    category: "Inflectional only",
    note: "-er marks comparative degree.",
  },
  {
    id: 122,
    word: "shorter",
    root: "short",
    affixes: [
      {
        form: "-er",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks comparative degree",
      },
    ],
    category: "Inflectional only",
    note: "-er marks comparative degree.",
  },
  {
    id: 123,
    word: "faster",
    root: "fast",
    affixes: [
      {
        form: "-er",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks comparative degree",
      },
    ],
    category: "Inflectional only",
    note: "-er marks comparative degree.",
  },
  {
    id: 124,
    word: "colder",
    root: "cold",
    affixes: [
      {
        form: "-er",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks comparative degree",
      },
    ],
    category: "Inflectional only",
    note: "-er marks comparative degree.",
  },
  {
    id: 125,
    word: "older",
    root: "old",
    affixes: [
      {
        form: "-er",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks comparative degree",
      },
    ],
    category: "Inflectional only",
    note: "-er marks comparative degree.",
  },
  {
    id: 126,
    word: "tallest",
    root: "tall",
    affixes: [
      {
        form: "-est",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks superlative degree",
      },
    ],
    category: "Inflectional only",
    note: "-est marks superlative degree.",
  },
  {
    id: 127,
    word: "shortest",
    root: "short",
    affixes: [
      {
        form: "-est",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks superlative degree",
      },
    ],
    category: "Inflectional only",
    note: "-est marks superlative degree.",
  },
  {
    id: 128,
    word: "fastest",
    root: "fast",
    affixes: [
      {
        form: "-est",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks superlative degree",
      },
    ],
    category: "Inflectional only",
    note: "-est marks superlative degree.",
  },
  {
    id: 129,
    word: "coldest",
    root: "cold",
    affixes: [
      {
        form: "-est",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks superlative degree",
      },
    ],
    category: "Inflectional only",
    note: "-est marks superlative degree.",
  },
  {
    id: 130,
    word: "oldest",
    root: "old",
    affixes: [
      {
        form: "-est",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks superlative degree",
      },
    ],
    category: "Inflectional only",
    note: "-est marks superlative degree.",
  },
  {
    id: 131,
    word: "teachers",
    root: "teach",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun, then -s marks it as plural.",
  },
  {
    id: 132,
    word: "singers",
    root: "sing",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun, then -s marks it as plural.",
  },
  {
    id: 133,
    word: "painters",
    root: "paint",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun, then -s marks it as plural.",
  },
  {
    id: 134,
    word: "workers",
    root: "work",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun, then -s marks it as plural.",
  },
  {
    id: 135,
    word: "artists",
    root: "art",
    affixes: [
      {
        form: "-ist",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ist creates a noun, then -s marks it as plural.",
  },
  {
    id: 136,
    word: "pianists",
    root: "piano",
    affixes: [
      {
        form: "-ist",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ist creates a noun, then -s marks it as plural.",
  },
  {
    id: 137,
    word: "employees",
    root: "employ",
    affixes: [
      {
        form: "-ee",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ee creates a noun, then -s marks it as plural.",
  },
  {
    id: 138,
    word: "trainees",
    root: "train",
    affixes: [
      {
        form: "-ee",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ee creates a noun, then -s marks it as plural.",
  },
  {
    id: 139,
    word: "governments",
    root: "govern",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ment creates a noun, then -s marks it as plural.",
  },
  {
    id: 140,
    word: "arrivals",
    root: "arrive",
    affixes: [
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-al creates a noun, then -s marks it as plural.",
  },
  {
    id: 141,
    word: "friendships",
    root: "friend",
    affixes: [
      {
        form: "-ship",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ship creates a noun, then -s marks it as plural.",
  },
  {
    id: 142,
    word: "childhoods",
    root: "child",
    affixes: [
      {
        form: "-hood",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-hood creates a noun, then -s marks it as plural.",
  },
  {
    id: 143,
    word: "booklets",
    root: "book",
    affixes: [
      {
        form: "-let",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-let creates a noun, then -s marks it as plural.",
  },
  {
    id: 144,
    word: "ducklings",
    root: "duck",
    affixes: [
      {
        form: "-ling",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ling creates a noun, then -s marks it as plural.",
  },
  {
    id: 145,
    word: "movements",
    root: "move",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ment creates a noun, then -s marks it as plural.",
  },
  {
    id: 146,
    word: "agreements",
    root: "agree",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ment creates a noun, then -s marks it as plural.",
  },
  {
    id: 147,
    word: "helpers",
    root: "help",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun, then -s marks it as plural.",
  },
  {
    id: 148,
    word: "readers",
    root: "read",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun, then -s marks it as plural.",
  },
  {
    id: 149,
    word: "builders",
    root: "build",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun, then -s marks it as plural.",
  },
  {
    id: 150,
    word: "drivers",
    root: "drive",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a new noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun, then -s marks it as plural.",
  },
  {
    id: 151,
    word: "modernized",
    root: "modern",
    affixes: [
      {
        form: "-ize",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a verb",
      },
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Derivational + inflectional",
    note: "A derivational affix builds a new lexeme, and an inflectional affix adds grammatical information.",
  },
  {
    id: 152,
    word: "rereading",
    root: "read",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Derivational + inflectional",
    note: "A derivational affix builds a new lexeme, and an inflectional affix adds grammatical information.",
  },
  {
    id: 153,
    word: "previewed",
    root: "view",
    affixes: [
      {
        form: "pre-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'before'",
      },
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Derivational + inflectional",
    note: "A derivational affix builds a new lexeme, and an inflectional affix adds grammatical information.",
  },
  {
    id: 154,
    word: "preheated",
    root: "heat",
    affixes: [
      {
        form: "pre-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'before'",
      },
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Derivational + inflectional",
    note: "A derivational affix builds a new lexeme, and an inflectional affix adds grammatical information.",
  },
  {
    id: 155,
    word: "misjudged",
    root: "judge",
    affixes: [
      {
        form: "mis-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'incorrectly'",
      },
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Derivational + inflectional",
    note: "A derivational affix builds a new lexeme, and an inflectional affix adds grammatical information.",
  },
  {
    id: 156,
    word: "disconnected",
    root: "connect",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses reversal or separation",
      },
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Derivational + inflectional",
    note: "A derivational affix builds a new lexeme, and an inflectional affix adds grammatical information.",
  },
  {
    id: 157,
    word: "replayed",
    root: "play",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Derivational + inflectional",
    note: "A derivational affix builds a new lexeme, and an inflectional affix adds grammatical information.",
  },
  {
    id: 158,
    word: "rebuilding",
    root: "build",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Derivational + inflectional",
    note: "A derivational affix builds a new lexeme, and an inflectional affix adds grammatical information.",
  },
  {
    id: 159,
    word: "disliking",
    root: "like",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses negative attitude",
      },
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Derivational + inflectional",
    note: "A derivational affix builds a new lexeme, and an inflectional affix adds grammatical information.",
  },
  {
    id: 160,
    word: "disapproved",
    root: "approve",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses negation",
      },
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Derivational + inflectional",
    note: "A derivational affix builds a new lexeme, and an inflectional affix adds grammatical information.",
  },
  {
    id: 161,
    word: "nonmembers",
    root: "member",
    affixes: [
      {
        form: "non-",
        kind: "Derivational",
        position: "Prefix",
        function: "changes lexical meaning",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "The prefix is derivational and the suffix is inflectional.",
  },
  {
    id: 162,
    word: "ex-presidents",
    root: "president",
    affixes: [
      {
        form: "ex-",
        kind: "Derivational",
        position: "Prefix",
        function: "changes lexical meaning",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "The prefix is derivational and the suffix is inflectional.",
  },
  {
    id: 163,
    word: "coauthors",
    root: "author",
    affixes: [
      {
        form: "co-",
        kind: "Derivational",
        position: "Prefix",
        function: "changes lexical meaning",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "The prefix is derivational and the suffix is inflectional.",
  },
  {
    id: 164,
    word: "overcooked",
    root: "cook",
    affixes: [
      {
        form: "over-",
        kind: "Derivational",
        position: "Prefix",
        function: "changes lexical meaning",
      },
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Derivational + inflectional",
    note: "The prefix is derivational and the suffix is inflectional.",
  },
  {
    id: 165,
    word: "prewashed",
    root: "wash",
    affixes: [
      {
        form: "pre-",
        kind: "Derivational",
        position: "Prefix",
        function: "changes lexical meaning",
      },
      {
        form: "-ed",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks past tense",
      },
    ],
    category: "Derivational + inflectional",
    note: "The prefix is derivational and the suffix is inflectional.",
  },
  {
    id: 166,
    word: "unhappiness",
    root: "happy",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 167,
    word: "unfairness",
    root: "fair",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 168,
    word: "unkindness",
    root: "kind",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 169,
    word: "dishonesty",
    root: "honest",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses negation",
      },
      {
        form: "-y",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 170,
    word: "disagreement",
    root: "agree",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses opposition",
      },
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 171,
    word: "reusable",
    root: "use",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 172,
    word: "prepayment",
    root: "pay",
    affixes: [
      {
        form: "pre-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'before'",
      },
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 173,
    word: "misalignment",
    root: "align",
    affixes: [
      {
        form: "mis-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'incorrectly'",
      },
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 174,
    word: "nonpayment",
    root: "pay",
    affixes: [
      {
        form: "non-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses absence or negation",
      },
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 175,
    word: "overstatement",
    root: "state",
    affixes: [
      {
        form: "over-",
        kind: "Derivational",
        position: "Prefix",
        function: "means excessively",
      },
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 176,
    word: "underdevelopment",
    root: "develop",
    affixes: [
      {
        form: "under-",
        kind: "Derivational",
        position: "Prefix",
        function: "means insufficiently",
      },
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 177,
    word: "coauthorship",
    root: "author",
    affixes: [
      {
        form: "co-",
        kind: "Derivational",
        position: "Prefix",
        function: "means jointly",
      },
      {
        form: "-ship",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 178,
    word: "carelessness",
    root: "care",
    affixes: [
      {
        form: "-less",
        kind: "Derivational",
        position: "Suffix",
        function: "means 'without'",
      },
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 179,
    word: "helpfulness",
    root: "help",
    affixes: [
      {
        form: "-ful",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
  {
    id: 180,
    word: "hopelessness",
    root: "hope",
    affixes: [
      {
        form: "-less",
        kind: "Derivational",
        position: "Suffix",
        function: "means 'without'",
      },
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Each affix contributes to building a new lexeme.",
  },
];