export interface ElasticsearchResult {
  took:      number;
  timed_out: boolean;
  _shards:   Shards;
  hits:      Hits;
  suggest:   Suggest;
}

export interface Shards {
  total:      number;
  successful: number;
  skipped:    number;
  failed:     number;
}

export interface Hits {
  total:     number;
  max_score: number;
  hits:      Hit[];
}

export interface Suggest {
  all_suggestions:  Suggestion[];
  user_suggestions: Suggestion[];
}

export interface Suggestion {
  text:    string;
  offset:  number;
  length:  number;
  options: Option[];
}

export interface Hit {
  _index:   string;
  _type:    string;
  _id:      string;
  _score:   number;
  _source:  Source;
}

export interface Option {
  text:     string;
  _index:   string;
  _type:    string;
  _id:      string;
  _score:   number;
  _source:  Source;
  contexts: OptionContexts;
}

export interface Source {
  model:                string;
  id:                   number;
  score:                number;
  replies:              number;
  subject:              string;
  last_post_created_at: Date;
  url:                  string;
  user_id:              number | null;
  forum:                Forum;
  suggest:              SuggestElement[];
  participants:         number[];
  subscribers:          number[];
}

export interface Forum {
  id:   number;
  name: string;
  slug: string;
  url:  string;
}

export interface SuggestElement {
  input:    string;
  weight:   number;
  contexts: SuggestContexts;
}

export interface SuggestContexts {
  category: string[];
}

export interface OptionContexts {
  model: string[];
}