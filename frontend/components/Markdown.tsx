import React from 'react'
import ReactMarkdown from 'react-markdown';
import { useEffect, useRef, useState } from 'react';
import { useScroll } from 'react-use-gesture';
import Markdown from 'react-markdown';

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

export function markdownTreeToText(props) {
  var children = React.Children.toArray(props.children)
  var text = children.reduce(flatten, '')
  return text
}

export function textToSlug(text = '') {
  return text.toLowerCase().replace(/\W/g, '-').replace(/^-/, '').replace(/-$/, '')
}

export function markdownTreeToSlug(props) {
  var text = markdownTreeToText(props)
  var slug = textToSlug(text)
  return slug
}

export function markdownTreeToHeadingWithAnchor(props) {
  const slug = markdownTreeToSlug(props)
  return React.createElement('h' + props.level, { id: slug, ['data-markdown-toc']: slug }, props.children)
}

function flattenNode(text, child) {
  return typeof child?.value === 'string'
    ? text + child?.value
    : child.children.reduce(flattenNode, text)
}

export function nodeToText(node) {
  let text = typeof node.value === 'string' ? node.value : ''
  var children = Array.from(node.children)
  text = children.reduce(flattenNode, text)
  return text as string
}

export const useMarkdownTree = () => {
  const [documentTree, setDocumentTree] = useState<ReactMarkdown.MarkdownAbstractSyntaxTree[]>([])

  const docTree = useRef<ReactMarkdown.MarkdownAbstractSyntaxTree[]>([])

  const captureDocumentNodesAstPlugin: ReactMarkdown.MdastPlugin = (tree, props) => {
    docTree.current = tree.children
    return tree
  }

  useEffect(() => {
    if (JSON.stringify(docTree.current) !== JSON.stringify(documentTree)) {
      setDocumentTree(docTree.current)
    }
  }, [docTree.current, documentTree, setDocumentTree])

  return [documentTree, captureDocumentNodesAstPlugin] as [typeof documentTree, typeof captureDocumentNodesAstPlugin]
}

type IdentifiedNode = Markdown.MarkdownAbstractSyntaxTree & { slug: string }

export const useMarkdownActiveNodeIndex = (
  docTree: IdentifiedNode[],
  filter: ((node: IdentifiedNode) => boolean) = () => true
) => {
  const [activeHeadingIndex, setActiveHeadingIndex] = useState<number>(-1)

  const bind = useScroll(
    ({ xy: [, y] }) => {
      const headings = docTree
        .filter(filter)
        .map((node) => {
          return { ...node, y: document.getElementById(node.slug)?.getBoundingClientRect()?.top + y - (window.outerHeight / 2) }
        })
        .sort((a, b) => b.y - a.y)
        .filter((h) => {
          return h.y < y
        })

      setActiveHeadingIndex(headings[0]?.index)
    },
    { domTarget: typeof window !== 'undefined' ? window : undefined }
  )

  useEffect(bind, [bind])

  return activeHeadingIndex
}