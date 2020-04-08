import React from 'react'
import Markdown from 'react-markdown';

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children)
  var text = children.reduce(flatten, '')
  var slug = text.toLowerCase().replace(/\W/g, '-').replace(/^-/, '').replace(/-$/, '')
  return React.createElement('h' + props.level, { id: slug }, props.children)
}

export default (props: { source: string }) => {
  return (
    <Markdown
      {...props}
      renderers={{ heading: HeadingRenderer }}
    />
  )
}