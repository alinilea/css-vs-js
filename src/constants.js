export const TEXT_NO_1_LOWER_CASE = 'welcome';
export const TEXT_NO_2_LOWER_CASE = 'the cookie went to the doctor because it felt crumbly';
export const TEXT_NO_3_LOWER_CASE = 'whiteboards are remarkable';

export const STEPS = [
  { name: 'Step 1' }, { name: 'Step 2' }, { name: 'Step 3' },
];
export const FRUITS = [
  { name: 'banana' }, { name: 'kiwi' }, { name: 'orange' }, { name: 'apple' }, { name: 'pear' },
];
export const BOOKS = [
  {
    genre: 'Fantasy',
    books: [{ title: 'The Lord of the Rings' }]
  },
  {
    genre: 'SF',
    books: [{ title: 'Dune' }, { title: 'The Martian' }]
  }
];

const TEXT_TRANSFORM_UPPERCASE_VS_STR_TO_UPPER_CASE_METH = 'text_transform_uppercase_vs_str_to_upper_case_meth'
const TEXT_TRANSFORM_CAPITALIZE_VS_CAPITALIZE_STR_FUNC = 'text_transform_capitalize_vs_capitalize_str_func'
const COLOR_SCHEME_VS_ON_COLOR_SCHEME_CHANGE_FUNC = 'color_scheme_vs_on_color_scheme_change_func'

const LAST_CHILD_PSEUDO_CLASS_VS_IS_LAST_CHILD_VAR = 'last_child_pseudo_class_vs_is_last_child_var'
const NTH_OF_TYPE_EVEN_PSEUDO_CLASS_VS_IS_EVEN_VAR = 'nth_of_type_even_pseudo_class_vs_is_even_var'
const ONLY_CHILD_PSEUDO_CLASS_VS_IS_ONLY_CHILD_VAR = 'only_child_pseudo_class_vs_is_only_child_var'

const FIRST_LETTER_PSEUDO_EL_VS_CAPITALIZE_FIRST_LETTER_FUNC = 'first_letter_pseudo_el_vs_capitalize_first_letter_func'

export const EXAMPLE = {
  // CSS properties
  TEXT_TRANSFORM_CAPITALIZE_VS_CAPITALIZE_STR_FUNC: {
    heading: {
      id: TEXT_TRANSFORM_CAPITALIZE_VS_CAPITALIZE_STR_FUNC,
      cssText: 'text-transform: capitalize',
      jsText: 'capitalizeEachWord(str)'
    },
  },
  TEXT_TRANSFORM_UPPERCASE_VS_STR_TO_UPPER_CASE_METH: {
    heading: {
      id: TEXT_TRANSFORM_UPPERCASE_VS_STR_TO_UPPER_CASE_METH,
      cssText: 'text-transform: uppercase',
      jsText: 'str.toUpperCase()'
    },
    note: {
      cssText: 'text-transform: lowercase',
      jsText: 'str.toLowerCase()',
    }
  },
  COLOR_SCHEME_VS_ON_COLOR_SCHEME_CHANGE_FUNC: {
    heading: {
      id: COLOR_SCHEME_VS_ON_COLOR_SCHEME_CHANGE_FUNC,
      cssText: 'color-scheme',
      jsText: 'onColorSchemeChange()'
    },
  },
  // CSS pseudo-classes
  LAST_CHILD_PSEUDO_CLASS_VS_IS_LAST_CHILD_VAR: {
    heading: {
      id: LAST_CHILD_PSEUDO_CLASS_VS_IS_LAST_CHILD_VAR,
      cssText: ':last-child',
      jsText: 'isLastChild'
    },
    note: {
      cssText: ':first-child',
      jsText: 'isFirstChild',
    }
  },
  NTH_OF_TYPE_EVEN_PSEUDO_CLASS_VS_IS_EVEN_VAR: {
    heading: {
      id: NTH_OF_TYPE_EVEN_PSEUDO_CLASS_VS_IS_EVEN_VAR,
      cssText: ':nth-of-type(even)',
      jsText: 'isEven'
    },
    note: {
      cssText: ':nth-of-type(odd)',
      jsText: 'isOdd'
    }
  },
  ONLY_CHILD_PSEUDO_CLASS_VS_IS_ONLY_CHILD_VAR: {
    heading: {
      id: ONLY_CHILD_PSEUDO_CLASS_VS_IS_ONLY_CHILD_VAR,
      cssText: ':only-child',
      jsText: 'isOnlyChild'
    },
  },
  // CSS pseudo-elements
  FIRST_LETTER_PSEUDO_EL_VS_CAPITALIZE_FIRST_LETTER_FUNC: {
    heading: {
      id: FIRST_LETTER_PSEUDO_EL_VS_CAPITALIZE_FIRST_LETTER_FUNC,
      cssText: '::first-letter',
      jsText: 'capitalizeFirstLetter(str)'
    },
  },
}

export const COLOR_SCHEME_OPTION = {
  LIGHT_JS: 'lightJS',
  DARK_JS: 'darkJS',
  LIGHT_CSS: 'lightCSS',
  DARK_CSS: 'darkCSS',
}
