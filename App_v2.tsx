import {
  useEffect,
  useMemo,
  useState,
} from "react";
import "./App.css";
import {
  questions,
} from "./questionData";
import type {
  AffixKind,
  MorphologyQuestion,
  QuestionCategory,
} from "./questionData";

type ComplexityAnswer =
  | "Simple"
  | "Complex";

interface HistoryEntry {
  id: string;
  word: string;
  selectedComplexity:
    ComplexityAnswer;
  correctComplexity:
    ComplexityAnswer;
  selectedAffixes: string[];
  correctAffixes: string[];
  isCorrect: boolean;
  submittedAt: string;
}

const categories:
  QuestionCategory[] = [
    "Simple",
    "Derivational only",
    "Inflectional only",
    "Derivational + inflectional",
    "Multiple derivational affixes",
  ];

const complexityChoices:
  ComplexityAnswer[] = [
    "Simple",
    "Complex",
  ];

const affixKinds:
  AffixKind[] = [
    "Derivational",
    "Inflectional",
  ];

const affixPool = [
  "un-",
  "dis-",
  "re-",
  "pre-",
  "mis-",
  "in-",
  "il-",
  "non-",
  "ex-",
  "co-",
  "over-",
  "under-",
  "-able",
  "-al",
  "-ed",
  "-ee",
  "-er",
  "-est",
  "-ful",
  "-hood",
  "-ing",
  "-ist",
  "-ize",
  "-less",
  "-let",
  "-ling",
  "-ly",
  "-ment",
  "-ness",
  "-s",
  "-ship",
  "-y",
];

const HISTORY_KEY =
  "morphology-trainer-history-v2";

function loadHistory():
  HistoryEntry[] {
  try {
    const saved =
      localStorage.getItem(
        HISTORY_KEY,
      );

    return saved
      ? JSON.parse(saved)
      : [];
  } catch {
    return [];
  }
}

function getAvailableQuestions(
  enabledCategories:
    readonly QuestionCategory[],
): MorphologyQuestion[] {
  return questions.filter(
    (question) =>
      enabledCategories.includes(
        question.category,
      ),
  );
}

function getRandomQuestion(
  enabledCategories:
    readonly QuestionCategory[],
  excludedId?: number,
): MorphologyQuestion | null {
  let available =
    getAvailableQuestions(
      enabledCategories,
    );

  if (
    excludedId !== undefined &&
    available.length > 1
  ) {
    available =
      available.filter(
        (question) =>
          question.id !==
          excludedId,
      );
  }

  if (available.length === 0) {
    return null;
  }

  return available[
    Math.floor(
      Math.random() *
        available.length,
    )
  ];
}

function stableHash(
  value: string,
): number {
  let hash = 2166136261;

  for (
    let index = 0;
    index < value.length;
    index += 1
  ) {
    hash ^=
      value.charCodeAt(index);

    hash = Math.imul(
      hash,
      16777619,
    );
  }

  return hash >>> 0;
}

function getAffixChoices(
  question: MorphologyQuestion,
): string[] {
  const correct =
    question.affixes.map(
      (item) => item.form,
    );

  const distractors =
    affixPool
      .filter(
        (item) =>
          !correct.includes(item),
      )
      .sort(
        (left, right) =>
          stableHash(
            `${question.id}-${left}`,
          ) -
          stableHash(
            `${question.id}-${right}`,
          ),
      )
      .slice(
        0,
        Math.max(
          0,
          8 - correct.length,
        ),
      );

  return Array.from(
    new Set([
      ...correct,
      ...distractors,
    ]),
  ).sort((left, right) => {
    const leftPrefix =
      left.endsWith("-");
    const rightPrefix =
      right.endsWith("-");

    if (
      leftPrefix !==
      rightPrefix
    ) {
      return leftPrefix
        ? -1
        : 1;
    }

    return left.localeCompare(
      right,
    );
  });
}

function sameSet(
  left: readonly string[],
  right: readonly string[],
): boolean {
  return (
    left.length === right.length &&
    right.every(
      (item) =>
        left.includes(item),
    )
  );
}

function getBreakdown(
  question: MorphologyQuestion,
): string {
  if (
    question.affixes.length === 0
  ) {
    return question.root;
  }

  const prefixes =
    question.affixes
      .filter(
        (item) =>
          item.position ===
          "Prefix",
      )
      .map(
        (item) =>
          item.form.replace(
            /-$/,
            "",
          ),
      );

  const suffixes =
    question.affixes
      .filter(
        (item) =>
          item.position ===
          "Suffix",
      )
      .map(
        (item) =>
          item.form.replace(
            /^-/,
            "",
          ),
      );

  return [
    ...prefixes,
    question.root,
    ...suffixes,
  ].join(" + ");
}

function App() {
  const [
    enabledCategories,
    setEnabledCategories,
  ] =
    useState<QuestionCategory[]>(
      () => [...categories],
    );

  const [
    currentQuestion,
    setCurrentQuestion,
  ] =
    useState<MorphologyQuestion>(
      () => {
        const initial =
          getRandomQuestion(
            categories,
          );

        if (!initial) {
          throw new Error(
            "No morphology questions are available.",
          );
        }

        return initial;
      },
    );

  const [
    complexityAnswer,
    setComplexityAnswer,
  ] =
    useState<
      ComplexityAnswer | null
    >(null);

  const [
    selectedAffixes,
    setSelectedAffixes,
  ] = useState<string[]>([]);

  const [
    classifications,
    setClassifications,
  ] = useState<
    Record<string, AffixKind>
  >({});

  const [
    submitted,
    setSubmitted,
  ] = useState(false);

  const [score, setScore] =
    useState({
      correct: 0,
      total: 0,
    });

  const [
    history,
    setHistory,
  ] = useState<HistoryEntry[]>(
    () => loadHistory(),
  );

  useEffect(() => {
    localStorage.setItem(
      HISTORY_KEY,
      JSON.stringify(history),
    );
  }, [history]);

  const availableCount =
    useMemo(
      () =>
        getAvailableQuestions(
          enabledCategories,
        ).length,
      [enabledCategories],
    );

  const affixChoices =
    useMemo(
      () =>
        getAffixChoices(
          currentQuestion,
        ),
      [currentQuestion],
    );

  const correctComplexity:
    ComplexityAnswer =
      currentQuestion.affixes
        .length === 0
        ? "Simple"
        : "Complex";

  const correctAffixes =
    currentQuestion.affixes.map(
      (item) => item.form,
    );

  const complexityCorrect =
    complexityAnswer ===
    correctComplexity;

  const affixesCorrect =
    sameSet(
      selectedAffixes,
      correctAffixes,
    );

  const classificationsCorrect =
    correctAffixes.every(
      (form) => {
        const analysis =
          currentQuestion.affixes.find(
            (item) =>
              item.form === form,
          );

        return (
          analysis !== undefined &&
          classifications[form] ===
            analysis.kind
        );
      },
    );

  const overallCorrect =
    complexityCorrect &&
    affixesCorrect &&
    classificationsCorrect;

  const canSubmit =
    complexityAnswer !== null &&
    (
      complexityAnswer ===
        "Simple" ||
      (
        selectedAffixes.length >
          0 &&
        selectedAffixes.every(
          (form) =>
            classifications[
              form
            ] !== undefined,
        )
      )
    );

  function toggleCategory(
    category:
      QuestionCategory,
  ) {
    setEnabledCategories(
      (previous) =>
        previous.includes(
          category,
        )
          ? previous.filter(
              (item) =>
                item !== category,
            )
          : [
              ...previous,
              category,
            ],
    );
  }

  function chooseComplexity(
    answer: ComplexityAnswer,
  ) {
    if (submitted) {
      return;
    }

    setComplexityAnswer(
      answer,
    );

    if (answer === "Simple") {
      setSelectedAffixes([]);
      setClassifications({});
    }
  }

  function toggleAffix(
    form: string,
  ) {
    if (submitted) {
      return;
    }

    setSelectedAffixes(
      (previous) => {
        if (
          previous.includes(form)
        ) {
          setClassifications(
            (current) => {
              const next = {
                ...current,
              };

              delete next[form];

              return next;
            },
          );

          return previous.filter(
            (item) =>
              item !== form,
          );
        }

        return [
          ...previous,
          form,
        ];
      },
    );
  }

  function classifyAffix(
    form: string,
    kind: AffixKind,
  ) {
    if (submitted) {
      return;
    }

    setClassifications(
      (previous) => ({
        ...previous,
        [form]: kind,
      }),
    );
  }

  function submitAnswer() {
    if (
      !canSubmit ||
      complexityAnswer === null
    ) {
      return;
    }

    setSubmitted(true);

    setScore(
      (previous) => ({
        correct:
          previous.correct +
          (overallCorrect
            ? 1
            : 0),
        total:
          previous.total + 1,
      }),
    );

    setHistory(
      (previous) => [
        {
          id:
            `${Date.now()}-${Math.random()}`,
          word:
            currentQuestion.word,
          selectedComplexity:
            complexityAnswer,
          correctComplexity,
          selectedAffixes: [
            ...selectedAffixes,
          ],
          correctAffixes: [
            ...correctAffixes,
          ],
          isCorrect:
            overallCorrect,
          submittedAt:
            new Date().toISOString(),
        },
        ...previous,
      ].slice(0, 50),
    );
  }

  function nextQuestion() {
    const next =
      getRandomQuestion(
        enabledCategories,
        currentQuestion.id,
      );

    if (!next) {
      alert(
        "Select at least one question category.",
      );
      return;
    }

    setCurrentQuestion(next);
    setComplexityAnswer(null);
    setSelectedAffixes([]);
    setClassifications({});
    setSubmitted(false);
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <p className="eyebrow">
          Practice filters
        </p>

        <h2>
          Choose question types
        </h2>

        <div className="filter-count">
          <strong>
            {
              enabledCategories
                .length
            }
          </strong>

          <span>
            of {categories.length}
            categories active
          </span>
        </div>

        <p className="available-count">
          {availableCount} of{" "}
          {questions.length} words
          available
        </p>

        <div className="filter-actions">
          <button
            type="button"
            onClick={() =>
              setEnabledCategories(
                [...categories],
              )
            }
          >
            Select all
          </button>

          <button
            type="button"
            onClick={() =>
              setEnabledCategories(
                [],
              )
            }
          >
            Clear all
          </button>
        </div>

        {
          enabledCategories.length ===
            0 && (
            <p className="warning">
              Select at least one
              category.
            </p>
          )
        }

        <div className="filter-list">
          {categories.map(
            (category) => {
              const enabled =
                enabledCategories.includes(
                  category,
                );

              const count =
                questions.filter(
                  (question) =>
                    question.category ===
                    category,
                ).length;

              return (
                <label
                  className={`filter-option ${
                    enabled
                      ? "active"
                      : ""
                  }`}
                  key={category}
                >
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={() =>
                      toggleCategory(
                        category,
                      )
                    }
                  />

                  <span className="check">
                    {enabled
                      ? "✓"
                      : ""}
                  </span>

                  <span>
                    <strong>
                      {category}
                    </strong>

                    <small>
                      {count} words
                    </small>
                  </span>
                </label>
              );
            },
          )}
        </div>

        <div className="sidebar-note">
          <strong>
            Derivational
          </strong>

          <p>
            Creates a new lexeme or
            changes lexical meaning or
            category.
          </p>

          <strong>
            Inflectional
          </strong>

          <p>
            Adds grammatical
            information without
            creating a new lexeme.
          </p>
        </div>
      </aside>

      <main className="app">
        <header className="app-header">
          <div>
            <p className="eyebrow">
              English morphology
            </p>

            <h1>
              Morphology Trainer
            </h1>

            <p>
              Classify the word,
              identify every affix,
              and determine whether
              each affix is
              derivational or
              inflectional.
            </p>
          </div>

          <div className="score">
            <span>
              Score
            </span>

            <strong>
              {score.correct}
              <small>
                /{score.total}
              </small>
            </strong>
          </div>
        </header>

        <section className="word-card">
          <div className="word-card-header">
            <span>
              Analyse this word
            </span>

            <span>
              {questions.length}-word
              bank
            </span>
          </div>

          <div className="word-stage">
            <span
              className="decoration decoration-one"
              aria-hidden="true"
            />

            <span
              className="decoration decoration-two"
              aria-hidden="true"
            />

            <p>
              {
                currentQuestion.word
              }
            </p>
          </div>
        </section>

        <section className="task-card">
          <div className="task-heading">
            <span className="task-number">
              1
            </span>

            <div>
              <p className="section-kicker">
                Word structure
              </p>

              <h2>
                Is this word simple
                or complex?
              </h2>
            </div>
          </div>

          <div className="complexity-row">
            {complexityChoices.map(
              (choice) => (
                <button
                  type="button"
                  className={
                    complexityAnswer ===
                    choice
                      ? "selected"
                      : ""
                  }
                  disabled={submitted}
                  key={choice}
                  onClick={() =>
                    chooseComplexity(
                      choice,
                    )
                  }
                >
                  {choice}
                </button>
              ),
            )}
          </div>
        </section>

        <section
          className={`task-card ${
            complexityAnswer !==
              "Complex"
              ? "disabled-task"
              : ""
          }`}
        >
          <div className="task-heading">
            <span className="task-number">
              2
            </span>

            <div>
              <p className="section-kicker">
                Affix identification
              </p>

              <h2>
                Select every affix
              </h2>
            </div>
          </div>

          <p className="task-help">
            Prefixes have a trailing
            hyphen; suffixes have a
            leading hyphen.
          </p>

          <div className="affix-grid">
            {affixChoices.map(
              (form) => (
                <button
                  type="button"
                  className={
                    selectedAffixes.includes(
                      form,
                    )
                      ? "selected"
                      : ""
                  }
                  disabled={
                    submitted ||
                    complexityAnswer !==
                      "Complex"
                  }
                  key={form}
                  onClick={() =>
                    toggleAffix(form)
                  }
                >
                  {form}
                </button>
              ),
            )}
          </div>
        </section>

        <section
          className={`task-card ${
            selectedAffixes.length ===
              0
              ? "disabled-task"
              : ""
          }`}
        >
          <div className="task-heading">
            <span className="task-number">
              3
            </span>

            <div>
              <p className="section-kicker">
                Affix classification
              </p>

              <h2>
                Classify each
                selected affix
              </h2>
            </div>
          </div>

          {selectedAffixes.length ===
          0 ? (
            <p className="empty-state">
              Select an affix in step
              2 to classify it.
            </p>
          ) : (
            <div className="classification-list">
              {selectedAffixes.map(
                (form) => (
                  <div
                    className="classification-row"
                    key={form}
                  >
                    <strong>
                      {form}
                    </strong>

                    <div>
                      {affixKinds.map(
                        (kind) => (
                          <button
                            type="button"
                            className={
                              classifications[
                                form
                              ] === kind
                                ? "selected"
                                : ""
                            }
                            disabled={
                              submitted
                            }
                            key={kind}
                            onClick={() =>
                              classifyAffix(
                                form,
                                kind,
                              )
                            }
                          >
                            {kind}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>
          )}
        </section>

        {!submitted ? (
          <div className="action-row">
            <button
              type="button"
              className="secondary-button"
              onClick={nextQuestion}
            >
              New random word
            </button>

            <button
              type="button"
              className="primary-button"
              disabled={!canSubmit}
              onClick={submitAnswer}
            >
              Submit analysis
            </button>
          </div>
        ) : (
          <section
            className={`feedback ${
              overallCorrect
                ? "correct"
                : "incorrect"
            }`}
          >
            <p className="section-kicker">
              Analysis result
            </p>

            <h2>
              {overallCorrect
                ? "Correct"
                : "Review the analysis"}
            </h2>

            <div className="result-grid">
              <div
                className={
                  complexityCorrect
                    ? "result-correct"
                    : "result-incorrect"
                }
              >
                <strong>
                  Structure
                </strong>

                <span>
                  {correctComplexity}
                </span>
              </div>

              <div
                className={
                  affixesCorrect
                    ? "result-correct"
                    : "result-incorrect"
                }
              >
                <strong>
                  Affixes
                </strong>

                <span>
                  {correctAffixes.length
                    ? correctAffixes.join(
                        ", ",
                      )
                    : "none"}
                </span>
              </div>

              <div
                className={
                  classificationsCorrect
                    ? "result-correct"
                    : "result-incorrect"
                }
              >
                <strong>
                  Classification
                </strong>

                <span>
                  {classificationsCorrect
                    ? "Correct"
                    : "Needs review"}
                </span>
              </div>
            </div>

            <div className="analysis">
              <p className="analysis-label">
                Morpheme breakdown
              </p>

              <p className="breakdown">
                {getBreakdown(
                  currentQuestion,
                )}
              </p>

              <div className="root-row">
                <span>
                  Root
                </span>

                <strong>
                  {
                    currentQuestion.root
                  }
                </strong>
              </div>

              {
                currentQuestion.affixes
                  .length === 0 ? (
                  <p className="analysis-note">
                    {
                      currentQuestion.note
                    }
                  </p>
                ) : (
                  <div className="correct-affix-list">
                    {currentQuestion.affixes.map(
                      (item) => (
                        <article
                          key={`${item.form}-${item.kind}`}
                        >
                          <div>
                            <strong>
                              {item.form}
                            </strong>

                            <span>
                              {
                                item.position
                              }
                            </span>
                          </div>

                          <p>
                            <b>
                              {item.kind}
                            </b>
                            :{" "}
                            {item.function}.
                          </p>
                        </article>
                      ),
                    )}
                  </div>
                )
              }

              <p className="analysis-note">
                {
                  currentQuestion.note
                }
              </p>
            </div>

            <button
              type="button"
              className="primary-button"
              onClick={nextQuestion}
            >
              Next word
            </button>
          </section>
        )}

        <section className="history-card">
          <div className="history-heading">
            <div>
              <p className="section-kicker">
                Your progress
              </p>

              <h2>
                Attempt history
              </h2>

              <p>
                The last 50 analyses
                are saved on this
                device.
              </p>
            </div>

            {history.length > 0 && (
              <button
                type="button"
                className="clear-button"
                onClick={() =>
                  setHistory([])
                }
              >
                Clear history
              </button>
            )}
          </div>

          {history.length === 0 ? (
            <p className="history-empty">
              No analyses have been
              submitted yet.
            </p>
          ) : (
            <div className="history-list">
              {history.map(
                (entry) => (
                  <article
                    className={`history-entry ${
                      entry.isCorrect
                        ? "correct"
                        : "incorrect"
                    }`}
                    key={entry.id}
                  >
                    <div>
                      <strong>
                        {entry.word}
                      </strong>

                      <span>
                        {entry.isCorrect
                          ? "Correct"
                          : "Incorrect"}
                      </span>
                    </div>

                    <p>
                      Structure:{" "}
                      <b>
                        {
                          entry.correctComplexity
                        }
                      </b>
                    </p>

                    <p>
                      Affixes:{" "}
                      <b>
                        {entry.correctAffixes
                          .length
                          ? entry.correctAffixes.join(
                              ", ",
                            )
                          : "none"}
                      </b>
                    </p>

                    <time>
                      {new Date(
                        entry.submittedAt,
                      ).toLocaleString()}
                    </time>
                  </article>
                ),
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
