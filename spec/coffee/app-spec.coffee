describe 'TheTruth', ->
  beforeEach ->
    @theTruth = new TheTruth

  it 'is out there', ->
    (expect @theTruth.isOutThere()).toBeTruthy()