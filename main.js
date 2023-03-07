module.exports.responseHooks = [
  context => {
  	const { store: { setItem } } = context;

  	if (context.request.getUrl().endsWith('login')) {
  		const body = JSON.parse(context.response.getBody().toString('utf-8'));
  		setItem('code2_access_token', body.access_token);
  		console.log('code2_access_token saved')
  	}
  }
];

module.exports.templateTags = [
  {
    name: 'code2_access_token',
    description: 'Access token from authorize request',
    async run (context) {
      const { store: { getItem } } = context;
      return getItem('code2_access_token');
    }
  }
];
