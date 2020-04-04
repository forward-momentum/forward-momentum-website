/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { merge } from 'lodash'

export const ContentWrapper: React.FC<any> = (props) => {
  return (
    <Styled.div
      {...merge({
        sx: {
          margin: '0 auto',
          maxWidth: ['100%', 1200],
          px: [1, 3]
        },
      }, props)}
    />
  )
}