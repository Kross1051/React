import React from 'react';

const ListsComponent = () => {
    return (
        <div className='lists-container'>
            <h2>Lists</h2>

            <h3 className='lists-container'>Orderly lists</h3>
            <ol>
        <li>
          The first element
          <ol>
            <li>The nested element</li>
          </ol>
        </li>
      </ol>

      <h3 className='lists-container'>Unordered lists</h3>
      <ul>
        <li>
          The first element
          <ul>
            <li>The nested element</li>
          </ul>
        </li>
      </ul>
        </div>
    );
};

export default ListsComponent;