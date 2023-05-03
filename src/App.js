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
              <p>Converts all the alphabetic characters in a string to uppercase.</p>
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
              <p>Capitalize the first letter of each word in a string.</p>
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
              <p>Create custom "light" and "dark" color schemes for the entire page.</p>
            </Requirement>

            <Method name='css'>
              <div>
                <label htmlFor='color-selector-css'>Choose color scheme</label>
                <select id='color-selector-css'>
                  <option value="">Auto</option>
                  <option value="lightCSS">Light</option>
                  <option value="darkCSS">Dark</option>
                </select>
              </div>
            </Method>

            <Method name='js'>
              <div>
                <label htmlFor='color-selector-js'>Choose color scheme</label>
                <select
                  id='color-selector-js'
                  value={colorScheme}
                  onChange={onColorSchemeChange}
                >
                  <option value="">Auto</option>
                  <option value="lightJS">Light</option>
                  <option value="darkJS">Dark</option>
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

          <Example {...EXAMPLE.NTH_OF_TYPE_EVEN_PSEUDO_CLASS_VS_IS_EVEN_VAR}>
            <Requirement source={FRUITS}>
              <p>
                Display a list of fruits in an ordered list of items and
                apply a bold font weight to each even item in the list.
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
                  const isEven = (index + 1) % 2 === 0;
                  return (
                    <li key={index} className={isEven ? 'nth-of-type-even-js' : ''}>
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
