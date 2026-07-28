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

  {
    id: 181,
    word: "apple",
    root: "apple",
    affixes: [
    ],
    category: "Simple",
    note: "apple contains one morpheme and no affixes.",
  },
  {
    id: 182,
    word: "table",
    root: "table",
    affixes: [
    ],
    category: "Simple",
    note: "table contains one morpheme and no affixes.",
  },
  {
    id: 183,
    word: "window",
    root: "window",
    affixes: [
    ],
    category: "Simple",
    note: "window contains one morpheme and no affixes.",
  },
  {
    id: 184,
    word: "garden",
    root: "garden",
    affixes: [
    ],
    category: "Simple",
    note: "garden contains one morpheme and no affixes.",
  },
  {
    id: 185,
    word: "pencil",
    root: "pencil",
    affixes: [
    ],
    category: "Simple",
    note: "pencil contains one morpheme and no affixes.",
  },
  {
    id: 186,
    word: "paper",
    root: "paper",
    affixes: [
    ],
    category: "Simple",
    note: "paper contains one morpheme and no affixes.",
  },
  {
    id: 187,
    word: "school",
    root: "school",
    affixes: [
    ],
    category: "Simple",
    note: "school contains one morpheme and no affixes.",
  },
  {
    id: 188,
    word: "water",
    root: "water",
    affixes: [
    ],
    category: "Simple",
    note: "water contains one morpheme and no affixes.",
  },
  {
    id: 189,
    word: "metal",
    root: "metal",
    affixes: [
    ],
    category: "Simple",
    note: "metal contains one morpheme and no affixes.",
  },
  {
    id: 190,
    word: "glass",
    root: "glass",
    affixes: [
    ],
    category: "Simple",
    note: "glass contains one morpheme and no affixes.",
  },
  {
    id: 191,
    word: "sand",
    root: "sand",
    affixes: [
    ],
    category: "Simple",
    note: "sand contains one morpheme and no affixes.",
  },
  {
    id: 192,
    word: "clock",
    root: "clock",
    affixes: [
    ],
    category: "Simple",
    note: "clock contains one morpheme and no affixes.",
  },
  {
    id: 193,
    word: "phone",
    root: "phone",
    affixes: [
    ],
    category: "Simple",
    note: "phone contains one morpheme and no affixes.",
  },
  {
    id: 194,
    word: "train",
    root: "train",
    affixes: [
    ],
    category: "Simple",
    note: "train contains one morpheme and no affixes.",
  },
  {
    id: 195,
    word: "horse",
    root: "horse",
    affixes: [
    ],
    category: "Simple",
    note: "horse contains one morpheme and no affixes.",
  },
  {
    id: 196,
    word: "sheep",
    root: "sheep",
    affixes: [
    ],
    category: "Simple",
    note: "sheep contains one morpheme and no affixes.",
  },
  {
    id: 197,
    word: "mouse",
    root: "mouse",
    affixes: [
    ],
    category: "Simple",
    note: "mouse contains one morpheme and no affixes.",
  },
  {
    id: 198,
    word: "bird",
    root: "bird",
    affixes: [
    ],
    category: "Simple",
    note: "bird contains one morpheme and no affixes.",
  },
  {
    id: 199,
    word: "lake",
    root: "lake",
    affixes: [
    ],
    category: "Simple",
    note: "lake contains one morpheme and no affixes.",
  },
  {
    id: 200,
    word: "field",
    root: "field",
    affixes: [
    ],
    category: "Simple",
    note: "field contains one morpheme and no affixes.",
  },
  {
    id: 201,
    word: "floor",
    root: "floor",
    affixes: [
    ],
    category: "Simple",
    note: "floor contains one morpheme and no affixes.",
  },
  {
    id: 202,
    word: "wall",
    root: "wall",
    affixes: [
    ],
    category: "Simple",
    note: "wall contains one morpheme and no affixes.",
  },
  {
    id: 203,
    word: "roof",
    root: "roof",
    affixes: [
    ],
    category: "Simple",
    note: "roof contains one morpheme and no affixes.",
  },
  {
    id: 204,
    word: "door",
    root: "door",
    affixes: [
    ],
    category: "Simple",
    note: "door contains one morpheme and no affixes.",
  },
  {
    id: 205,
    word: "seed",
    root: "seed",
    affixes: [
    ],
    category: "Simple",
    note: "seed contains one morpheme and no affixes.",
  },
  {
    id: 206,
    word: "leaf",
    root: "leaf",
    affixes: [
    ],
    category: "Simple",
    note: "leaf contains one morpheme and no affixes.",
  },
  {
    id: 207,
    word: "root",
    root: "root",
    affixes: [
    ],
    category: "Simple",
    note: "root contains one morpheme and no affixes.",
  },
  {
    id: 208,
    word: "flower",
    root: "flower",
    affixes: [
    ],
    category: "Simple",
    note: "flower contains one morpheme and no affixes.",
  },
  {
    id: 209,
    word: "shirt",
    root: "shirt",
    affixes: [
    ],
    category: "Simple",
    note: "shirt contains one morpheme and no affixes.",
  },
  {
    id: 210,
    word: "shoe",
    root: "shoe",
    affixes: [
    ],
    category: "Simple",
    note: "shoe contains one morpheme and no affixes.",
  },
  {
    id: 211,
    word: "coat",
    root: "coat",
    affixes: [
    ],
    category: "Simple",
    note: "coat contains one morpheme and no affixes.",
  },
  {
    id: 212,
    word: "cup",
    root: "cup",
    affixes: [
    ],
    category: "Simple",
    note: "cup contains one morpheme and no affixes.",
  },
  {
    id: 213,
    word: "plate",
    root: "plate",
    affixes: [
    ],
    category: "Simple",
    note: "plate contains one morpheme and no affixes.",
  },
  {
    id: 214,
    word: "fork",
    root: "fork",
    affixes: [
    ],
    category: "Simple",
    note: "fork contains one morpheme and no affixes.",
  },
  {
    id: 215,
    word: "spoon",
    root: "spoon",
    affixes: [
    ],
    category: "Simple",
    note: "spoon contains one morpheme and no affixes.",
  },
  {
    id: 216,
    word: "bowl",
    root: "bowl",
    affixes: [
    ],
    category: "Simple",
    note: "bowl contains one morpheme and no affixes.",
  },
  {
    id: 217,
    word: "bed",
    root: "bed",
    affixes: [
    ],
    category: "Simple",
    note: "bed contains one morpheme and no affixes.",
  },
  {
    id: 218,
    word: "desk",
    root: "desk",
    affixes: [
    ],
    category: "Simple",
    note: "desk contains one morpheme and no affixes.",
  },
  {
    id: 219,
    word: "bag",
    root: "bag",
    affixes: [
    ],
    category: "Simple",
    note: "bag contains one morpheme and no affixes.",
  },
  {
    id: 220,
    word: "box",
    root: "box",
    affixes: [
    ],
    category: "Simple",
    note: "box contains one morpheme and no affixes.",
  },
  {
    id: 221,
    word: "car",
    root: "car",
    affixes: [
    ],
    category: "Simple",
    note: "car contains one morpheme and no affixes.",
  },
  {
    id: 222,
    word: "bus",
    root: "bus",
    affixes: [
    ],
    category: "Simple",
    note: "bus contains one morpheme and no affixes.",
  },
  {
    id: 223,
    word: "drum",
    root: "drum",
    affixes: [
    ],
    category: "Simple",
    note: "drum contains one morpheme and no affixes.",
  },
  {
    id: 224,
    word: "song",
    root: "song",
    affixes: [
    ],
    category: "Simple",
    note: "song contains one morpheme and no affixes.",
  },
  {
    id: 225,
    word: "light",
    root: "light",
    affixes: [
    ],
    category: "Simple",
    note: "light contains one morpheme and no affixes.",
  },
  {
    id: 226,
    word: "dark",
    root: "dark",
    affixes: [
    ],
    category: "Simple",
    note: "dark contains one morpheme and no affixes.",
  },
  {
    id: 227,
    word: "blue",
    root: "blue",
    affixes: [
    ],
    category: "Simple",
    note: "blue contains one morpheme and no affixes.",
  },
  {
    id: 228,
    word: "green",
    root: "green",
    affixes: [
    ],
    category: "Simple",
    note: "green contains one morpheme and no affixes.",
  },
  {
    id: 229,
    word: "red",
    root: "red",
    affixes: [
    ],
    category: "Simple",
    note: "red contains one morpheme and no affixes.",
  },
  {
    id: 230,
    word: "tall",
    root: "tall",
    affixes: [
    ],
    category: "Simple",
    note: "tall contains one morpheme and no affixes.",
  },
  {
    id: 231,
    word: "short",
    root: "short",
    affixes: [
    ],
    category: "Simple",
    note: "short contains one morpheme and no affixes.",
  },
  {
    id: 232,
    word: "fast",
    root: "fast",
    affixes: [
    ],
    category: "Simple",
    note: "fast contains one morpheme and no affixes.",
  },
  {
    id: 233,
    word: "slow",
    root: "slow",
    affixes: [
    ],
    category: "Simple",
    note: "slow contains one morpheme and no affixes.",
  },
  {
    id: 234,
    word: "warm",
    root: "warm",
    affixes: [
    ],
    category: "Simple",
    note: "warm contains one morpheme and no affixes.",
  },
  {
    id: 235,
    word: "cold",
    root: "cold",
    affixes: [
    ],
    category: "Simple",
    note: "cold contains one morpheme and no affixes.",
  },
  {
    id: 236,
    word: "young",
    root: "young",
    affixes: [
    ],
    category: "Simple",
    note: "young contains one morpheme and no affixes.",
  },
  {
    id: 237,
    word: "old",
    root: "old",
    affixes: [
    ],
    category: "Simple",
    note: "old contains one morpheme and no affixes.",
  },
  {
    id: 238,
    word: "smile",
    root: "smile",
    affixes: [
    ],
    category: "Simple",
    note: "smile contains one morpheme and no affixes.",
  },
  {
    id: 239,
    word: "laugh",
    root: "laugh",
    affixes: [
    ],
    category: "Simple",
    note: "laugh contains one morpheme and no affixes.",
  },
  {
    id: 240,
    word: "dance",
    root: "dance",
    affixes: [
    ],
    category: "Simple",
    note: "dance contains one morpheme and no affixes.",
  },
  {
    id: 241,
    word: "unlucky",
    root: "lucky",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of lucky.",
  },
  {
    id: 242,
    word: "untidy",
    root: "tidy",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of tidy.",
  },
  {
    id: 243,
    word: "uneven",
    root: "even",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of even.",
  },
  {
    id: 244,
    word: "unknown",
    root: "known",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of known.",
  },
  {
    id: 245,
    word: "unable",
    root: "able",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of able.",
  },
  {
    id: 246,
    word: "unwilling",
    root: "willing",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of willing.",
  },
  {
    id: 247,
    word: "unusual",
    root: "usual",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of usual.",
  },
  {
    id: 248,
    word: "unnecessary",
    root: "necessary",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of necessary.",
  },
  {
    id: 249,
    word: "unofficial",
    root: "official",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "un- changes the lexical meaning of official.",
  },
  {
    id: 250,
    word: "distrust",
    root: "trust",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses negation",
      },
    ],
    category: "Derivational only",
    note: "dis- changes the lexical meaning of trust.",
  },
  {
    id: 251,
    word: "disobey",
    root: "obey",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses negation",
      },
    ],
    category: "Derivational only",
    note: "dis- changes the lexical meaning of obey.",
  },
  {
    id: 252,
    word: "disagree",
    root: "agree",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses opposition",
      },
    ],
    category: "Derivational only",
    note: "dis- changes the lexical meaning of agree.",
  },
  {
    id: 253,
    word: "disarm",
    root: "arm",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses removal or reversal",
      },
    ],
    category: "Derivational only",
    note: "dis- changes the lexical meaning of arm.",
  },
  {
    id: 254,
    word: "displace",
    root: "place",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses removal from a position",
      },
    ],
    category: "Derivational only",
    note: "dis- changes the lexical meaning of place.",
  },
  {
    id: 255,
    word: "disloyal",
    root: "loyal",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "dis- changes the lexical meaning of loyal.",
  },
  {
    id: 256,
    word: "reopen",
    root: "open",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
    ],
    category: "Derivational only",
    note: "re- changes the lexical meaning of open.",
  },
  {
    id: 257,
    word: "reconsider",
    root: "consider",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
    ],
    category: "Derivational only",
    note: "re- changes the lexical meaning of consider.",
  },
  {
    id: 258,
    word: "repaint",
    root: "paint",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
    ],
    category: "Derivational only",
    note: "re- changes the lexical meaning of paint.",
  },
  {
    id: 259,
    word: "refold",
    root: "fold",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
    ],
    category: "Derivational only",
    note: "re- changes the lexical meaning of fold.",
  },
  {
    id: 260,
    word: "retell",
    root: "tell",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
    ],
    category: "Derivational only",
    note: "re- changes the lexical meaning of tell.",
  },
  {
    id: 261,
    word: "retake",
    root: "take",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
    ],
    category: "Derivational only",
    note: "re- changes the lexical meaning of take.",
  },
  {
    id: 262,
    word: "reuse",
    root: "use",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
    ],
    category: "Derivational only",
    note: "re- changes the lexical meaning of use.",
  },
  {
    id: 263,
    word: "recycle",
    root: "cycle",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
    ],
    category: "Derivational only",
    note: "re- changes the lexical meaning of cycle.",
  },
  {
    id: 264,
    word: "recheck",
    root: "check",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
    ],
    category: "Derivational only",
    note: "re- changes the lexical meaning of check.",
  },
  {
    id: 265,
    word: "rerecord",
    root: "record",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
    ],
    category: "Derivational only",
    note: "re- changes the lexical meaning of record.",
  },
  {
    id: 266,
    word: "prepay",
    root: "pay",
    affixes: [
      {
        form: "pre-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'before'",
      },
    ],
    category: "Derivational only",
    note: "pre- changes the lexical meaning of pay.",
  },
  {
    id: 267,
    word: "preselect",
    root: "select",
    affixes: [
      {
        form: "pre-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'before'",
      },
    ],
    category: "Derivational only",
    note: "pre- changes the lexical meaning of select.",
  },
  {
    id: 268,
    word: "prearrange",
    root: "arrange",
    affixes: [
      {
        form: "pre-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'before'",
      },
    ],
    category: "Derivational only",
    note: "pre- changes the lexical meaning of arrange.",
  },
  {
    id: 269,
    word: "pretest",
    root: "test",
    affixes: [
      {
        form: "pre-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'before'",
      },
    ],
    category: "Derivational only",
    note: "pre- changes the lexical meaning of test.",
  },
  {
    id: 270,
    word: "preapprove",
    root: "approve",
    affixes: [
      {
        form: "pre-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'before'",
      },
    ],
    category: "Derivational only",
    note: "pre- changes the lexical meaning of approve.",
  },
  {
    id: 271,
    word: "misplace",
    root: "place",
    affixes: [
      {
        form: "mis-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'incorrectly'",
      },
    ],
    category: "Derivational only",
    note: "mis- changes the lexical meaning of place.",
  },
  {
    id: 272,
    word: "mispronounce",
    root: "pronounce",
    affixes: [
      {
        form: "mis-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'incorrectly'",
      },
    ],
    category: "Derivational only",
    note: "mis- changes the lexical meaning of pronounce.",
  },
  {
    id: 273,
    word: "misinform",
    root: "inform",
    affixes: [
      {
        form: "mis-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'incorrectly'",
      },
    ],
    category: "Derivational only",
    note: "mis- changes the lexical meaning of inform.",
  },
  {
    id: 274,
    word: "miscalculate",
    root: "calculate",
    affixes: [
      {
        form: "mis-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'incorrectly'",
      },
    ],
    category: "Derivational only",
    note: "mis- changes the lexical meaning of calculate.",
  },
  {
    id: 275,
    word: "misbehave",
    root: "behave",
    affixes: [
      {
        form: "mis-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'incorrectly or badly'",
      },
    ],
    category: "Derivational only",
    note: "mis- changes the lexical meaning of behave.",
  },
  {
    id: 276,
    word: "nonfiction",
    root: "fiction",
    affixes: [
      {
        form: "non-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses absence or negation",
      },
    ],
    category: "Derivational only",
    note: "non- changes the lexical meaning of fiction.",
  },
  {
    id: 277,
    word: "nonverbal",
    root: "verbal",
    affixes: [
      {
        form: "non-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "non- changes the lexical meaning of verbal.",
  },
  {
    id: 278,
    word: "nonhuman",
    root: "human",
    affixes: [
      {
        form: "non-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "non- changes the lexical meaning of human.",
  },
  {
    id: 279,
    word: "nonstandard",
    root: "standard",
    affixes: [
      {
        form: "non-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
    ],
    category: "Derivational only",
    note: "non- changes the lexical meaning of standard.",
  },
  {
    id: 280,
    word: "antivirus",
    root: "virus",
    affixes: [
      {
        form: "anti-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'against'",
      },
    ],
    category: "Derivational only",
    note: "anti- changes the lexical meaning of virus.",
  },
  {
    id: 281,
    word: "runner",
    root: "run",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an agent noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from run.",
  },
  {
    id: 282,
    word: "dancer",
    root: "dance",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an agent noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from dance.",
  },
  {
    id: 283,
    word: "swimmer",
    root: "swim",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an agent noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from swim.",
  },
  {
    id: 284,
    word: "writer",
    root: "write",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an agent noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from write.",
  },
  {
    id: 285,
    word: "speaker",
    root: "speak",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an agent noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from speak.",
  },
  {
    id: 286,
    word: "baker",
    root: "bake",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an agent noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from bake.",
  },
  {
    id: 287,
    word: "farmer",
    root: "farm",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a person noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from farm.",
  },
  {
    id: 288,
    word: "gardener",
    root: "garden",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a person noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from garden.",
  },
  {
    id: 289,
    word: "cleaner",
    root: "clean",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an agent noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from clean.",
  },
  {
    id: 290,
    word: "listener",
    root: "listen",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an agent noun",
      },
    ],
    category: "Derivational only",
    note: "-er creates a new lexeme from listen.",
  },
  {
    id: 291,
    word: "sadness",
    root: "sad",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Derivational only",
    note: "-ness creates a new lexeme from sad.",
  },
  {
    id: 292,
    word: "weakness",
    root: "weak",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Derivational only",
    note: "-ness creates a new lexeme from weak.",
  },
  {
    id: 293,
    word: "softness",
    root: "soft",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Derivational only",
    note: "-ness creates a new lexeme from soft.",
  },
  {
    id: 294,
    word: "brightness",
    root: "bright",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Derivational only",
    note: "-ness creates a new lexeme from bright.",
  },
  {
    id: 295,
    word: "politeness",
    root: "polite",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Derivational only",
    note: "-ness creates a new lexeme from polite.",
  },
  {
    id: 296,
    word: "illness",
    root: "ill",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Derivational only",
    note: "-ness creates a new lexeme from ill.",
  },
  {
    id: 297,
    word: "loneliness",
    root: "lonely",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Derivational only",
    note: "-ness creates a new lexeme from lonely.",
  },
  {
    id: 298,
    word: "calmness",
    root: "calm",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Derivational only",
    note: "-ness creates a new lexeme from calm.",
  },
  {
    id: 299,
    word: "freshness",
    root: "fresh",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Derivational only",
    note: "-ness creates a new lexeme from fresh.",
  },
  {
    id: 300,
    word: "neatness",
    root: "neat",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Derivational only",
    note: "-ness creates a new lexeme from neat.",
  },
  {
    id: 301,
    word: "development",
    root: "develop",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ment creates a new lexeme from develop.",
  },
  {
    id: 302,
    word: "improvement",
    root: "improve",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ment creates a new lexeme from improve.",
  },
  {
    id: 303,
    word: "payment",
    root: "pay",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ment creates a new lexeme from pay.",
  },
  {
    id: 304,
    word: "enjoyment",
    root: "enjoy",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ment creates a new lexeme from enjoy.",
  },
  {
    id: 305,
    word: "treatment",
    root: "treat",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ment creates a new lexeme from treat.",
  },
  {
    id: 306,
    word: "achievement",
    root: "achieve",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ment creates a new lexeme from achieve.",
  },
  {
    id: 307,
    word: "punishment",
    root: "punish",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ment creates a new lexeme from punish.",
  },
  {
    id: 308,
    word: "replacement",
    root: "replace",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ment creates a new lexeme from replace.",
  },
  {
    id: 309,
    word: "amazement",
    root: "amaze",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ment creates a new lexeme from amaze.",
  },
  {
    id: 310,
    word: "excitement",
    root: "excite",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Derivational only",
    note: "-ment creates a new lexeme from excite.",
  },
  {
    id: 311,
    word: "breakable",
    root: "break",
    affixes: [
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'able to be'",
      },
    ],
    category: "Derivational only",
    note: "-able creates a new lexeme from break.",
  },
  {
    id: 312,
    word: "movable",
    root: "move",
    affixes: [
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'able to be'",
      },
    ],
    category: "Derivational only",
    note: "-able creates a new lexeme from move.",
  },
  {
    id: 313,
    word: "portable",
    root: "port",
    affixes: [
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-able creates a new lexeme from port.",
  },
  {
    id: 314,
    word: "predictable",
    root: "predict",
    affixes: [
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'able to be'",
      },
    ],
    category: "Derivational only",
    note: "-able creates a new lexeme from predict.",
  },
  {
    id: 315,
    word: "reversible",
    root: "reverse",
    affixes: [
      {
        form: "-ible",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'able to be'",
      },
    ],
    category: "Derivational only",
    note: "-ible creates a new lexeme from reverse.",
  },
  {
    id: 316,
    word: "comfortable",
    root: "comfort",
    affixes: [
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-able creates a new lexeme from comfort.",
  },
  {
    id: 317,
    word: "understandable",
    root: "understand",
    affixes: [
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'able to be'",
      },
    ],
    category: "Derivational only",
    note: "-able creates a new lexeme from understand.",
  },
  {
    id: 318,
    word: "drinkable",
    root: "drink",
    affixes: [
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'able to be'",
      },
    ],
    category: "Derivational only",
    note: "-able creates a new lexeme from drink.",
  },
  {
    id: 319,
    word: "countable",
    root: "count",
    affixes: [
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'able to be'",
      },
    ],
    category: "Derivational only",
    note: "-able creates a new lexeme from count.",
  },
  {
    id: 320,
    word: "flexible",
    root: "flex",
    affixes: [
      {
        form: "-ible",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-ible creates a new lexeme from flex.",
  },
  {
    id: 321,
    word: "colourful",
    root: "colour",
    affixes: [
      {
        form: "-ful",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-ful creates a new lexeme from colour.",
  },
  {
    id: 322,
    word: "peaceful",
    root: "peace",
    affixes: [
      {
        form: "-ful",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-ful creates a new lexeme from peace.",
  },
  {
    id: 323,
    word: "useful",
    root: "use",
    affixes: [
      {
        form: "-ful",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-ful creates a new lexeme from use.",
  },
  {
    id: 324,
    word: "powerful",
    root: "power",
    affixes: [
      {
        form: "-ful",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-ful creates a new lexeme from power.",
  },
  {
    id: 325,
    word: "joyful",
    root: "joy",
    affixes: [
      {
        form: "-ful",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-ful creates a new lexeme from joy.",
  },
  {
    id: 326,
    word: "fearful",
    root: "fear",
    affixes: [
      {
        form: "-ful",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-ful creates a new lexeme from fear.",
  },
  {
    id: 327,
    word: "homeless",
    root: "home",
    affixes: [
      {
        form: "-less",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'without'",
      },
    ],
    category: "Derivational only",
    note: "-less creates a new lexeme from home.",
  },
  {
    id: 328,
    word: "harmless",
    root: "harm",
    affixes: [
      {
        form: "-less",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'without'",
      },
    ],
    category: "Derivational only",
    note: "-less creates a new lexeme from harm.",
  },
  {
    id: 329,
    word: "speechless",
    root: "speech",
    affixes: [
      {
        form: "-less",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'without'",
      },
    ],
    category: "Derivational only",
    note: "-less creates a new lexeme from speech.",
  },
  {
    id: 330,
    word: "endless",
    root: "end",
    affixes: [
      {
        form: "-less",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective meaning 'without an end'",
      },
    ],
    category: "Derivational only",
    note: "-less creates a new lexeme from end.",
  },
  {
    id: 331,
    word: "leadership",
    root: "leader",
    affixes: [
      {
        form: "-ship",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun expressing a state or role",
      },
    ],
    category: "Derivational only",
    note: "-ship creates a new lexeme from leader.",
  },
  {
    id: 332,
    word: "adulthood",
    root: "adult",
    affixes: [
      {
        form: "-hood",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun expressing a state",
      },
    ],
    category: "Derivational only",
    note: "-hood creates a new lexeme from adult.",
  },
  {
    id: 333,
    word: "violinist",
    root: "violin",
    affixes: [
      {
        form: "-ist",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a person noun",
      },
    ],
    category: "Derivational only",
    note: "-ist creates a new lexeme from violin.",
  },
  {
    id: 334,
    word: "cyclist",
    root: "cycle",
    affixes: [
      {
        form: "-ist",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a person noun",
      },
    ],
    category: "Derivational only",
    note: "-ist creates a new lexeme from cycle.",
  },
  {
    id: 335,
    word: "nominee",
    root: "nominate",
    affixes: [
      {
        form: "-ee",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a person noun",
      },
    ],
    category: "Derivational only",
    note: "-ee creates a new lexeme from nominate.",
  },
  {
    id: 336,
    word: "activate",
    root: "active",
    affixes: [
      {
        form: "-ate",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a verb",
      },
    ],
    category: "Derivational only",
    note: "-ate creates a new lexeme from active.",
  },
  {
    id: 337,
    word: "simplify",
    root: "simple",
    affixes: [
      {
        form: "-ify",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a verb",
      },
    ],
    category: "Derivational only",
    note: "-ify creates a new lexeme from simple.",
  },
  {
    id: 338,
    word: "wooden",
    root: "wood",
    affixes: [
      {
        form: "-en",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-en creates a new lexeme from wood.",
  },
  {
    id: 339,
    word: "rainy",
    root: "rain",
    affixes: [
      {
        form: "-y",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Derivational only",
    note: "-y creates a new lexeme from rain.",
  },
  {
    id: 340,
    word: "clockwise",
    root: "clock",
    affixes: [
      {
        form: "-wise",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adverb",
      },
    ],
    category: "Derivational only",
    note: "-wise creates a new lexeme from clock.",
  },
  {
    id: 341,
    word: "pears",
    root: "pear",
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
    id: 342,
    word: "tables",
    root: "table",
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
    id: 343,
    word: "windows",
    root: "window",
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
    id: 344,
    word: "gardens",
    root: "garden",
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
    id: 345,
    word: "pencils",
    root: "pencil",
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
    id: 346,
    word: "papers",
    root: "paper",
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
    id: 347,
    word: "schools",
    root: "school",
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
    id: 348,
    word: "lakes",
    root: "lake",
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
    id: 349,
    word: "fields",
    root: "field",
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
    id: 350,
    word: "floors",
    root: "floor",
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
    id: 351,
    word: "walls",
    root: "wall",
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
    id: 352,
    word: "roofs",
    root: "roof",
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
    id: 353,
    word: "doors",
    root: "door",
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
    id: 354,
    word: "seeds",
    root: "seed",
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
    id: 355,
    word: "flowers",
    root: "flower",
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
    id: 356,
    word: "shirts",
    root: "shirt",
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
    id: 357,
    word: "shoes",
    root: "shoe",
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
    id: 358,
    word: "coats",
    root: "coat",
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
    id: 359,
    word: "cups",
    root: "cup",
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
    id: 360,
    word: "plates",
    root: "plate",
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
    id: 361,
    word: "forks",
    root: "fork",
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
    id: 362,
    word: "spoons",
    root: "spoon",
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
    id: 363,
    word: "bowls",
    root: "bowl",
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
    id: 364,
    word: "beds",
    root: "bed",
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
    id: 365,
    word: "desks",
    root: "desk",
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
    id: 366,
    word: "smiled",
    root: "smile",
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
    id: 367,
    word: "laughed",
    root: "laugh",
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
    id: 368,
    word: "danced",
    root: "dance",
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
    id: 369,
    word: "baked",
    root: "bake",
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
    id: 370,
    word: "folded",
    root: "fold",
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
    id: 371,
    word: "mailed",
    root: "mail",
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
    id: 372,
    word: "pushed",
    root: "push",
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
    id: 373,
    word: "lifted",
    root: "lift",
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
    id: 374,
    word: "fixed",
    root: "fix",
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
    id: 375,
    word: "looked",
    root: "look",
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
    id: 376,
    word: "listened",
    root: "listen",
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
    id: 377,
    word: "visited",
    root: "visit",
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
    id: 378,
    word: "waited",
    root: "wait",
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
    id: 379,
    word: "started",
    root: "start",
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
    id: 380,
    word: "ended",
    root: "end",
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
    id: 381,
    word: "asked",
    root: "ask",
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
    id: 382,
    word: "answered",
    root: "answer",
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
    id: 383,
    word: "followed",
    root: "follow",
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
    id: 384,
    word: "entered",
    root: "enter",
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
    id: 385,
    word: "returned",
    root: "return",
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
    id: 386,
    word: "smiling",
    root: "smile",
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
    id: 387,
    word: "laughing",
    root: "laugh",
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
    id: 388,
    word: "dancing",
    root: "dance",
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
    id: 389,
    word: "baking",
    root: "bake",
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
    id: 390,
    word: "folding",
    root: "fold",
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
    id: 391,
    word: "mailing",
    root: "mail",
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
    id: 392,
    word: "lifting",
    root: "lift",
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
    id: 393,
    word: "looking",
    root: "look",
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
    id: 394,
    word: "listening",
    root: "listen",
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
    id: 395,
    word: "visiting",
    root: "visit",
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
    id: 396,
    word: "waiting",
    root: "wait",
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
    id: 397,
    word: "starting",
    root: "start",
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
    id: 398,
    word: "ending",
    root: "end",
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
    id: 399,
    word: "asking",
    root: "ask",
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
    id: 400,
    word: "answering",
    root: "answer",
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
    id: 401,
    word: "following",
    root: "follow",
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
    id: 402,
    word: "entering",
    root: "enter",
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
    id: 403,
    word: "returning",
    root: "return",
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
    id: 404,
    word: "reading",
    root: "read",
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
    id: 405,
    word: "speaking",
    root: "speak",
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
    id: 406,
    word: "works",
    root: "work",
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
    id: 407,
    word: "reads",
    root: "read",
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
    id: 408,
    word: "speaks",
    root: "speak",
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
    id: 409,
    word: "listens",
    root: "listen",
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
    id: 410,
    word: "waits",
    root: "wait",
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
    id: 411,
    word: "starts",
    root: "start",
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
    id: 412,
    word: "ends",
    root: "end",
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
    id: 413,
    word: "asks",
    root: "ask",
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
    id: 414,
    word: "answers",
    root: "answer",
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
    id: 415,
    word: "follows",
    root: "follow",
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
    id: 416,
    word: "enters",
    root: "enter",
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
    id: 417,
    word: "returns",
    root: "return",
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
    id: 418,
    word: "folds",
    root: "fold",
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
    id: 419,
    word: "mails",
    root: "mail",
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
    id: 420,
    word: "lifts",
    root: "lift",
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
    id: 421,
    word: "brighter",
    root: "bright",
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
    id: 422,
    word: "quicker",
    root: "quick",
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
    id: 423,
    word: "louder",
    root: "loud",
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
    id: 424,
    word: "calmer",
    root: "calm",
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
    id: 425,
    word: "stronger",
    root: "strong",
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
    id: 426,
    word: "weaker",
    root: "weak",
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
    id: 427,
    word: "warmer",
    root: "warm",
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
    id: 428,
    word: "cooler",
    root: "cool",
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
    id: 429,
    word: "younger",
    root: "young",
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
    id: 430,
    word: "newer",
    root: "new",
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
    id: 431,
    word: "brightest",
    root: "bright",
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
    id: 432,
    word: "quickest",
    root: "quick",
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
    id: 433,
    word: "loudest",
    root: "loud",
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
    id: 434,
    word: "calmest",
    root: "calm",
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
    id: 435,
    word: "strongest",
    root: "strong",
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
    id: 436,
    word: "weakest",
    root: "weak",
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
    id: 437,
    word: "warmest",
    root: "warm",
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
    id: 438,
    word: "coolest",
    root: "cool",
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
    id: 439,
    word: "youngest",
    root: "young",
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
    id: 440,
    word: "newest",
    root: "new",
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
    id: 441,
    word: "runners",
    root: "run",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 442,
    word: "dancers",
    root: "dance",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 443,
    word: "swimmers",
    root: "swim",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 444,
    word: "writers",
    root: "write",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 445,
    word: "speakers",
    root: "speak",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 446,
    word: "bakers",
    root: "bake",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 447,
    word: "farmers",
    root: "farm",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 448,
    word: "gardeners",
    root: "garden",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 449,
    word: "cleaners",
    root: "clean",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 450,
    word: "listeners",
    root: "listen",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 451,
    word: "leaders",
    root: "lead",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 452,
    word: "managers",
    root: "manage",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 453,
    word: "owners",
    root: "own",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 454,
    word: "sellers",
    root: "sell",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 455,
    word: "buyers",
    root: "buy",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 456,
    word: "players",
    root: "play",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 457,
    word: "reporters",
    root: "report",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 458,
    word: "learners",
    root: "learn",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 459,
    word: "winners",
    root: "win",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 460,
    word: "losers",
    root: "lose",
    affixes: [
      {
        form: "-er",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-er creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 461,
    word: "sadnesses",
    root: "sad",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ness creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 462,
    word: "weaknesses",
    root: "weak",
    affixes: [
      {
        form: "-ness",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ness creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 463,
    word: "payments",
    root: "pay",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ment creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 464,
    word: "developments",
    root: "develop",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ment creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 465,
    word: "improvements",
    root: "improve",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ment creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 466,
    word: "treatments",
    root: "treat",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ment creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 467,
    word: "achievements",
    root: "achieve",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ment creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 468,
    word: "punishments",
    root: "punish",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ment creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 469,
    word: "replacements",
    root: "replace",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ment creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 470,
    word: "excitements",
    root: "excite",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "creates a noun",
      },
      {
        form: "-s",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks plural number",
      },
    ],
    category: "Derivational + inflectional",
    note: "-ment creates a noun; -s then marks that noun as plural.",
  },
  {
    id: 471,
    word: "reopened",
    root: "open",
    affixes: [
      {
        form: "re-",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 472,
    word: "repainting",
    root: "paint",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "changes lexical meaning",
      },
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Derivational + inflectional",
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 473,
    word: "refolded",
    root: "fold",
    affixes: [
      {
        form: "re-",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 474,
    word: "retelling",
    root: "tell",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "changes lexical meaning",
      },
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Derivational + inflectional",
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 475,
    word: "reused",
    root: "use",
    affixes: [
      {
        form: "re-",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 476,
    word: "recycled",
    root: "cycle",
    affixes: [
      {
        form: "re-",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 477,
    word: "rechecking",
    root: "check",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "changes lexical meaning",
      },
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Derivational + inflectional",
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 478,
    word: "preselected",
    root: "select",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 479,
    word: "prearranged",
    root: "arrange",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 480,
    word: "pretested",
    root: "test",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 481,
    word: "misplacing",
    root: "place",
    affixes: [
      {
        form: "mis-",
        kind: "Derivational",
        position: "Prefix",
        function: "changes lexical meaning",
      },
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Derivational + inflectional",
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 482,
    word: "mispronounced",
    root: "pronounce",
    affixes: [
      {
        form: "mis-",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 483,
    word: "misinformed",
    root: "inform",
    affixes: [
      {
        form: "mis-",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 484,
    word: "miscalculated",
    root: "calculate",
    affixes: [
      {
        form: "mis-",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 485,
    word: "overworked",
    root: "work",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 486,
    word: "overpaying",
    root: "pay",
    affixes: [
      {
        form: "over-",
        kind: "Derivational",
        position: "Prefix",
        function: "changes lexical meaning",
      },
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Derivational + inflectional",
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 487,
    word: "undercooked",
    root: "cook",
    affixes: [
      {
        form: "under-",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 488,
    word: "underestimated",
    root: "estimate",
    affixes: [
      {
        form: "under-",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 489,
    word: "defrosted",
    root: "frost",
    affixes: [
      {
        form: "de-",
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
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 490,
    word: "coexisting",
    root: "exist",
    affixes: [
      {
        form: "co-",
        kind: "Derivational",
        position: "Prefix",
        function: "changes lexical meaning",
      },
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Derivational + inflectional",
    note: "The prefix is derivational and the final suffix is inflectional.",
  },
  {
    id: 491,
    word: "modernizing",
    root: "modern",
    affixes: [
      {
        form: "-ize",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a verb",
      },
      {
        form: "-ing",
        kind: "Inflectional",
        position: "Suffix",
        function: "marks the progressive or participle form",
      },
    ],
    category: "Derivational + inflectional",
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 492,
    word: "simplified",
    root: "simple",
    affixes: [
      {
        form: "-ify",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 493,
    word: "activated",
    root: "active",
    affixes: [
      {
        form: "-ate",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 494,
    word: "nationalized",
    root: "nation",
    affixes: [
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 495,
    word: "personalized",
    root: "person",
    affixes: [
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 496,
    word: "softened",
    root: "soft",
    affixes: [
      {
        form: "-en",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 497,
    word: "widened",
    root: "wide",
    affixes: [
      {
        form: "-en",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 498,
    word: "darkened",
    root: "dark",
    affixes: [
      {
        form: "-en",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 499,
    word: "strengthened",
    root: "strength",
    affixes: [
      {
        form: "-en",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 500,
    word: "beautified",
    root: "beauty",
    affixes: [
      {
        form: "-ify",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 501,
    word: "clarified",
    root: "clear",
    affixes: [
      {
        form: "-ify",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 502,
    word: "classified",
    root: "class",
    affixes: [
      {
        form: "-ify",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 503,
    word: "purified",
    root: "pure",
    affixes: [
      {
        form: "-ify",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 504,
    word: "legalized",
    root: "legal",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 505,
    word: "computerized",
    root: "computer",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 506,
    word: "prioritized",
    root: "priority",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 507,
    word: "memorized",
    root: "memory",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 508,
    word: "hospitalized",
    root: "hospital",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 509,
    word: "fertilized",
    root: "fertile",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 510,
    word: "finalized",
    root: "final",
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
    note: "One or more derivational suffixes create a verb; the final suffix adds inflection.",
  },
  {
    id: 511,
    word: "unreadable",
    root: "read",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 512,
    word: "unbreakable",
    root: "break",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 513,
    word: "unpredictable",
    root: "predict",
    affixes: [
      {
        form: "un-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
      {
        form: "-able",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 514,
    word: "disrespectful",
    root: "respect",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses negation",
      },
      {
        form: "-ful",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 515,
    word: "disloyalty",
    root: "loyal",
    affixes: [
      {
        form: "dis-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
      {
        form: "-ty",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 516,
    word: "reclassification",
    root: "class",
    affixes: [
      {
        form: "re-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'again'",
      },
      {
        form: "-ify",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a verb",
      },
      {
        form: "-ation",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 517,
    word: "prearrangement",
    root: "arrange",
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
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 518,
    word: "misinterpretation",
    root: "interpret",
    affixes: [
      {
        form: "mis-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'incorrectly'",
      },
      {
        form: "-ation",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 519,
    word: "nonrenewable",
    root: "new",
    affixes: [
      {
        form: "non-",
        kind: "Derivational",
        position: "Prefix",
        function: "means 'not'",
      },
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
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 520,
    word: "overconfidence",
    root: "confident",
    affixes: [
      {
        form: "over-",
        kind: "Derivational",
        position: "Prefix",
        function: "means excessively",
      },
      {
        form: "-ence",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 521,
    word: "underpayment",
    root: "pay",
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
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 522,
    word: "cooperation",
    root: "operate",
    affixes: [
      {
        form: "co-",
        kind: "Derivational",
        position: "Prefix",
        function: "means jointly",
      },
      {
        form: "-ation",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 523,
    word: "deactivation",
    root: "active",
    affixes: [
      {
        form: "de-",
        kind: "Derivational",
        position: "Prefix",
        function: "expresses reversal",
      },
      {
        form: "-ate",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a verb",
      },
      {
        form: "-ion",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 524,
    word: "enlargement",
    root: "large",
    affixes: [
      {
        form: "en-",
        kind: "Derivational",
        position: "Prefix",
        function: "forms a causative verb",
      },
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 525,
    word: "embodiment",
    root: "body",
    affixes: [
      {
        form: "em-",
        kind: "Derivational",
        position: "Prefix",
        function: "forms a verb",
      },
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 526,
    word: "friendliness",
    root: "friend",
    affixes: [
      {
        form: "-ly",
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
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 527,
    word: "loveliness",
    root: "love",
    affixes: [
      {
        form: "-ly",
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
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 528,
    word: "carefulness",
    root: "care",
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
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 529,
    word: "powerlessness",
    root: "power",
    affixes: [
      {
        form: "-less",
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
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 530,
    word: "meaningfulness",
    root: "mean",
    affixes: [
      {
        form: "-ing",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
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
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 531,
    word: "governmental",
    root: "govern",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 532,
    word: "developmental",
    root: "develop",
    affixes: [
      {
        form: "-ment",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 533,
    word: "organizational",
    root: "organize",
    affixes: [
      {
        form: "-ation",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 534,
    word: "educational",
    root: "educate",
    affixes: [
      {
        form: "-ion",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 535,
    word: "musicality",
    root: "music",
    affixes: [
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
      {
        form: "-ity",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 536,
    word: "originality",
    root: "origin",
    affixes: [
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
      {
        form: "-ity",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an abstract noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 537,
    word: "nationalism",
    root: "nation",
    affixes: [
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
      {
        form: "-ism",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 538,
    word: "modernization",
    root: "modern",
    affixes: [
      {
        form: "-ize",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a verb",
      },
      {
        form: "-ation",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 539,
    word: "simplification",
    root: "simple",
    affixes: [
      {
        form: "-ify",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a verb",
      },
      {
        form: "-ation",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
  {
    id: 540,
    word: "industrialization",
    root: "industry",
    affixes: [
      {
        form: "-al",
        kind: "Derivational",
        position: "Suffix",
        function: "forms an adjective",
      },
      {
        form: "-ize",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a verb",
      },
      {
        form: "-ation",
        kind: "Derivational",
        position: "Suffix",
        function: "forms a noun",
      },
    ],
    category: "Multiple derivational affixes",
    note: "Every listed affix contributes to building a new lexeme.",
  },
];