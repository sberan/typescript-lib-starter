import { expect } from 'chai'
import { something } from '../src'

describe('my library', () => {
  it('should do some things', () => {
    expect(something).to.eql(42)
  })
})
