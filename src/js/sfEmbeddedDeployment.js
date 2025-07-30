export function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

			embeddedservice_bootstrap.init(
				'00DgL0000071swn',
				'Karan_Manral',
				'https://orgfarm-bc9c32a6ca-dev-ed.develop.my.site.com/ESWKaranManral1753872031937',
				{
					scrt2URL: 'https://orgfarm-bc9c32a6ca-dev-ed.develop.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};