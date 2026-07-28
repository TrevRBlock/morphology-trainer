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

const HISTORY_KEY =
  "morphology-trainer-history-v3";

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

function getAffixKey(
  index: number,
): string {
  return `affix-${index}`;
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

  const correctComplexity:
    ComplexityAnswer =
      currentQuestion.affixes
        .length === 0
        ? "Simple"
        : "Complex";

  const isActuallyComplex =
    correctComplexity ===
    "Complex";

  const showClassificationTask =
    !submitted &&
    isActuallyComplex &&
    complexityAnswer ===
      "Complex";

  const allAffixesClassified =
    currentQuestion.affixes.every(
      (_, index) =>
        classifications[
          getAffixKey(index)
        ] !== undefined,
    );

  const complexityCorrect =
    complexityAnswer ===
    correctComplexity;

  const classificationsCorrect =
    !isActuallyComplex ||
    currentQuestion.affixes.every(
      (item, index) =>
        classifications[
          getAffixKey(index)
        ] === item.kind,
    );

  const overallCorrect =
    complexityCorrect &&
    classificationsCorrect;

  const canSubmit =
    complexityAnswer !== null &&
    (
      complexityAnswer ===
        "Simple" ||
      !isActuallyComplex ||
      allAffixesClassified
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
      setClassifications({});
    }
  }

  function classifyAffix(
    index: number,
    kind: AffixKind,
  ) {
    if (submitted) {
      return;
    }

    setClassifications(
      (previous) => ({
        ...previous,
        [getAffixKey(index)]:
          kind,
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
          correctAffixes:
            currentQuestion.affixes.map(
              (item) => item.form,
            ),
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
    setClassifications({});
    setSubmitted(false);
  }

  function getComplexityClass(
    choice: ComplexityAnswer,
  ): string {
    if (!submitted) {
      return complexityAnswer ===
        choice
        ? "selected"
        : "";
    }

    if (
      choice ===
      correctComplexity
    ) {
      return "correct-answer";
    }

    if (
      choice ===
      complexityAnswer
    ) {
      return "incorrect-answer";
    }

    return "";
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
              Decide whether the word
              is simple or complex.
              For complex words,
              classify each displayed
              affix.
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
                    getComplexityClass(
                      choice,
                    )
                  }
                  disabled={submitted}
                  key={choice}
                  onClick={() =>
                    chooseComplexity(
                      choice,
                    )
                  }
                >
                  <span>
                    {choice}
                  </span>

                  {submitted &&
                    choice ===
                      correctComplexity && (
                      <small>
                        Correct
                      </small>
                    )}

                  {submitted &&
                    choice ===
                      complexityAnswer &&
                    choice !==
                      correctComplexity && (
                      <small>
                        Incorrect
                      </small>
                    )}
                </button>
              ),
            )}
          </div>
        </section>

        {showClassificationTask && (
          <section className="task-card affix-task">
            <div className="task-heading">
              <span className="task-number">
                2
              </span>

              <div>
                <p className="section-kicker">
                  Affix classification
                </p>

                <h2>
                  Classify each affix
                </h2>
              </div>
            </div>

            <p className="task-help">
              The affixes are provided.
              Choose whether each one
              is derivational or
              inflectional.
            </p>

            <div className="classification-list">
              {currentQuestion.affixes.map(
                (item, index) => {
                  const key =
                    getAffixKey(
                      index,
                    );

                  return (
                    <div
                      className="classification-row"
                      key={`${item.form}-${index}`}
                    >
                      <div className="affix-label">
                        <strong>
                          {item.form}
                        </strong>

                        <span>
                          {item.position}
                        </span>
                      </div>

                      <div className="kind-buttons">
                        {affixKinds.map(
                          (kind) => (
                            <button
                              type="button"
                              className={
                                classifications[
                                  key
                                ] === kind
                                  ? "selected"
                                  : ""
                              }
                              key={kind}
                              onClick={() =>
                                classifyAffix(
                                  index,
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
                  );
                },
              )}
            </div>
          </section>
        )}

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
                : "Incorrect"}
            </h2>

            <p className="result-summary">
              <strong>
                {
                  currentQuestion.word
                }
              </strong>{" "}
              is{" "}
              <strong>
                {correctComplexity.toLowerCase()}
              </strong>
              .
            </p>

            {isActuallyComplex && (
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

                <div className="correct-affix-list">
                  {currentQuestion.affixes.map(
                    (item, index) => {
                      const selectedKind =
                        classifications[
                          getAffixKey(
                            index,
                          )
                        ];

                      return (
                        <article
                          className={
                            selectedKind ===
                            item.kind
                              ? "correct-affix"
                              : "incorrect-affix"
                          }
                          key={`${item.form}-${index}`}
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
                      );
                    },
                  )}
                </div>

                <p className="analysis-note">
                  {
                    currentQuestion.note
                  }
                </p>
              </div>
            )}

            {!isActuallyComplex && (
              <p className="simple-note">
                {
                  currentQuestion.note
                }
              </p>
            )}

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
                      Your answer:{" "}
                      <b>
                        {
                          entry.selectedComplexity
                        }
                      </b>
                    </p>

                    <p>
                      Correct answer:{" "}
                      <b>
                        {
                          entry.correctComplexity
                        }
                      </b>
                    </p>

                    {entry.correctAffixes
                      .length > 0 && (
                      <p>
                        Affixes:{" "}
                        <b>
                          {
                            entry.correctAffixes.join(
                              ", ",
                            )
                          }
                        </b>
                      </p>
                    )}

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
