describe('Calculator', () => {
  it('addSuccess', () => {
    var a = 5
    var b = 12
    expect(a + b).to.equal(17)
  })
  it('multFailure', () => {
    var a = 2
    var b = 4
    expect(a * b).to.equal(6)
  })
  it('subFailure', () => {
    var a = 10
    var b = 5
    expect(a - b).to.equal(1)
  })
  it('divSuccess', () => {
    var a = 10
    var b = 5
    expect(a / b).to.equal(2)
  })
})
