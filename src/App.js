import { useEffect, useState } from 'react'
import './styles.scss';

import { Title, CssReference, Example, Requirement, Method } from './components'

import {
  EXAMPLE,
  TEXT_NO_1_LOWER_CASE,
  TEXT_NO_2_LOWER_CASE,
  TEXT_NO_3_LOWER_CASE,
  BOOKS,
  FRUITS,
  STEPS,
  COLOR_SCHEME_OPTION,
} from './constants'
import { capitalizeFirstLetter, capitalizeEachWord } from './helpers';

export default function App() {
  // BEGIN - COLOR_SCHEME_VS_ON_COLOR_SCHEME_CHANGE_FUNC
  const [colorScheme, setColorScheme] = useState('');
  const onColorSchemeChange = (e) => setColorScheme(e.target.value)
  // END - COLOR_SCHEME_VS_ON_COLOR_SCHEME_CHANGE_FUNC

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView()
    }
  }, []);

  return (
    <div className={`color-scheme-js ${colorScheme}`}>
      <div className='container'>
        <Title />

        <CssReference name='Properties'>
          <Example {...EXAMPLE.TEXT_TRANSFORM_UPPERCASE_VS_STR_TO_UPPER_CASE_METH}>
            <Requirement source={TEXT_NO_1_LOWER_CASE}>
              <p>Convert all the alphabetic characters in a string to uppercase.</p>
            </Requirement>

            <Method name='css'>
              <div className='text-uppercase-css'>{TEXT_NO_1_LOWER_CASE}</div>
            </Method>

            <Method name='js'>
              <div>{TEXT_NO_1_LOWER_CASE.toUpperCase()}</div>
            </Method>
          </Example>

          <Example {...EXAMPLE.TEXT_TRANSFORM_CAPITALIZE_VS_CAPITALIZE_STR_FUNC}>
            <Requirement source={TEXT_NO_2_LOWER_CASE}>
              <p>Convert the first letter of each word in a string to uppercase.</p>
            </Requirement>

            <Method name='css'>
              <div className='text-transform-capitalize-css'>{TEXT_NO_2_LOWER_CASE}</div>
            </Method>

            <Method name='js'>
              <div>{capitalizeEachWord(TEXT_NO_2_LOWER_CASE)}</div>
            </Method>
          </Example>


          <Example {...EXAMPLE.COLOR_SCHEME_VS_ON_COLOR_SCHEME_CHANGE_FUNC}>
            <Requirement>
              <p>
                Create custom "light" and "dark" color schemes
                to manually change the user's OS color scheme preference.
                <br />
                <br />
                When "Auto" is selected, the user's OS color scheme preference
                is detected by the "prefers-color-scheme" media feature,
                which applies the app's defined color scheme.
              </p>
            </Requirement>

            <Method name='css'>
              <div>
                <label htmlFor='color-scheme-css-id'>Choose color scheme</label>
                <select
                  id='color-scheme-css-id'
                  defaultValue={COLOR_SCHEME_OPTION.LIGHT_CSS}
                >
                  <option value="">Auto</option>
                  <option value={COLOR_SCHEME_OPTION.LIGHT_CSS}>Light</option>
                  <option value={COLOR_SCHEME_OPTION.DARK_CSS}>Dark</option>
                </select>
              </div>
            </Method>

            <Method name='js'>
              <div>
                <label htmlFor='color-scheme-js-id'>Choose color scheme</label>
                <select
                  id='color-scheme-js-id'
                  value={colorScheme}
                  onChange={onColorSchemeChange}
                >
                  <option value="">Auto</option>
                  <option value={COLOR_SCHEME_OPTION.LIGHT_JS}>Light</option>
                  <option value={COLOR_SCHEME_OPTION.DARK_JS}>Dark</option>
                </select>
              </div>
            </Method>
          </Example>
        </CssReference>

        <CssReference name='Pseudo-classes'>
          <Example {...EXAMPLE.LAST_CHILD_PSEUDO_CLASS_VS_IS_LAST_CHILD_VAR}>
            <Requirement source={STEPS}>
              <p>
                Display a list of step names, separated by arrows.
                <br />
                The last step name in the list should not be followed by an arrow!
              </p>
            </Requirement>

            <Method name='css'>
              <ul className='ul-li-inline-block'>{
                STEPS.map((user, index) => (
                  <li key={index} className='last-child-css'>
                    {user.name}
                  </li>
              ))}</ul>
            </Method>

            <Method name='js'>
              <ul className='ul-li-inline-block'>{
                STEPS.map((user, index) => {
                  const isLastChild = index === STEPS.length - 1;
                  return (
                    <li key={index} className={`${isLastChild ? '' : 'last-child-js'}`}>
                      {user.name}
                    </li>
                  );
              })}</ul>
            </Method>
          </Example>

          <Example {...EXAMPLE.NTH_OF_TYPE_EVEN_PSEUDO_CLASS_VS_IS_ODD_VAR}>
            <Requirement source={FRUITS}>
              <p>
                Display a list of fruits in an ordered list of items and
                apply a bold font weight to each even item in the list.
                <br />
                <br />
                Remember that "nth-of-type()"/"nth-child()" in CSS uses a 1-based index, while
                the array we are iterating through in JS uses a 0-based index.
                That's why we use "isOdd" instead of "isEven".
              </p>
            </Requirement>

            <Method name='css'>
              <ol className='ol-inline-block'>{
                FRUITS.map((fruit, index) => (
                  <li key={index} className='nth-of-type-even-css'>
                    {fruit.name}
                  </li>
              ))}</ol>
            </Method>

            <Method name='js'>
              <ol className='ol-inline-block'>{
                FRUITS.map((fruit, index) => {
                  const isOdd = index % 2 !== 0;
                  return (
                    <li key={index} className={isOdd ? 'nth-of-type-odd-js' : ''}>
                      {fruit.name}
                    </li>
                  );
              })}</ol>
            </Method>
          </Example>

          <Example {...EXAMPLE.ONLY_CHILD_PSEUDO_CLASS_VS_IS_ONLY_CHILD_VAR}>
            <Requirement source={BOOKS}>
              <div>
                Display a list of books, organized by genre.
                Each genre name should be displayed as a list item,
                and titles of books in that genre should be displayed as sub-items under the genre name.
                <br />
                For single sub-item book title apply a bold font weight.
              </div>
            </Requirement>

            <Method name='css'>
              <ol className='ol-inline-block'>{
                BOOKS.map(({ genre, books }, index) => (
                  <li key={index}>
                    <span>{genre}</span>
                    <ul>{
                      books.map((book,idx) => (
                        <li key={idx} className='only-child-css'>
                          {book.title}
                        </li>
                    ))}</ul>
                  </li>
              ))}</ol>
            </Method>

            <Method name='js'>
              <ol className='ol-inline-block'>{
                BOOKS.map(({ genre, books }, index) => (
                  <li key={index}>
                    <span>{genre}</span>
                    <ul>{
                      books.map((book, index) => {
                        const isOnlyChild = books.length === 1
                        return (
                          <li key={index} className={isOnlyChild ? 'only-child-js' : ''}>
                            {book.title}
                          </li>
                    )})}</ul>
                  </li>
              ))}</ol>
            </Method>
          </Example>
        </CssReference>

        <CssReference name='Pseudo-elements'>
          <Example {...EXAMPLE.FIRST_LETTER_PSEUDO_EL_VS_CAPITALIZE_FIRST_LETTER_FUNC}>
            <Requirement source={TEXT_NO_3_LOWER_CASE}>
              <div>Capitalize the first letter of a string.</div>
            </Requirement>
            <Method name='css'>
              <div className='first-letter-css'>{TEXT_NO_3_LOWER_CASE}</div>
            </Method>

            <Method name='js'>
              <div>{capitalizeFirstLetter(TEXT_NO_3_LOWER_CASE)}</div>
            </Method>
          </Example>
        </CssReference>
      </div>
    </div>
  );
}
