import { trpcServer } from '$lib/server/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	//Change keys accordingly
	//Also look at lib/components/Interface.svelte
	const pupdad_socials = ['pupdad.socials', await trpcServer.fetchKV.ssr({ table: 'pupdad.socials' }, event)];
	const pupdad_links = ['pupdad.links', await trpcServer.fetchKV.ssr({ table: 'pupdad.links' }, event)];
	await pupdad_socials[1].sort((a, b) => (a.id > b.id) ? 1 : -1);
	await pupdad_links[1].sort((a, b) => (a.id > b.id) ? 1 : -1);

	const snre_socials = ['snre.socials', await trpcServer.fetchKV.ssr({table: 'snre.socials'}, event)];
	const snre_links = ['snre.links', await trpcServer.fetchKV.ssr({table: 'snre.links'}, event)];
	const snre_music = ['snre.music', await trpcServer.fetchKV.ssr({table: 'snre.music'}, event)];

	await snre_socials[1].sort((a, b) => (a.id > b.id) ? 1 : -1);
	await snre_links[1].sort((a, b) => (a.id > b.id) ? 1 : -1);
	await snre_music[1].sort((a, b) => (a.id > b.id) ? 1 : -1);

	return {
		pupdad_socials,
		pupdad_links,
		snre_socials,
		snre_links,
		snre_music,
	};
};
