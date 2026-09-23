test('cli-template.mjs can be imported without error', async () => {
  process.env.LOG_LEVEL = 'none';
  await import('../cli-template.mjs');
  expect(true).toBe(true);
});
