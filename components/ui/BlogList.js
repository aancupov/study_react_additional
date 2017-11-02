import React from 'react';
import DOM from 'react-dom-factories'
import PropTypes from 'prop-types'
import _ from 'lodash';
import BlogItem from './BlogItem';

const BlogList = ({ items, nlikes, like }) => (
  DOM.ul(
    null,
    _.map(
      items,
      (item, id) => (
        DOM.li({ key: id }, React.createElement(BlogItem, { item, id, nlikes, like } ))
      )
    )
  )
)

export default BlogList;