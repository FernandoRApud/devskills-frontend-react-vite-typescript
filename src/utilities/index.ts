export const ROUTES = {
  NOT_FOUND: '*',
  HOME: '/',
  ABOUTME: '/aboutme',
};

export const REGEX = {
  COUNT_CHARACTERS_NOT_WHITESPACES: /(\S\s*){3,}/,
  ONLY_POSITIVE_NUMBERS: /^[1-9]+[0-9]*$/,
  NOT_VALID_NORMAL_LINESCORE: /^((?!-).)*$/,
  ONLY_ALPHABETIC_VALUES: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
  SSN_PATTERN: /^\d{3}-\d{2}-\d{4}$/
};
