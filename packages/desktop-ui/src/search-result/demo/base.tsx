import React from 'react'
import { useDebounce } from 'ahooks'
import { SearchResult } from '@template-pro/desktop-ui'

const mockData = [
  'Jason2',
  'Amanda1',
  'Jenny2',
  'Bob1',
  'Cindy2',
  'David1',
  'Eva2',
]

export default () => {
  const [keyword, setKeyword] = React.useState('')

  const debounceKeyword = useDebounce(keyword, { wait: 500 })

  const results = React.useMemo(() => {
    if (!debounceKeyword)
      return []

    return mockData.filter(
      item => item.toUpperCase().includes(debounceKeyword.toUpperCase()),
    )
  }, [debounceKeyword])

  return (
    <SearchResult onSearch={setKeyword}>
      {results.map(item => <p key={item}>{item}</p>)}
    </SearchResult>
  )
}
