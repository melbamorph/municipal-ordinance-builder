const copyToClipboard = require('../assets/js/copy-link');

describe('copyToClipboard', () => {
  let writeTextMock;

  beforeEach(() => {
    // Mock alert to prevent dialogs during tests
    global.alert = jest.fn();

    // Mock window.location
    delete window.location;
    window.location = {
      origin: 'https://example.com',
      pathname: '/page'
    };

    // Mock navigator.clipboard.writeText
    writeTextMock = jest.fn().mockResolvedValue();
    Object.defineProperty(navigator, 'clipboard', {
      writable: true,
      value: { writeText: writeTextMock }
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('writes correct URL to clipboard', async () => {
    await copyToClipboard('#section');
    expect(writeTextMock).toHaveBeenCalledWith(
      'https://example.com/page#section'
    );
  });
});
