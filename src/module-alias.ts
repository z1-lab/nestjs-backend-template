if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const alias = require('module-alias');

  alias.addAliases({
    '@': __dirname,
  });
}
