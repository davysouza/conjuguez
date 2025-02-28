import verbs from "@/assets/data.json"

export type Conjugation = {
  pronoun: string
  auxiliaries?: string[]
  verb: string
}

export type Tense = {
  tense: string
  conjugations: Conjugation[]
}

type Mode = {
  mode: string
  tenses: Tense[]
}

export type Type = {
  type: "simples" | "composes"
  modes: Mode[]
}

export type Voice = {
  voice: "active" | "passive"
  types: Type[]
}

export type Verb = {
  name: string
  description: string
  voices: Voice[]
}

export const loadVerbs = () => {
  return verbs as Verb[]
}

export const VerbData: Verb[] = [
  {
    name: "avoir",
    description: "Verbe transitif, auxiliaire du 3e groupe. Auxiliaire: avoir",
    voices: [
      {
        voice: "active",
        types: [
          {
            type: "simples",
            modes: [
              {
                mode: "indicatif",
                tenses: [
                  {
                    tense: "présent",
                    conjugations: [
                      { pronoun: "je (j')", verb: "ai" },
                      { pronoun: "tu", verb: "as" },
                      { pronoun: "il (elle)", verb: "a" },
                      { pronoun: "nous", verb: "avons" },
                      { pronoun: "vous", verb: "avez" },
                      { pronoun: "ils (elles)", verb: "ont" }
                    ]
                  },
                  {
                    tense: "imparfait",
                    conjugations: [
                      { pronoun: "je (j')", verb: "avais" },
                      { pronoun: "tu", verb: "avais" },
                      { pronoun: "il (elle)", verb: "avait" },
                      { pronoun: "nous", verb: "avions" },
                      { pronoun: "vous", verb: "aviez" },
                      { pronoun: "ils (elles)", verb: "avaient" }
                    ]
                  },
                  {
                    tense: "passé simple",
                    conjugations: [
                      { pronoun: "je (j')", verb: "eus" },
                      { pronoun: "tu", verb: "eus" },
                      { pronoun: "il (elle)", verb: "eut" },
                      { pronoun: "nous", verb: "eûmes" },
                      { pronoun: "vous", verb: "eûtes" },
                      { pronoun: "ils (elles)", verb: "eurent" }
                    ]
                  },
                  {
                    tense: "futur simple",
                    conjugations: [
                      { pronoun: "je (j')", verb: "aurai" },
                      { pronoun: "tu", verb: "auras" },
                      { pronoun: "il (elle)", verb: "aura" },
                      { pronoun: "nous", verb: "aurons" },
                      { pronoun: "vous", verb: "aurez" },
                      { pronoun: "ils (elles)", verb: "auront" }
                    ]
                  }
                ]
              },
              {
                mode: "subjonctif",
                tenses: [
                  {
                    tense: "présent",
                    conjugations: [
                      { pronoun: "que je (j')", verb: "aie" },
                      { pronoun: "que tu", verb: "aies" },
                      { pronoun: "qu'il (elle)", verb: "ait" },
                      { pronoun: "que nous", verb: "ayons" },
                      { pronoun: "que vous", verb: "ayez" },
                      { pronoun: "qu'ils (elles)", verb: "aient" }
                    ]
                  },
                  {
                    tense: "imparfait",
                    conjugations: [
                      { pronoun: "que je (j')", verb: "eusse" },
                      { pronoun: "que tu", verb: "eusses" },
                      { pronoun: "qu'il (elle)", verb: "eût" },
                      { pronoun: "que nous", verb: "eusions" },
                      { pronoun: "que vous", verb: "eussiez" },
                      { pronoun: "qu'ils (elles)", verb: "eussent" }
                    ]
                  }
                ]
              },
              {
                mode: "conditionnel",
                tenses: [
                  {
                    tense: "présent",
                    conjugations: [
                      { pronoun: "je (j')", verb: "aurais" },
                      { pronoun: "tu", verb: "aurais" },
                      { pronoun: "il (elle)", verb: "aurait" },
                      { pronoun: "nous", verb: "aurions" },
                      { pronoun: "vous", verb: "auriez" },
                      { pronoun: "ils (elles)", verb: "auraient" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "composes",
            modes: [
              {
                mode: "indicatif",
                tenses: [
                  {
                    tense: "passé composé",
                    conjugations: [
                      { pronoun: "je (j')", verb: "ai eu" },
                      { pronoun: "tu", verb: "as eu" },
                      { pronoun: "il (elle)", verb: "a eu" },
                      { pronoun: "nous", verb: "avons eu" },
                      { pronoun: "vous", verb: "avez eu" },
                      { pronoun: "ils (elles)", verb: "ont eu" }
                    ]
                  }
                ]
              },
              {
                mode: "subjonctif",
                tenses: [
                  {
                    tense: "passé",
                    conjugations: [
                      { pronoun: "que je (j')", verb: "aie eu" },
                      { pronoun: "que tu", verb: "aies eu" },
                      { pronoun: "qu'il (elle)", verb: "ait eu" },
                      { pronoun: "que nous", verb: "ayons eu" },
                      { pronoun: "que vous", verb: "ayez eu" },
                      { pronoun: "qu'ils (elles)", verb: "aient eu" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "aller",
    description: "Verbe transitif, auxiliaire du 3eme groupe. Auxiliaire: avoir",
    voices: [
      {
        voice: "active",
        types: [
          {
            type: "simples",
            modes: [
              {
                mode: "indicatif",
                tenses: [
                  {
                    tense: "présent",
                    conjugations: [
                      { pronoun: "je (j')", verb: "ai" },
                      { pronoun: "tu", verb: "as" },
                      { pronoun: "il (elle)", verb: "a" },
                      { pronoun: "nous", verb: "avons" },
                      { pronoun: "vous", verb: "avez" },
                      { pronoun: "ils (elles)", verb: "ont" }
                    ]
                  },
                  {
                    tense: "imparfait",
                    conjugations: [
                      { pronoun: "je (j')", verb: "avais" },
                      { pronoun: "tu", verb: "avais" },
                      { pronoun: "il (elle)", verb: "avait" },
                      { pronoun: "nous", verb: "avions" },
                      { pronoun: "vous", verb: "aviez" },
                      { pronoun: "ils (elles)", verb: "avaient" }
                    ]
                  },
                  {
                    tense: "passé simple",
                    conjugations: [
                      { pronoun: "je (j')", verb: "eus" },
                      { pronoun: "tu", verb: "eus" },
                      { pronoun: "il (elle)", verb: "eut" },
                      { pronoun: "nous", verb: "eûmes" },
                      { pronoun: "vous", verb: "eûtes" },
                      { pronoun: "ils (elles)", verb: "eurent" }
                    ]
                  },
                  {
                    tense: "futur simple",
                    conjugations: [
                      { pronoun: "je (j')", verb: "aurai" },
                      { pronoun: "tu", verb: "auras" },
                      { pronoun: "il (elle)", verb: "aura" },
                      { pronoun: "nous", verb: "aurons" },
                      { pronoun: "vous", verb: "aurez" },
                      { pronoun: "ils (elles)", verb: "auront" }
                    ]
                  }
                ]
              },
              {
                mode: "subjonctif",
                tenses: [
                  {
                    tense: "présent",
                    conjugations: [
                      { pronoun: "que je (j')", verb: "aie" },
                      { pronoun: "que tu", verb: "aies" },
                      { pronoun: "qu'il (elle)", verb: "ait" },
                      { pronoun: "que nous", verb: "ayons" },
                      { pronoun: "que vous", verb: "ayez" },
                      { pronoun: "qu'ils (elles)", verb: "aient" }
                    ]
                  },
                  {
                    tense: "imparfait",
                    conjugations: [
                      { pronoun: "que je (j')", verb: "eusse" },
                      { pronoun: "que tu", verb: "eusses" },
                      { pronoun: "qu'il (elle)", verb: "eût" },
                      { pronoun: "que nous", verb: "eusions" },
                      { pronoun: "que vous", verb: "eussiez" },
                      { pronoun: "qu'ils (elles)", verb: "eussent" }
                    ]
                  }
                ]
              },
              {
                mode: "conditionnel",
                tenses: [
                  {
                    tense: "présent",
                    conjugations: [
                      { pronoun: "je (j')", verb: "aurais" },
                      { pronoun: "tu", verb: "aurais" },
                      { pronoun: "il (elle)", verb: "aurait" },
                      { pronoun: "nous", verb: "aurions" },
                      { pronoun: "vous", verb: "auriez" },
                      { pronoun: "ils (elles)", verb: "auraient" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "composes",
            modes: [
              {
                mode: "indicatif",
                tenses: [
                  {
                    tense: "passé composé",
                    conjugations: [
                      { pronoun: "je (j')", verb: "ai eu" },
                      { pronoun: "tu", verb: "as eu" },
                      { pronoun: "il (elle)", verb: "a eu" },
                      { pronoun: "nous", verb: "avons eu" },
                      { pronoun: "vous", verb: "avez eu" },
                      { pronoun: "ils (elles)", verb: "ont eu" }
                    ]
                  }
                ]
              },
              {
                mode: "subjonctif",
                tenses: [
                  {
                    tense: "passé",
                    conjugations: [
                      { pronoun: "que je (j')", verb: "aie eu" },
                      { pronoun: "que tu", verb: "aies eu" },
                      { pronoun: "qu'il (elle)", verb: "ait eu" },
                      { pronoun: "que nous", verb: "ayons eu" },
                      { pronoun: "que vous", verb: "ayez eu" },
                      { pronoun: "qu'ils (elles)", verb: "aient eu" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
