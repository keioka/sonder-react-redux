import _ from 'lodash'

export const generateClassFromStatus: Function = (status: Object, classes: Object): string => {
  if (typeof classes.isActive === 'undefined' || classes.isEnd === 'undefined' || typeof classes.isMatched === 'undefined') {
    throw new Error('Define valid classes')
  }

  if (typeof status.isEnd === 'undefined' || typeof status.isMatched === 'undefined') {
    throw new Error('Define valid status')
  }

  const { isEnd, isMatched } = status

  if (isEnd) {
    return classes.isEnd
  } else if (isMatched) {
    return classes.isMathced
  }

  return classes.isActive
}

export const findPost: Function = (posts: Array, postId: number): Object => _.find(posts, (post) => post.id === postId)
